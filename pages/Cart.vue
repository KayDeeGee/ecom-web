<template>
    <div class="grid h-full grid-cols-12 gap-4">
        <div class="col-span-9 flex flex-col gap-4">
            <CartHeader />
            <div v-if="loading" class="h-full">
                <USkeleton
                    class="col-span-12 h-full"
                    :ui="{ background: 'bg-gray-600' }" />
            </div>
            <CartItem v-else-if="cart.length" />
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
            <CartSummary />
        </div>
    </div>
    <DeleteCartItemModal />
</template>

<script setup>
import { useStorage } from "@vueuse/core";
import { useCartStore } from "~/stores/useCartStore";
import DeleteCartItemModal from "~/components/Modal/DeleteCartItem.vue";

const cartStore = useCartStore();
const cart = useStorage("cart", []);
const loading = ref(true);

cartStore.setCart(cart.value);
cartStore.selectAll = false;
cartStore.selectedItems = [];

onMounted(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
        loading.value = false;
    }
});
</script>

<style scoped></style>
