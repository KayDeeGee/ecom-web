<template>
    <div class="flex gap-4">
        <div class="col-span-5">
            <swiper
                :style="{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff'
                }"
                :loop="true"
                :spaceBetween="10"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="mb-2 w-[512px]">
                <swiper-slide v-for="image in data.images">
                    <NuxtImg
                        :src="image"
                        alt=""
                        loading="lazy"
                        class="w-[512px] object-cover object-center" />
                </swiper-slide>
            </swiper>
            <swiper
                @swiper="setThumbsSwiper"
                :loop="true"
                :spaceBetween="10"
                :slidesPerView="3"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="w-[512px]">
                <swiper-slide v-for="image in data.images">
                    <NuxtImg
                        :src="image"
                        alt=""
                        loading="lazy"
                        class="h-full w-full" />
                </swiper-slide>
            </swiper>
        </div>

        <div class="col-span-5 flex flex-col gap-4">
            <h1 class="text-6xl font-bold">{{ data.title }}</h1>
            <h2 class="text-3xl font-bold">${{ data.price }}</h2>
            <p>{{ data.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "~/composables/useSwiper";

const { modules, thumbsSwiper, setThumbsSwiper } = useSwiper();

const route = useRoute();

const { data } = await useFetch(
    `https://api.escuelajs.co/api/v1/products/${route.params.id}`
);
</script>

<style lang="scss" scoped></style>
