<template>
    <Hero />
    <LazyBestSellers />
    <LazyNewArrivals />
</template>

<script setup></script>

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
