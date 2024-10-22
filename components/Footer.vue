<template>
    <div
        class="bg-primary col-span-12 grid grid-cols-12 items-center justify-between py-5">
        <div class="col-span-10 col-start-2 grid grid-cols-12 justify-between">
            <div class="col-span-4">
                <div class="flex items-center justify-start gap-2">
                    <NuxtImg
                        src="img/logo.png"
                        format="webp"
                        alt="Logo"
                        class="h-12 w-12" />
                    <h1 class="font-poppins text-3xl font-bold text-white"
                        >OH-Kei</h1
                    >
                </div>
            </div>
            <div class="col-span-4 text-white">
                <div class="mb-2 text-xl font-medium">Like this website?</div>
                <div class="">
                    <div class="flex items-center gap-2">
                        <UIcon name="mdi:envelope" class="h-5 w-5" />
                        <div>bascokylebryan@gmail.com</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <UIcon name="mdi:phone" class="h-5 w-5" />
                        <div>+63 992 350 5430</div>
                    </div>
                    <div class="flex items-center gap-2">
                        <UIcon name="mdi:web" class="h-5 w-5" />
                        <NuxtLink
                            to="https://nuxt-portfolio-h3zx02yjy-kaydeegees-projects.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >Portfolio</NuxtLink
                        >
                    </div>
                </div>
            </div>
            <div class="col-span-4">
                <div class="mb-2 text-xl font-medium text-white"
                    >Send me an email!</div
                >
                <EmailModule />
            </div>
        </div>
    </div>
</template>

<script setup>
const value = useState("value", () => "");
</script>

<style lang="scss" scoped></style>
