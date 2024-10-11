import { computed } from 'vue';

export function useSubtotal(cart, selectedItems) {
    // Computed value for subtotal based on selected items in the cart
    const subtotal = computed(() => {
        return cart.value
            .filter((item) => selectedItems.value.includes(item.id)) // Only selected items
            .reduce((acc, item) => acc + item.price * item.quantity, 0);
    });

    return { subtotal };
}