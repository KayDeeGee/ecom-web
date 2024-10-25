<template>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-8 col-start-3">
            <div class="flex justify-end">
                <UButton
                    v-if="!isEdit"
                    label="Edit Profile"
                    icon="i-heroicons-pencil-square"
                    @click="editMode" />
                <UButton
                    v-else
                    label="Exit Edit"
                    variant="outline"
                    icon="i-heroicons-pencil-square"
                    @click="editMode" />
            </div>

            <form>
                <table class="w-full gap-4">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <UInput :disabled="!isEdit" v-model="name"
                            /></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <UInput :disabled="!isEdit" v-model="email"
                            /></td>
                        </tr>
                        <tr>
                            <td>Phone Number</td>
                            <td>
                                <UInput :disabled="!isEdit" v-model="phone"
                            /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div class="mt-4 flex justify-center gap-4">
                <UButton
                    variant="outline"
                    label="Cancel Changes"
                    @click="editMode"
                    :disabled="!isEdit" />
                <UButton
                    label="Save Changes"
                    @click="saveChanges"
                    :disabled="!isEdit" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStorage } from "@vueuse/core";

const user = useStorage("user", {});
const name = useState("userName", () => "");
const email = useState("userEmail", () => "");
const phone = useState("userPhone", () => "");
const isEdit = useState("isEdit", () => false);

onMounted(() => {
    name.value = user.value.name;
    email.value = user.value.email;
    phone.value = user.value.phone;
});

const saveChanges = () => {
    user.value.name = name.value;
    user.value.email = email.value;
    user.value.phone = phone.value;
};

const editMode = () => {
    if (isEdit.value) {
        resetValues();
    }

    isEdit.value = !isEdit.value;
};

const resetValues = () => {
    name.value = user.value.name;
    email.value = user.value.email;
    phone.value = user.value.phone;
};
</script>

<style>
td {
    @apply p-4 pe-0 text-end;
}
</style>
