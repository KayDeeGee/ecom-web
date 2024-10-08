<template>
    <div
        class="grid min-h-[99vh] w-full grid-cols-12 grid-rows-[auto_1fr_auto] gap-5">
        <Navbar class="sticky top-0 z-50 w-full" />
        <div class="col-span-10 col-start-2 flex flex-col gap-10">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script></script>

<style scoped></style>
