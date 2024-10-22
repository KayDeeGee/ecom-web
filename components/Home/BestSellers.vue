<template>
    <section v-if="data" class="flex flex-col">
        <div class="mb-5 text-center">
            <p>BEST SELLERS</p>
            <h1 class="text-8xl font-bold">BE THE BEST</h1>
            <p>Your best deserves the best.</p>
        </div>
        <swiper
            :slidesPerView="'auto'"
            :spaceBetween="18"
            :freeMode="true"
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false
            }"
            :modules="modules">
            <swiper-slide
                v-for="item in data.length ? data : placeholderData"
                class="relative"
                :key="item.id"
                @click="">
                <NuxtLink :to="`/product/${item.id || ''}`">
                    <NuxtImg
                        :src="
                            item.images?.[0] ||
                            'https://fakeimg.pl/600x400?text=+'
                        "
                        alt=""
                        class="h-[400px] w-[400px] object-cover"
                        format="webp" />
                    <div
                        class="absolute bottom-0 z-10 w-full bg-black bg-opacity-40 p-5">
                        <h2
                            class="overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium text-white opacity-100"
                            >{{ item.title }}</h2
                        >
                    </div>
                </NuxtLink>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "~/composables/useSwiper";

const { modules } = useSwiper();

const { data } = await useFetch(
    "https://api.escuelajs.co/api/v1/products?offset=4&limit=5"
);

const placeholderData = [
    {
        id: 1,
        images: ["https://fakeimg.pl/600x400?text=No+Image"],
        title: "Placeholder Title"
    },
    {
        id: 2,
        images: ["https://fakeimg.pl/600x400?text=No+Image"],
        title: "Placeholder Title"
    }
];
</script>

<style scoped>
.swiper {
    height: auto;
}

.swiper-slide img {
    display: block;
    height: 400px;
    width: auto;
    object-fit: cover;
}

.swiper-slide {
    width: auto;
}
</style>
