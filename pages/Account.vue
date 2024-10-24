<template>
    <div class="grid h-full grid-cols-12 gap-4">
        <div class="col-span-3 flex flex-col gap-4">
            <div class="bg-primary p-4 text-white">
                <div class="flex gap-4">
                    <NuxtImg
                        :src="user?.imageUrl"
                        format="webp"
                        alt="Logo"
                        class="h-24 w-24 rounded-full object-cover" />
                    <div>
                        <div class="text-2xl font-medium">{{ user?.name }}</div>
                        <div class="">
                            {{ user?.email }}
                        </div>
                        <div class="">
                            {{ user?.phone }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-full bg-white p-4">
                <div
                    v-for="section in sections"
                    :key="section.name"
                    @click="currentSection = section.name"
                    class="cursor-pointer rounded p-2"
                    :class="
                        currentSection == section.name
                            ? 'bg-primary text-white'
                            : 'hover:bg-gray-100'
                    ">
                    {{ section.name }}
                </div>
            </div>
        </div>
        <div class="col-span-9">
            <div class="flex h-full flex-col bg-white p-4">
                <div class="text-2xl font-bold text-green-700">
                    {{ currentSection }}
                </div>
                <Divider />
                <Profile v-if="currentSection === 'Profile'" />
                <Orders v-if="currentSection === 'Orders'" />
                <Addresses v-if="currentSection === 'Addresses'" />
                <!-- <div class="flex flex-grow flex-col justify-center"> -->
                <!-- <Payment v-if="currentSection === 'Payment'" /> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const user = useStorage("user", {});

const sections = [
    { name: "Profile" },
    { name: "Orders" },
    { name: "Addresses" }
];

const currentSection = useState("currentSection", () => "Profile");
</script>
