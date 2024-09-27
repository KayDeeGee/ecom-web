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
            :autoplay="{
                delay: 2500,
                disableOnInteraction: false
            }"
            :modules="modules">
            <swiper-slide
                v-for="data in data"
                class="relative"
                :key="data.id"
                @click="">
                <NuxtLink :to="`/product/${data.id}`">
                    <NuxtImg :src="data.images[0]" alt="" class="h-" />
                    <div
                        class="absolute bottom-0 z-10 w-full bg-black bg-opacity-40 p-5">
                        <h2
                            class="text-ellipsis text-lg font-medium text-white opacity-100"
                            >{{ data.title }}</h2
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

const { data, status, error, refresh, clear } = await useFetch(
    "https://api.escuelajs.co/api/v1/products?offset=4&limit=5"
);
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
