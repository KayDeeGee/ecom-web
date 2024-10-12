<template>
    <div class="sticky top-[92px] flex flex-col bg-white p-4">
        <h2 class="mb-4 text-2xl font-bold">Order Summary</h2>
        <div class="flex justify-between">
            <div>Subtotal ({{ cartStore.selectedItems.length }} items)</div>
            <div> ${{ cartStore.subtotal }} </div>
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
            <div class="text-primary"> ${{ cartStore.subtotal }}</div>
        </div>
        <UPopover mode="hover">
            <UButton
                :disabled="!cartStore.selectedItems.length"
                label="Checkout"
                size="xl"
                block
                class="mt-4"
                :to="`/checkout`" />
            <template #panel v-if="!cartStore.selectedItems.length">
                <div class="p-4"> Please select an item to checkout. </div>
            </template>
        </UPopover>
    </div>
</template>

<script setup>
import { useCartStore } from "~/stores/useCartStore";

const cartStore = useCartStore();
</script>
