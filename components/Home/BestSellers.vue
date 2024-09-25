<template>
    <section class="flex flex-col">
        <div class="mb-5 text-center">
            <p>BEST SELLERS</p>
            <h1 class="text-8xl font-bold">BE THE BEST</h1>
            <p>Your best deserves the best.</p>
        </div>
        <swiper
            :slidesPerView="'auto'"
            :spaceBetween="18"
            :freeMode="true"
            :pagination="{
                clickable: true,
            }"
            :modules="modules"
        >
            <swiper-slide v-for="data in data">
                <NuxtImg :src="data.images[0]" alt="" class="" />
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

const modules = [FreeMode, Pagination];
const { data, status, error, refresh, clear } = await useFetch(
    "https://api.escuelajs.co/api/v1/products?offset=4&limit=5",
);
</script>

<style scoped>
.swiper-slide img {
    display: block;
    height: 512px;
    width: auto;
    object-fit: cover;
}

.swiper-slide {
    width: auto;
}
</style>
