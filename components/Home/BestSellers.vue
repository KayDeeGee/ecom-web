<template>
    <div class="w-full">
        <div class="text-center col-span-9">
            <p>BEST SELLERS</p>
            <h1 class="font-bold text-8xl">BE THE BEST</h1>
            <p>Your best deserves the best.</p>
        </div>
        <swiper :slidesPerView="3" :spaceBetween="18" :freeMode="true" :pagination="{
            clickable: true,
        }" :modules="modules" class="w-full h-20">
            <swiper-slide>Slide 1</swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const modules = [FreeMode, Pagination];



</script>

<style scoped></style>