<template>
    <section v-if="data && data.length" class="grid grid-cols-2 gap-1">
        <HeroCard
            :imgUrl="data[0].images[0]"
            height="716px"
            title="BEST SELLERS"
            textSize="text-9xl" />
        <div class="grid grid-rows-2 gap-1">
            <div class="row-span-1">
                <HeroCard
                    :imgUrl="data[1].images[0]"
                    height="356px"
                    title="NEW ARRIVALS"
                    textSize="text-6xl" />
            </div>
            <div class="row-span-1">
                <div class="grid h-full flex-1 grid-cols-12 gap-1">
                    <div class="col-span-6 grid grid-rows-2 gap-1">
                        <div class="row-span-1 bg-white">
                            <HeroCard
                                :imgUrl="data[2].images[0]"
                                height="176px"
                                title="SHOP NOW!"
                                textSize="text-3xl" />
                        </div>
                        <div class="row-span-1 bg-white">
                            <HeroCard
                                :imgUrl="data[3].images[0]"
                                height="176px"
                                title="BASICS"
                                textSize="text-3xl" />
                        </div>
                    </div>
                    <div class="col-span-6">
                        <HeroCard
                            :imgUrl="data[4].images[0]"
                            height="356px"
                            title="HOT ITEMS"
                            textSize="text-5xl" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import HeroCard from "@/components/Home/Hero/HeroCard.vue";
const { data, status, error, refresh, clear } = await useLazyFetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=5"
);

// console.log(data.value)
</script>

<style scoped></style>
