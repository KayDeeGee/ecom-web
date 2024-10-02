<template>
    <section class="flex flex-col">
        <SectionTitle
            superTitle="NEW ARRIVALS"
            title="STAY FRESH"
            subTitle="Stay fresh with the newest gears we offer." />
        <div class="h-full w-full">
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
                class="mb-2">
                <swiper-slide v-for="(item, index) in data" :key="index">
                    <div class="grid grid-cols-12 gap-4">
                        <NuxtImg
                            :src="item.images[0]"
                            alt=""
                            loading="lazy"
                            format="webp"
                            class="col-span-8 h-[60vh] w-full object-cover object-center" />
                        <div class="col-span-4 flex flex-col gap-4">
                            <h1 class="text-6xl font-bold">{{ item.title }}</h1>
                            <h2 class="text-3xl font-bold"
                                >${{ item.price }}</h2
                            >
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>

            <swiper
                @swiper="setThumbsSwiper"
                :loop="true"
                :spaceBetween="10"
                :slidesPerView="4"
                :freeMode="true"
                :watchSlidesProgress="true"
                :modules="modules"
                class="mySwiper h-32">
                <swiper-slide v-for="(item, index) in data" :key="index">
                    <NuxtImg
                        :src="item.images[0]"
                        alt=""
                        loading="lazy"
                        class="h-full w-full object-cover" />
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const modules = [FreeMode, Navigation, Thumbs];

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const { data } = await useLazyFetch("https://api.escuelajs.co/api/v1/products");
</script>

<style scoped>
.mySwiper .swiper-slide {
    opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
</style>
