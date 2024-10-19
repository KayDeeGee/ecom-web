<template>
    <form @submit.prevent="sendEmail" class="flex flex-col gap-4">
        <UInput
            v-model="form.userEmail"
            placeholder="Email"
            icon="i-heroicons-envelope"
            type="email"
            required
            size="lg" />
        <div v-if="formErrors.userEmail" class="flex">
            <span class="error-message">
                {{ formErrors.userEmail }}
            </span>
        </div>
        <UTextarea v-model="form.message" size="lg" required minlength="10" />
        <div v-if="formErrors.message" class="flex">
            <span class="error-message">
                {{ formErrors.message }}
            </span>
        </div>
        <div class="">
            <UButton
                class="text-primary bg-white px-6"
                type="submit"
                placeholder="Type your message here..."
                >Send Email</UButton
            >
        </div>
    </form>
</template>

<script setup>
import emailjs from "@emailjs/browser";

const form = useState("form", () => ({
    userEmail: "",
    message: ""
}));

const formErrors = reactive({
    userEmail: null,
    message: null
});

emailjs.init({
    publicKey: "44bvfsqTTFgav81oG",
    blockHeadless: true,
    blockList: {
        watchVariable: "userEmail"
    },
    limitRate: {
        id: "app",
        throttle: 10000
    }
});

const validateForm = () => {
    console.log("validating form...");
    formErrors.userEmail = form.value.userEmail ? null : "Email is required.";
    console.log(form.value.userEmail);
    if (
        form.value.userEmail &&
        !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.value.userEmail)
    ) {
        formErrors.userEmail = "Please enter a valid email address.";
    }

    formErrors.message = form.value.message ? null : "Message is required.";
    if (form.value.message && form.value.message.length < 10) {
        formErrors.message = "Message must be at least 10 characters.";
    }

    return !formErrors.userEmail && !formErrors.message;
};

const sendEmail = (event) => {
    event.preventDefault();
    if (validateForm()) {
        emailjs.send("service_yolskgb", "template_g1fha6h", form.value).then(
            (result) => {
                console.log("sending email...");

                console.log("Email successfully sent!", result.text);
                alert("Email successfully sent!");
            },
            (error) => {
                console.log("sending email...");

                console.log("Failed to send email.", error.text);
            }
        );
    }
};
</script>

<style scoped>
.error-message {
    @apply flex rounded-full bg-red-500 px-5 text-white;
}
</style>
