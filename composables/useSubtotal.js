import { computed } from 'vue';

export function useSubtotal(cart, selectedItems) {
    const subtotal = computed(() => {
        // Ensure both cart and selectedItems are not undefined
        if (!cart.value || !selectedItems.value) return 0;
        console.log(selectedItems.value, cart.value, "usesubtotal");
        return cart.value
            .filter((item) => selectedItems.value.includes(item.id)) // Only selected items
            .reduce((acc, item) => acc + item.price * item.quantity, 0);
    });

    return { subtotal };
}