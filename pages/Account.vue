<template>
    <div>
        <div>My Account</div>
        <div>
            {{ user }}
        </div>
    </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const user = useStorage("user", {});
</script>

<style lang="scss" scoped></style>
