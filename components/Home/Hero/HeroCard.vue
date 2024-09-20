<template>
    <div class="bg-slate-400 h-full w-full relative">
        <NuxtImg :src="imgUrl" alt="" class="object-cover w-full" :style="`height: ${height}`"/>
        <div class="absolute inset-0 bg-black opacity-30 z-10"></div> <!-- Dark overlay -->
        <h1 class="absolute inset-0 flex items-center justify-center font-bold text-white z-20"
        :class="textSize">
            {{ title }}
        </h1>
    </div>
</template>

<script setup>
const props = defineProps({
    imgUrl: String,
    height: String,
    title: String,
    textSize: String
});

</script>

<style  scoped></style>