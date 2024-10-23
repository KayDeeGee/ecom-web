<template>
    <div class="mb-4">
        <div class="mb-2 text-lg font-medium">Select Payment Method</div>
        <div class="flex flex-col gap-2">
            <div
                v-for="option in options"
                :key="option.value"
                @click="paymentMethod = option.value"
                class="cursor-pointer rounded border p-4"
                :class="option.value == paymentMethod ? 'border-primary' : ''">
                <URadio
                    v-model="paymentMethod"
                    :value="option.value"
                    :label="option.label" />
            </div>
        </div>
    </div>
</template>

<script setup>
const options = [
    {
        value: "cod",
        label: "Cash on Delivery"
    },
    {
        value: "card",
        label: "Credit Card"
    },
    {
        value: "online",
        label: "Online"
    }
];

const paymentMethod = useState("paymentMethod", () => null);
</script>

<style lang="scss" scoped></style>
