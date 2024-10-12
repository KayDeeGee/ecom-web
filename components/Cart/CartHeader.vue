<template>
    <div class="bg-white p-4">
        <div class="flex">
            <h1 class="text-4xl font-bold">Cart</h1>
        </div>
        <div class="my-4 h-[1px] w-full bg-gray-300" />
        <div class="grid grid-cols-12">
            <div class="col-span-4 flex gap-4">
                <UCheckbox class="self-center" v-model="cartStore.selectAll" />
                <div>Product</div>
            </div>
            <div class="col-span-2 text-center"> Unit Price </div>
            <div class="col-span-3 text-center"> Quantity </div>
            <div class="col-span-2 text-center"> Total Price </div>
            <div class="col-span-1 text-center"> Actions </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "~/stores/useCartStore";

const cartStore = useCartStore();

watch(
    () => cartStore.selectAll,
    (newSelectAll) => {
        if (newSelectAll) {
            cartStore.selectedItems = cartStore.cart.map((item) => item.id); // Select all items
        } else if (cartStore.selectedItems.length !== cartStore.cart.length) {
            return;
        } else {
            cartStore.selectedItems = []; // Deselect all items
        }
    }
);
</script>
