<template>
    <UModal v-model="model" title="Nuxt UI Modal">
        <div class="progressBar"></div>
        <div class="p-4">
            <p
                >This modal will close automatically in 3 seconds or when the
                button is clicked.</p
            >
            <UButton @click="closeModal">Close Now</UButton>
        </div>
    </UModal>
</template>

<script setup>
const model = defineModel({
    default: false
});

watch(model, (newModel) => {
    !newModel ? null : setTimeout(closeModal, 3000);
});

const closeModal = () => {
    model.value = false;
};
</script>

<style scoped>
.progressBar {
    @apply bg-primary m-1 h-2 w-full rounded-full;
    animation: shrink 3s linear forwards;
}

/* Define keyframes for shrinking the progress bar */
@keyframes shrink {
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
}
</style>
