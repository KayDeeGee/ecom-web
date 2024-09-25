<template>
    <div class="mb-5 text-center">
        <p>{{ superTitle }}</p>
        <h1 class="text-8xl font-bold">{{ title }}</h1>
        <p>{{ subTitle }}</p>
    </div>
</template>

<script setup>
defineProps({
    superTitle: String,
    title: String,
    subTitle: String
});
</script>

<style lang="scss" scoped></style>
