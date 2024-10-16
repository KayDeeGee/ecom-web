<template>
    <NuxtLink
        to="#"
        @click.prevent="scrollToSection"
        class="relative h-full w-full bg-slate-400">
        <NuxtImg
            v-if="imgUrl"
            :src="imgUrl || ''"
            alt=""
            class="w-full object-cover"
            :style="`height: ${height}`"
            loading="lazy"
            format="webp" />
        <div class="absolute inset-0 z-10 bg-black opacity-30"></div>
        <!-- Dark overlay -->
        <h1
            class="absolute inset-0 z-20 flex items-center justify-center p-4 font-bold text-white"
            :class="textSize">
            {{ title }}
        </h1>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    imgUrl: String,
    height: String,
    title: String,
    textSize: String,
    redirect: String
});

const scrollToSection = () => {
    const target = document.querySelector(props.redirect);
    const navbarHeight = 100; // Navbar height to account for

    if (target) {
        const topPosition = target.getBoundingClientRect().top - navbarHeight;

        window.scrollTo({
            top: topPosition,
            behavior: "smooth"
        });
    }
};
</script>

<style scoped></style>
