<template>
    <div class="grid grid-cols-12 gap-4">
        <Sidebar class="col-span-2 bg-slate-200" />
        <Catalog class="col-span-10" />
    </div>
</template>

<script setup>
import Sidebar from "~/components/Shop/Sidebar.vue";
import Catalog from "~/components/Shop/Catalog.vue";
</script>

<style scoped></style>
