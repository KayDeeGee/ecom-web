<template>
    <section>
        <SectionTitle
            superTitle="CATEGORIES"
            title="SHOP BY CATEGORY"
            subTitle="Choose what you want to buy." />
        <div class="grid grid-cols-5 gap-4">
            <NuxtLink
                :to="`/shop?id=${item.id}`"
                v-for="item in data"
                :key="item.id"
                class="relative h-full w-full cursor-pointer">
                <NuxtImg
                    :src="item.imgUrl"
                    alt=""
                    class="h-[420px] w-full object-cover" />
                <div class="absolute inset-0 z-10 bg-black opacity-40"></div>
                <div
                    class="absolute inset-0 z-20 flex p-4 font-bold text-white">
                    <h1 class="text-3xl">
                        {{ item.title }}
                    </h1>
                </div>
            </NuxtLink>
        </div>
    </section>
</template>

<script setup>
const data = [
    {
        id: 1,
        title: "Clothes",
        imgUrl: "/img/cat-clothes.jpeg"
    },
    {
        id: 2,
        title: "Electronics",
        imgUrl: "/img/cat-electronics.jpeg"
    },
    {
        id: 3,
        title: "Furniture",
        imgUrl: "/img/cat-furniture.jpeg"
    },
    {
        id: 4,
        title: "Shoes",
        imgUrl: "/img/cat-shoes.jpeg"
    },
    {
        id: 5,
        title: "Miscellaneous",
        imgUrl: "/img/cat-misc.jpg"
    }
];
</script>

<style lang="scss" scoped></style>
