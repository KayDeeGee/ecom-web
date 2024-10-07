<template>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-9 grid gap-4">
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
            <div
                v-for="item in cart"
                class="grid grid-cols-12 bg-white p-4"
                :to="`/product/${item.id}`">
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
                        variant="solid"
                        class="justify-center text-lg"
                        @click="deleteModal(item.id)">
                        <UIcon name="ic:baseline-delete" class="h-5 w-5" />
                    </UButton>
                </div>
            </div>
        </div>
        <div class="col-span-3">
            <div class="flex flex-col bg-white p-4">
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

                <UButton label="Checkout" block class="mt-4" />
            </div>
        </div>
        <!-- 
        1. "table" headers - button(select all) Unit Price, Quantity, Subtotal, delete somewhere here i guess
        2. "table" body - add icon for delete
        3. order summary
        -->
    </div>

    <UModal v-model="isOpen">
        <div class="p-4">
            <div>
                {{}}
            </div>
            <p>Are you sure you want to delete this item?</p>
            <UButton @click="isOpen = false">Close Now</UButton>
        </div>
    </UModal>
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const cart = useStorage("cart", []);

const selectedItems = ref([]);
const selectAll = ref(false);
const isOpen = ref(false);
let subtotal = 0;

const updateQuantity = (action, id) => {
    const index = cart.value.findIndex((item) => item.id === id);

    if ((cart.value[index].quantity || 0) + action < 1) return;

    cart.value[index].quantity = (cart.value[index].quantity || 0) + action;
};

const deleteModal = (id) => {
    isOpen.value = true;
};

watch(selectAll, (newSelectAll) => {
    if (newSelectAll) {
        selectedItems.value = cart.value.map((item) => item.id);
    } else {
        selectedItems.value = [];
    }
});

watch(selectedItems, (newSelectedItems) => {
    console.log(selectedItems.value);
    subtotal = 0;
    for (let x = 0; x < newSelectedItems.length; x++) {
        const index = cart.value.findIndex(
            (item) => item.id === newSelectedItems[x]
        );
        subtotal +=
            (cart.value[index].price || 0) * (cart.value[index].quantity || 0);
    }
});
</script>

<style scoped></style>
