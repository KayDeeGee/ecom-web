<template>
    <Hero />
    <BestSellers id="best-sellers" />
    <NewArrivals id="new-arrivals" />
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const user = useStorage("user", {
    name: "David Bowie",
    email: "DaBowie@fakemail.com",
    homeAddress: "B1 L1 fake street, fake city",
    officeAddress: "B2 L2 fake street, fake city"
});
</script>

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
