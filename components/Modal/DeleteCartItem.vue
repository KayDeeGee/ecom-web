<template>
    <UModal v-model="cartStore.isOpen" :ui="{ width: 'w-auto' }">
        <div class="flex flex-col items-center justify-center p-4">
            <p class="py-4 text-xl"
                >Are you sure you want to delete this item?</p
            >
            <div class="mt-4 flex w-full gap-4">
                <div class="w-full">
                    <UButton
                        @click="cartStore.isOpen = false"
                        size="xl"
                        variant="outline"
                        block>
                        Close
                    </UButton>
                </div>
                <div class="w-full">
                    <UButton
                        @click="cartStore.deleteItem(cartStore.itemToDelete)"
                        size="xl"
                        block>
                        Delete
                    </UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>

<script setup>
import { useCartStore } from "~/stores/useCartStore";

const cartStore = useCartStore();
</script>
