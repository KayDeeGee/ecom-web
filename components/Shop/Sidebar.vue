<template>
    <div class="w-full"
        ><div class="h-full rounded bg-white p-5">
            <h3>Categories</h3>
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

const selected = ref("all");

const handleCategoryChange = (value) => {
    categoryStore.setCategory(value);
    console.log(value, "wowowow");
};

handleCategoryChange("all");
</script>

<style lang="scss" scoped></style>
