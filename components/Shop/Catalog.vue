<template>
    <div v-if="categoryStore.loading" class="grid grid-cols-12 gap-3">
        <USkeleton
            class="col-span-12 h-full"
            :ui="{ background: 'bg-gray-600' }" />
    </div>
    <div
        v-else-if="categoryStore.categoryData"
        class="grid max-h-[756px] grid-cols-8 gap-3 overflow-y-auto">
        <NuxtLink
            v-for="item in categoryStore.categoryData"
            :key="item.id"
            :to="`/product/${item.id}`"
            class="col-span-2 flex h-full flex-col justify-between bg-slate-200">
            <NuxtImg
                :src="item.images?.[0]"
                alt=""
                class="h-auto w-full"
                loading="lazy" />
            <div class="flex flex-col p-4">
                <h3 class="m-0 truncate text-lg font-medium">{{
                    item.title
                }}</h3>
                <h4>{{ item.category.name }}</h4>
                <h4>$ {{ item.price }}</h4>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import { useCategoryStore } from "~/stores/useCategoryStore";

const categoryStore = useCategoryStore();
</script>

<style lang="scss" scoped></style>
