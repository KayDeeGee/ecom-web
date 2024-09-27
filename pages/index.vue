<template>
    <Hero />
    <BestSellers />
    <NewArrivals />
</template>

<script setup>
import Hero from "@/components/Home/Hero/index.vue";
import BestSellers from "@/components/Home/BestSellers.vue";
import NewArrivals from "@/components/Home/NewArrivals.vue";
</script>

<style>
html {
    @apply bg-slate-100;
}

.mySwiper .swiper-slide {
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
</style>
