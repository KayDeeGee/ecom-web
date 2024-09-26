<template>
    <div
        class="col-span-12 grid grid-cols-12 items-center justify-between bg-white py-5">
        <div
            class="col-span-10 col-start-2 grid grid-cols-12 items-center justify-between">
            <div class="col-span-4">K</div>
            <div
                class="col-span-4 flex justify-center gap-8 text-xl font-medium">
                <NuxtLink to="/">
                    <h3>Home</h3>
                </NuxtLink>
                <NuxtLink to="/shop">
                    <h3>Shop</h3>
                </NuxtLink>
                <NuxtLink to="/">
                    <h3>My Account</h3>
                </NuxtLink>
            </div>
            <div class="col-span-4 flex items-center gap-4">
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
                    <UChip color="red" text="14" size="2xl">
                        <UButton to="/cart" icon="bi:cart-fill" color="gray" />
                    </UChip>
                    <template #panel>
                        <div class="p-4"> </div>
                    </template>
                </UPopover>
            </div>
        </div>
    </div>
</template>

<script setup>
const q = ref("");
</script>

<style lang="scss" scoped></style>
