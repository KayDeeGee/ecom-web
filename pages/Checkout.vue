<template>
    <ClientOnly>
        <div v-if="checkoutItems" class="grid grid-cols-12 gap-4">
            <div class="col-span-6 col-start-3 flex flex-col gap-4">
                <div class="flex flex-col bg-white p-4">
                    <div class="text-2xl font-bold">Checkout</div>
                    <Divider />
                    <div>
                        <div class="text-lg font-medium">Shipping Address:</div>
                        <div
                            class="scroll-custom mt-4 flex gap-4 overflow-x-auto">
                            <div
                                v-for="(address, index) in user.addresses"
                                :key="index"
                                @click="selectedAddress = index"
                                class="h-24 w-80 flex-shrink-0 cursor-pointer rounded border p-2"
                                :class="
                                    selectedAddress == index
                                        ? 'border-primary'
                                        : ''
                                ">
                                <div class="flex">
                                    <URadio
                                        v-model="selectedAddress"
                                        :value="index"
                                        class="mr-2" />
                                    <div
                                        >{{ address.name }} |
                                        {{ address.phone }}
                                    </div>
                                </div>
                                <div>
                                    {{ address.address }}, {{ address.postal }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-for="(item, index) in checkoutItems"
                    class="grid grid-cols-12 bg-white p-4">
                    <div class="col-span-12">
                        <div class="font-medium"
                            >Item No. {{ index + 1 }} of
                            {{ checkoutItems.length }}</div
                        >
                        <div class="my-3 h-[1px] w-full bg-gray-200" />
                    </div>
                    <div class="col-span-6 flex gap-4">
                        <NuxtLink :to="`/product/${item.id}`">
                            <NuxtImg
                                :src="item.images?.[0]"
                                alt=""
                                class="h-16 w-16"
                                loading="lazy"
                                format="webp" />
                        </NuxtLink>
                        <div class="flex flex-col">
                            <h5 class="font-medium">{{ item.title }}</h5>
                        </div>
                    </div>
                    <div class="col-span-3 flex items-center justify-center">
                        $ {{ item.price }}
                    </div>
                    <div class="col-span-3 flex items-center justify-center">
                        Qty. {{ item.quantity }}
                    </div>
                </div>
            </div>
            <div class="col-span-3">
                <div class="bg-white p-4">
                    <PaymentMethod />
                    <h2 class="mb-2 text-2xl font-bold">Order Summary</h2>
                    <div class="flex justify-between">
                        <div>Subtotal ({{ checkoutItems.length }} items)</div>
                        <div> {{ subtotal }}</div>
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
                        <div class="text-primary">$ {{ subtotal }} </div>
                    </div>
                    <div>
                        <UButton
                            label="Place Order Now"
                            size="xl"
                            block
                            class="mt-4"
                            @click="isOpen = true" />
                    </div>
                </div>
            </div>
        </div>
        <div v-else>Error checking out</div>
    </ClientOnly>

    <UModal v-model="isOpen">
        <div class="flex flex-col items-center justify-center p-4">
            <p class="py-4 text-xl">Confirm Order?</p>
            <div class="mt-4 flex w-full gap-4">
                <div class="w-full">
                    <UButton
                        @click="isOpen = false"
                        size="xl"
                        variant="outline"
                        block>
                        No
                    </UButton>
                </div>
                <div class="w-full">
                    <UButton @click="orderConfirm" size="xl" block>
                        Yes
                    </UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
import PaymentMethod from "~/components/Checkout/PaymentMethod.vue";

const checkoutItems = ref([]);
const orders = useStorage("orders", []);
const user = useStorage("user", {});

const isOpen = useState("orderModal", () => false);
const selectedAddress = useState("selectedAddress", () => 0);

onMounted(() => {
    const storedItems = useStorage("checkoutItems", [], sessionStorage);
    checkoutItems.value = storedItems.value;
});

const subtotal = computed(() => {
    return checkoutItems.value.reduce((acc, item) => {
        return acc + (item.price * item.quantity || 0);
    }, 0);
});

const orderConfirm = () => {
    const newOrder = {
        items: [...checkoutItems.value],
        address: user.value.addresses[selectedAddress.value],
        orderDate: new Date().toISOString()
    };
    console.log(user.value.addresses);
    console.log(newOrder);
    orders.value.push(newOrder);

    isOpen.value = false;
};
</script>

<style scoped>
.scroll-custom {
    padding-bottom: 8px; /* Adds space between addresses and scrollbar */
}
.scroll-custom::-webkit-scrollbar {
    height: 8px;
}
.scroll-custom::-webkit-scrollbar-thumb {
    border-radius: 4px;
}
.scroll-custom::-webkit-scrollbar-track {
    background-color: #e5e7eb; /* Light gray */
}
</style>
