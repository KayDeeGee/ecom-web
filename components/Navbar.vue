<template>
    <div
        class="col-span-12 grid grid-cols-12 items-center justify-between bg-white py-5"
    >
        <div class="justify-betwe col-span-10 col-start-2 flex justify-between">
            <div class="col-span-1">K</div>
            <div class="col-span-10 flex gap-8 text-xl font-medium">
                <a href="#hero">
                    <h3>About Me</h3>
                </a>
                <a href="#skills">
                    <h3>Skills</h3>
                </a>
                <a href="#projects">
                    <h3>Projects</h3>
                </a>
            </div>
            <div class="col-span-1">
                <UInput
                    v-model="q"
                    name="q"
                    placeholder="Search..."
                    icon="i-heroicons-magnifying-glass-20-solid"
                    autocomplete="off"
                    :ui="{ icon: { trailing: { pointer: '' } } }"
                >
                    <template #trailing>
                        <UButton
                            v-show="q !== ''"
                            color="gray"
                            variant="link"
                            icon="i-heroicons-x-mark-20-solid"
                            :padded="false"
                            @click="q = ''"
                        />
                    </template>
                </UInput>
            </div>
        </div>
    </div>
</template>

<script setup>
const q = ref("");
</script>

<style lang="scss" scoped></style>
