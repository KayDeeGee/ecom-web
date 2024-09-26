<template>
    <div
        class="grid max-h-screen min-h-[99vh] w-full grid-cols-12 grid-rows-[auto_1fr_auto] gap-5">
        <Navbar />
        <div class="col-span-10 col-start-2 flex flex-col gap-10">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped></style>
