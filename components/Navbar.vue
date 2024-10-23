<template>
    <div
        class="col-span-12 grid grid-cols-12 items-center justify-between bg-white">
        <div
            class="col-span-10 col-start-2 grid grid-cols-12 items-center justify-between">
            <div class="col-span-4 flex items-center gap-2">
                <NuxtLink to="/">
                    <NuxtImg
                        src="img/logo.png"
                        format="webp"
                        alt="Logo"
                        class="h-12 w-12" />
                </NuxtLink>
                <NuxtLink to="/">
                    <h1 class="font-poppins text-3xl font-bold">OH-Kei</h1>
                </NuxtLink>
            </div>
            <div
                class="col-span-4 flex justify-center gap-8 py-5 text-xl font-medium">
                <NuxtLink to="/">
                    <h3>Home</h3>
                </NuxtLink>
                <NuxtLink to="/shop">
                    <h3>Shop</h3>
                </NuxtLink>
                <NuxtLink to="/account">
                    <h3>My Account</h3>
                </NuxtLink>
            </div>
            <div class="col-span-4 flex items-center gap-4 py-5">
                <UInput
                    v-model="q"
                    name="q"
                    class="w-full"
                    placeholder="Search..."
                    icon="i-heroicons-magnifying-glass-20-solid"
                    autocomplete="off"
                    :ui="{ icon: { trailing: { pointer: '' } } }">
                    <template #trailing>
                        <UButton
                            v-show="q !== ''"
                            color="gray"
                            variant="link"
                            icon="i-heroicons-x-mark-20-solid"
                            :padded="false"
                            @click="q = ''" />
                    </template>
                </UInput>
                <UPopover mode="hover">
                    <ClientOnly>
                        <UChip color="red" :text="cart.length" size="2xl">
                            <UButton
                                to="/cart"
                                icon="bi:cart-fill"
                                color="gray" />
                        </UChip>
                    </ClientOnly>

                    <template #panel>
                        <div class="flex flex-col gap-4 p-4">
                            <div class="text-lg font-bold">Cart</div>
                            <div
                                v-if="cart.length > 0"
                                v-for="product in cart.slice(0, 5)"
                                class="flex gap-4">
                                <div>
                                    <NuxtImg
                                        :src="product.images?.[0]"
                                        alt=""
                                        class="h-16 w-16" />
                                </div>
                                <div
                                    class="w-[240px] text-ellipsis font-medium"
                                    >{{ product.title }}</div
                                >
                                <div class="text-primary font-medium"
                                    >${{ product.price }}</div
                                >
                            </div>
                            <div v-else> Your cart is empty. </div>
                            <div
                                v-if="cart.length > 5"
                                class="font-medium text-gray-500">
                                {{ cart.length - 5 }} more items in your cart
                                ...
                            </div>
                            <div>
                                <UButton
                                    v-if="cart.length > 0"
                                    to="/cart"
                                    color="primary"
                                    size="xl"
                                    variant="solid"
                                    class="w-full justify-center">
                                    View my cart
                                </UButton>
                                <UButton
                                    v-else
                                    to="/shop"
                                    color="primary"
                                    size="xl"
                                    variant="solid"
                                    class="w-full justify-center">
                                    Go to Shop
                                </UButton>
                            </div>
                        </div>
                    </template>
                </UPopover>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const cart = useStorage("cart", []); // default is an empty array if nothing exists in localStorage

// Reading the cart value
console.log(cart.value);

const q = ref("");
</script>

<style lang="scss" scoped></style>
