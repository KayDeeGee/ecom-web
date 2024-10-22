<template>
    <Hero />
    <BestSellers id="best-sellers" />
    <NewArrivals id="new-arrivals" />
</template>

<script setup></script>

<style>
html {
    @apply bg-slate-100;
    scroll-behavior: smooth;
}

.mySwiper .swiper-slide {
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
</style>
