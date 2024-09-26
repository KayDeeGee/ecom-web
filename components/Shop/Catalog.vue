<template>
    <div class="grid grid-cols-8 gap-3">
        <NuxtLink
            v-for="item in data"
            :key="item.id"
            :to="`/product/${item.id}`"
            class="col-span-2 flex h-full flex-col justify-between bg-slate-200">
            <NuxtImg :src="item.images[0]" alt="" class="h-auto w-full" />
            <div class="flex flex-col p-4">
                <h3 class="m-0 truncate text-lg font-medium">
                    {{ item.title }}
                </h3>
                <h4 class="">{{ item.category.name }}</h4>
                <h4 class="">$ {{ item.price }}</h4>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const { data } = await useFetch("https://api.escuelajs.co/api/v1/products");
</script>

<style lang="scss" scoped></style>
