<template>
    <Hero />
    <BestSellers id="best-sellers" />
    <NewArrivals id="new-arrivals" />
    <ShopNow />
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const user = useStorage("user", {
    name: "David Bowie",
    email: "DaBowie@fakemail.com",
    phone: "09123456789",
    imageUrl: "/img/default-pic.jpg",
    addresses: [
        {
            name: "David Bowie",
            address: "B1 L1 fake street, fake city",
            phone: "09123456789",
            postal: "9999"
        },
        {
            name: "John Elton",
            address:
                "B1 L2 fake street, fake city, faker fake fake, another fake line",
            phone: "09987654321",
            postal: "9999"
        },
        {
            name: "David Bowie",
            address: "B1 L1 fake street, fake city",
            phone: "09123456789",
            postal: "9999"
        }
    ]
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
