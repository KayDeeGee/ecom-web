<template>
    <div class="grid h-full grid-cols-12 gap-4">
        <div class="col-span-3 flex flex-col gap-4">
            <div class="bg-primary p-4 text-white">
                <div class="flex gap-4">
                    <ClientOnly>
                        <NuxtImg
                            :src="user?.imageUrl"
                            format="webp"
                            alt="Logo"
                            class="h-24 w-24 rounded-full object-cover" />
                        <div>
                            <div class="text-2xl font-medium">{{
                                user?.name
                            }}</div>
                            <div class="">
                                {{ user?.email }}
                            </div>
                            <div class="">
                                {{ user?.phone }}
                            </div>
                        </div>
                    </ClientOnly>
                </div>
            </div>
            <div class="h-full bg-white p-4">
                <div class="flex flex-col">
                    <NuxtLink
                        v-for="section in sections"
                        :key="section.name"
                        :to="`/account#${section.name.toLowerCase()}`"
                        class="cursor-pointer rounded p-2"
                        :class="
                            currentSection == section.name.toLowerCase()
                                ? 'bg-primary text-white'
                                : 'hover:bg-gray-100'
                        ">
                        {{ section.name }}
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div class="col-span-9">
            <div class="flex h-full flex-col bg-white p-4">
                <div class="text-2xl font-bold text-green-700">
                    {{
                        currentSection.charAt(0).toUpperCase() +
                        currentSection.slice(1)
                    }}
                </div>
                <Divider />
                <Profile
                    id="account-profile"
                    v-if="currentSection === 'profile'" />
                <Orders
                    id="account-orders"
                    v-if="currentSection === 'orders'" />
                <Addresses
                    id="account-addresses"
                    v-if="currentSection === 'addresses'" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";
import Profile from "~/components/Account/Profile.vue";
import Orders from "~/components/Account/Orders.vue";
import Addresses from "~/components/Account/Addresses.vue";

const route = useRoute();
const user = useStorage("user", {});
const currentSection = ref("profile");
const sections = [
    { name: "Profile" },
    { name: "Orders" },
    { name: "Addresses" }
];

onMounted(() => {
    setCurrentSection();
});

const setCurrentSection = () => {
    currentSection.value = route.hash.replace("#", "") || "profile";
};

watch(
    () => route.hash,
    () => {
        setCurrentSection();
    }
);
</script>
