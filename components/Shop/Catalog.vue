<template>
    <div v-if="loading" class="grid grid-cols-12 gap-3">
        <USkeleton
            class="col-span-12 h-full"
            :ui="{ background: 'bg-gray-600' }" />
    </div>
    <div
        v-else-if="displayData && displayData.length"
        class="grid grid-cols-8 gap-3 overflow-y-auto">
        <NuxtLink
            v-for="item in displayData"
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
                <h4 class="text-primary font-bold">$ {{ item.price }}</h4>
            </div>
        </NuxtLink>
    </div>

    <div v-else class="text-center text-2xl font-bold">
        <div class="bg-white p-4">No items in {{ categoryLabel }}</div>
    </div>
</template>

<script setup>
import { useCategoryStore } from "~/stores/useCategoryStore";
import { useSearchStore } from "~/stores/useSearchStore";

const categoryStore = useCategoryStore();
const searchStore = useSearchStore();
const searchResults = useState("searchResults", () => []);

const fetchSearchResults = async () => {
    if (!searchStore.searchQuery) {
        searchResults.value = [];
        return;
    }

    try {
        searchResults.value = await $fetch(
            `https://api.escuelajs.co/api/v1/products/?title=${searchStore.searchQuery}`
        ).then(categoryStore.setCategory(null));
    } catch (error) {
        console.error("Error fetching search results:", error);
        searchResults.value = [];
    }
};

watch(() => searchStore.searchQuery, fetchSearchResults, { immediate: true });

const displayData = computed(() => {
    return searchStore.searchQuery
        ? searchResults.value
        : categoryStore.categoryData;
});

const categoryLabel = computed(() => {
    if (searchStore.query) {
        return `Search Results for "${searchStore.query}"`;
    }
    switch (categoryStore.selectedCategory) {
        case "all":
            return "All";
        case "1":
            return "Clothes";
        case "2":
            return "Electronics";
        case "3":
            return "Furniture";
        case "4":
            return "Shoes";
        case "5":
            return "Miscellaneous";
        default:
            return "";
    }
});
</script>

<style lang="scss" scoped></style>
