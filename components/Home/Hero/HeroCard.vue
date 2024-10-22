<template>
    <NuxtLink
        v-if="props"
        :to="linkType == 'section' ? null : redirect"
        @click.prevent="scrollToSection"
        class="relative h-full w-full cursor-pointer bg-slate-400">
        <NuxtImg
            :src="imgUrl || ''"
            alt=""
            class="w-full object-cover"
            :style="`height: ${height}`"
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
//

const props = defineProps({
    imgUrl: String,
    height: String,
    title: String,
    textSize: String,
    redirect: String,
    linkType: {
        type: String,
        default: "section" // Default value
    }
});

const scrollToSection = () => {
    const target = document.querySelector(props.redirect);
    const navbarHeight = 100; // Adjust for your navbar height

    if (target) {
        const topPosition = target.offsetTop - navbarHeight;

        window.scrollTo({
            top: topPosition,
            behavior: "smooth"
        });
    }
};
</script>

<style scoped></style>
