<template>
    <UModal v-model="isModalOpen" title="Nuxt UI Modal">
        <p
            >This modal will close automatically in 3 seconds or when the button
            is clicked.</p
        >
        <UButton @click="closeModal">Close Now</UButton>
    </UModal>
</template>

<script setup></script>

<style lang="scss" scoped></style>
