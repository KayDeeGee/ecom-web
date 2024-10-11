<template>
    <div class="grid h-full grid-cols-12 gap-4">
        <div class="col-span-9 flex flex-col gap-4">
            <div class="bg-white p-4">
                <div class="flex">
                    <h1 class="text-4xl font-bold">Cart</h1>
                </div>
                <div class="my-4 h-[1px] w-full bg-gray-300" />
                <div class="grid grid-cols-12">
                    <div class="col-span-4 flex gap-4">
                        <UCheckbox class="self-center" v-model="selectAll" />
                        <div>Product</div>
                    </div>
                    <div class="col-span-2 text-center"> Unit Price </div>
                    <div class="col-span-3 text-center"> Quantity </div>
                    <div class="col-span-2 text-center"> Total Price </div>
                    <div class="col-span-1 text-center"> Actions </div>
                </div>
            </div>
            <div v-if="loading" class="h-full">
                <USkeleton
                    class="col-span-12 h-full"
                    :ui="{ background: 'bg-gray-600' }" />
            </div>
            <div
                v-else-if="cart.length"
                v-for="item in cart"
                class="grid grid-cols-12 bg-white p-4"
                :to="`/product/${item.id}`"
                loading="lazy">
                <div class="col-span-4 flex gap-4">
                    <UCheckbox
                        class="self-center"
                        v-model="selectedItems"
                        :value="item.id" />
                    <NuxtLink :to="`/product/${item.id}`">
                        <NuxtImg
                            :src="item.images?.[0]"
                            alt=""
                            class="h-16 w-16"
                            loading="lazy"
                            format="webp" />
                    </NuxtLink>
                    <div class="flex flex-col">
                        <NuxtLink :to="`/product/${item.id}`">
                            <h5 class="font-medium">{{ item.title }}</h5>
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-span-2 flex items-center justify-center">
                    $ {{ item.price }}
                </div>
                <div
                    class="col-span-3 flex flex-col items-center justify-center">
                    <div class="flex items-center gap-1">
                        <UButton
                            color="primary"
                            variant="solid"
                            class="justify-center text-lg"
                            @click="updateQuantity(-1, item.id)">
                            <UIcon name="ic:baseline-minus" class="h-5 w-5" />
                        </UButton>
                        <div
                            class="border-primary w-20 flex-grow rounded border p-1 text-center">
                            {{ item.quantity }}
                        </div>
                        <UButton
                            color="primary"
                            variant="solid"
                            class="justify-center text-lg"
                            @click="updateQuantity(1, item.id)">
                            <UIcon name="ic:baseline-plus" class="h-5 w-5"
                        /></UButton>
                    </div>
                </div>
                <div
                    class="col-span-2 flex items-center justify-center font-bold">
                    $ {{ item.price * item.quantity }}
                </div>
                <div class="col-span-1 flex items-center justify-center">
                    <UButton
                        color="red"
                        variant="outline"
                        class="justify-center text-lg"
                        @click="openDeleteModal(item.id)">
                        <UIcon name="ic:baseline-delete" class="h-5 w-5" />
                    </UButton>
                </div>
            </div>
            <div v-else class="bg-white p-4 text-center text-2xl font-bold">
                <div>No items in cart</div>
                <UButton
                    label="Shop Now!"
                    size="xl"
                    class="mb-1 mt-4"
                    :to="`/shop`" />
            </div>
        </div>
        <div class="col-span-3">
            <div class="sticky top-[92px] flex flex-col bg-white p-4">
                <h2 class="mb-4 text-2xl font-bold">Order Summary</h2>
                <div class="flex justify-between">
                    <div>Subtotal ({{ selectedItems.length }} items)</div>
                    <div> ${{ subtotal }} </div>
                </div>
                <div class="flex justify-between">
                    <div>Shipping Fee:</div>
                    <div>$0</div>
                </div>
                <div class="flex justify-between">
                    <div>Discounts</div>
                    <div>$0</div>
                </div>
                <div class="my-4 h-[1px] w-full bg-gray-300" />

                <div class="flex justify-between text-lg font-bold">
                    <div>Subtotal:</div>
                    <div class="text-primary"> ${{ subtotal }}</div>
                </div>
                <UPopover mode="hover">
                    <UButton
                        :disabled="!selectedItems.length"
                        label="Checkout"
                        size="xl"
                        block
                        class="mt-4"
                        :to="`/checkout`" />
                    <template #panel v-if="!selectedItems.length">
                        <div class="p-4">
                            Please select an item to checkout.
                        </div>
                    </template>
                </UPopover>
            </div>
        </div>
    </div>

    <UModal v-model="isOpen" :ui="{ width: 'w-auto' }">
        <div class="flex flex-col items-center justify-center p-4">
            <p class="py-4 text-xl"
                >Are you sure you want to delete this item?</p
            >
            <div class="mt-4 flex w-full gap-4">
                <div class="w-full">
                    <UButton
                        @click="isOpen = false"
                        size="xl"
                        variant="outline"
                        block>
                        Close
                    </UButton>
                </div>
                <div class="w-full">
                    <UButton @click="deleteItem(itemToDelete)" size="xl" block>
                        Delete
                    </UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
import { useSubtotal } from "~/composables/useSubtotal";

const cart = useStorage("cart", []);
let checkoutItems = ref([]);

const selectedItems = ref([]);
const selectAll = ref(false);
const itemToDelete = ref(null);
const isOpen = ref(false);
const loading = ref(true);

onBeforeMount(() => {
    checkoutItems = useStorage("checkoutItems", [], sessionStorage);
    checkoutItems.value = [];
});

onMounted(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        loading.value = false; // Set loading to false once data is retrieved
    }
});

const updateQuantity = (action, id) => {
    const index = cart.value.findIndex((item) => item.id === id);

    if ((cart.value[index].quantity || 0) + action < 1) {
        openDeleteModal(id);
        return;
    }

    cart.value[index].quantity = (cart.value[index].quantity || 0) + action;
};

const openDeleteModal = (id) => {
    isOpen.value = true;
    itemToDelete.value = id;
};

const deleteItem = (id) => {
    const index = cart.value.findIndex((item) => item.id === id);
    cart.value.splice(index, 1);
    isOpen.value = false;
    return;
};

watch(selectedItems, (newSelectedItems) => {
    checkoutItems.value = cart.value.filter((item) =>
        newSelectedItems.includes(item.id)
    );
});

watch(selectAll, (newSelectAll) => {
    if (newSelectAll) {
        selectedItems.value = cart.value.map((item) => item.id);
    } else {
        selectedItems.value = [];
    }
});

const { subtotal } = useSubtotal(cart, selectedItems);
</script>

<style scoped></style>
