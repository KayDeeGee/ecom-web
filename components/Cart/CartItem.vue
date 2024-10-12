<template>
    <div
        v-for="item in cartStore.cart"
        class="grid grid-cols-12 bg-white p-4"
        :to="`/product/${item.id}`"
        loading="lazy">
        <div class="col-span-4 flex gap-4">
            <UCheckbox
                class="self-center"
                v-model="cartStore.selectedItems"
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
        <div class="col-span-3 flex flex-col items-center justify-center">
            <div class="flex items-center gap-1">
                <UButton
                    color="primary"
                    variant="solid"
                    class="justify-center text-lg"
                    @click="cartStore.updateQuantity(-1, item.id)">
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
                    @click="cartStore.updateQuantity(1, item.id)">
                    <UIcon name="ic:baseline-plus" class="h-5 w-5"
                /></UButton>
            </div>
        </div>
        <div class="col-span-2 flex items-center justify-center font-bold">
            $ {{ item.price * item.quantity }}
        </div>
        <div class="col-span-1 flex items-center justify-center">
            <UButton
                color="red"
                variant="outline"
                class="justify-center text-lg"
                @click="cartStore.openDeleteModal(item.id)">
                <UIcon name="ic:baseline-delete" class="h-5 w-5" />
            </UButton>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "~/stores/useCartStore";

const cartStore = useCartStore();

watch(
    () => cartStore.selectedItems,
    (newSelectedItems) => {
        if (newSelectedItems.length !== cartStore.cart.length) {
            cartStore.selectAll = false; // Uncheck "Select All" if not all items are selected
        } else {
            cartStore.selectAll = true; // Check "Select All" if all items are selected
        }
    }
);
</script>

<style lang="scss" scoped></style>
