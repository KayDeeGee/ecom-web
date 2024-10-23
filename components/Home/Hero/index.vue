<template>
    <section v-if="data" class="grid grid-cols-2 gap-1">
        <USkeleton
            v-if="status == 'pending'"
            class="h-[716px] w-[716px]"
            :ui="{ background: 'bg-gray-600' }"></USkeleton>
        <HeroCard
            v-else
            :imgUrl="data[0]?.images[0] || 'https://fakeimg.pl/600x400?text=+'"
            height="716px"
            title="BEST SELLERS"
            textSize="text-9xl"
            redirect="#best-sellers" />
        <div class="grid gap-1">
            <USkeleton
                v-if="status == 'pending'"
                class="h-[356px] w-[356px]"
                :ui="{ background: 'bg-gray-600' }"></USkeleton>
            <HeroCard
                v-else
                :imgUrl="
                    data[1]?.images[0] || 'https://fakeimg.pl/600x400?text=+'
                "
                height="356px"
                title="NEW ARRIVALS"
                textSize="text-6xl"
                redirect="#new-arrivals" />
            <div class="grid h-full flex-1 grid-cols-12 gap-1">
                <div class="col-span-6 grid gap-1">
                    <USkeleton
                        v-if="status == 'pending'"
                        class="h-[356px] w-full"
                        :ui="{ background: 'bg-gray-600' }"></USkeleton>
                    <HeroCard
                        v-else
                        :imgUrl="
                            data[2]?.images[0] ||
                            'https://fakeimg.pl/600x400?text=+'
                        "
                        height="356px"
                        title="SHOP NOW!"
                        textSize="text-5xl"
                        redirect="/shop"
                        linkType="shop" />
                </div>
                <div class="col-span-6 grid gap-1">
                    <USkeleton
                        v-if="status == 'pending'"
                        class="h-[356px] w-full"
                        :ui="{ background: 'bg-gray-600' }"></USkeleton>
                    <HeroCard
                        v-else
                        :imgUrl="
                            data[4]?.images[0] ||
                            'https://fakeimg.pl/600x400?text=+'
                        "
                        height="356px"
                        title="CATEGORIES"
                        textSize="text-5xl"
                        redirect="#categories" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { data, status } = await useFetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=5"
);
</script>

<style scoped></style>
