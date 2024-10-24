<template>
    <div>
        <div class="mb-4 flex justify-end">
            <UButton
                label="Add New Address"
                icon="i-heroicons-plus-20-solid"
                @click="isOpen = true" />
        </div>
        <div class="flex flex-col gap-4 overflow-y-auto">
            <div
                v-for="address in user.addresses"
                class="border-primary rounded border p-4">
                <div>
                    <span class="font-bold">{{ address.name }}</span> |
                    {{ address.phone }}
                </div>
                <div> {{ address.address }}, {{ address.postal }} </div>
            </div>
        </div>
    </div>

    <UModal v-model="isOpen">
        <div class="p-4">
            <div class="text-primary text-2xl font-bold">Add New Address</div>
            <Divider />
        </div>
    </UModal>
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const isOpen = useState("addressModal", () => false);
const user = useStorage("user", {});
</script>
