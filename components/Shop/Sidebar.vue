<template>
    <div>
        <div class="sticky top-[92px] rounded bg-white p-5 pb-8">
            <h3 class="mb-5 text-2xl">Categories</h3>
            <div class="space-y-2">
                <URadio
                    v-for="option of options"
                    :key="option.value"
                    v-model="selected"
                    v-bind="option"
                    @change="handleCategoryChange(option.value)" />
            </div>
        </div>
    </div>
</template>

<script setup>
const categoryStore = useCategoryStore();
const searchStore = useSearchStore();

const route = useRoute();
const categoryId = route.query.id || "all";

const options = [
    {
        value: "all",
        label: "All"
    },
    {
        value: "1",
        label: "Clothes"
    },
    {
        value: "2",
        label: "Electronics"
    },
    {
        value: "3",
        label: "Furniture"
    },
    {
        value: "4",
        label: "Shoes"
    },
    {
        value: "5",
        label: "Miscellaneous"
    }
];

const selected = ref(categoryId);
const handleCategoryChange = (value) => {
    categoryStore.setCategory(value);
    searchStore.setSearchQuery(null);
};

handleCategoryChange(selected.value);
</script>

<style lang="scss" scoped></style>
