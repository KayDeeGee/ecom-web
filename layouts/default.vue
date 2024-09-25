<template>
    <div class="grid min-h-[716px] w-full grid-cols-12 gap-5">
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
