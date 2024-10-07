<template>
    <div class="grid h-full grid-cols-12">
        <div class="col-span-9 col-start-3 h-full">
            <div class="flex h-full gap-4">
                <div class="w-full">
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
                        <swiper-slide v-for="image in product.images">
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
                        class="mySwiper w-[512px]">
                        <swiper-slide v-for="image in product.images">
                            <NuxtImg
                                :src="image"
                                alt=""
                                loading="lazy"
                                class="h-full w-full" />
                        </swiper-slide>
                    </swiper>
                </div>

                <div
                    class="flex w-full flex-col justify-between gap-4 bg-white p-5">
                    <div class="flex flex-col">
                        <h1 class="mb-2 text-6xl font-bold">{{
                            product.title
                        }}</h1>
                        <h2 class="mb-4 text-3xl font-bold"
                            >$ {{ product.price }}</h2
                        >
                        <p>{{ product.description }}</p>
                    </div>
                    <div class="flex flex-col gap-4">
                        <div class="flex items-center">
                            <UButton
                                color="primary"
                                size="xl"
                                variant="solid"
                                class="justify-center text-lg"
                                @click="updateQuantity(-1)">
                                <UIcon
                                    name="ic:baseline-minus"
                                    class="h-5 w-5" />
                            </UButton>
                            <div class="w-20 text-center"> {{ quantity }} </div>
                            <UButton
                                color="primary"
                                size="xl"
                                variant="solid"
                                class="justify-center text-lg"
                                @click="updateQuantity(1)">
                                <UIcon name="ic:baseline-plus" class="h-5 w-5"
                            /></UButton>
                        </div>
                        <div class="flex gap-4">
                            <UButton
                                color="primary"
                                size="xl"
                                variant="soft"
                                class="flex-1 justify-center text-lg"
                                @click="addToCart()"
                                >Add To Cart</UButton
                            >
                            <AddToCart v-model="isModalOpen" />
                            <UButton
                                color="primary"
                                size="xl"
                                variant="solid"
                                class="flex-1 justify-center text-lg"
                                >Buy Now</UButton
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { useSwiper } from "~/composables/useSwiper";
import { useStorage } from "@vueuse/core";

const { modules, thumbsSwiper, setThumbsSwiper } = useSwiper();
const route = useRoute();

const { data: product } = await useFetch(
    `https://api.escuelajs.co/api/v1/products/${route.params.id}`
);

const quantity = ref(1);
const cart = useStorage("cart", []);
const isModalOpen = ref(false);

const updateQuantity = (action) => {
    if ((quantity.value || 0) + action < 1) return;

    quantity.value = (quantity.value || 0) + action;
};

const addToCart = () => {
    if (!Array.isArray(cart.value)) {
        cart.value = []; // Reset to an empty array if it's not an array
    }

    const existingProductIndex = cart.value.findIndex(
        (item) => item.id === product.value.id
    );

    if (existingProductIndex !== -1) {
        // If product exists, increase the quantity
        cart.value[existingProductIndex].quantity += quantity.value;
        isModalOpen.value = true;
        return;
    } else {
        // If product does not exist, add new product with quantity
        cart.value.push({ ...product.value, quantity: quantity.value });
        isModalOpen.value = true;
        return;
    }
};
</script>

<style lang="scss" scoped></style>
