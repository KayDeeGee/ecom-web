<template>
    <div>
        <div class="mb-4 flex justify-end">
            <UButton
                label="Add New Address"
                icon="i-heroicons-plus-20-solid"
                @click="isOpen = true" />
        </div>
        <div class="scroll-custom flex h-[356px] flex-col gap-4">
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
            <div class="text-primary flex justify-between text-2xl font-bold">
                <div>Add New Address</div>
                <UButton
                    icon="i-heroicons-x-mark-20-solid"
                    @click="isOpen = false" />
            </div>
            <Divider />
            <UForm
                :validate="validate"
                :state="state"
                @submit="handleSubmit"
                class="flex flex-col gap-2">
                <UFormGroup label="Name" name="name">
                    <UInput
                        placeholder="Name of the person associated with the address"
                        v-model="state.name" />
                </UFormGroup>
                <UFormGroup label="Phone Number" name="phone">
                    <UInput placeholder="Phone Number" v-model="state.phone" />
                </UFormGroup>
                <UFormGroup label="Postal Code" name="postal">
                    <UInput placeholder="Postal Code" v-model="state.postal" />
                </UFormGroup>
                <UFormGroup label="Address" name="address">
                    <UTextarea
                        placeholder="Full Address (include landmark/s)"
                        v-model="state.address" />
                </UFormGroup>
                <UButton
                    block
                    type="submit"
                    label="Save"
                    color="primary"
                    class="mt-2 text-xl font-bold" />
            </UForm>
        </div>
    </UModal>
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const isOpen = useState("addressModal", () => false);
const user = useStorage("user", {});

const state = reactive({
    name: undefined,
    phone: undefined,
    postal: undefined,
    address: undefined
});

const validate = () => {
    const errors = [];
    if (!state.name) errors.push({ path: "name", message: "Required" });
    if (!state.phone) errors.push({ path: "phone", message: "Required" });
    if (!state.postal) errors.push({ path: "postal", message: "Required" });
    if (!state.address) errors.push({ path: "address", message: "Required" });
    return errors;
};

const handleSubmit = () => {
    user.value.addresses.unshift(state);
    isOpen.value = false;
};
</script>

<style>
.scroll-custom {
    @apply overflow-y-auto;
}
.scroll-custom::-webkit-scrollbar {
    width: 0.5rem;
    margin-left: 0.5rem;
}
.scroll-custom::-webkit-scrollbar-thumb {
    @apply bg-primary rounded-md;
}
.scroll-custom::-webkit-scrollbar-track {
    @apply bg-gray-200;
}
.scroll-custom {
    scrollbar-width: thin;
    scrollbar-color: #e5e7eb; /* thumb color track color */
}
</style>
