
export const useCartStore = defineStore("cart",() => {
    const cart =  ref([]);
    const selectedItems = ref([]);
    const selectAll = ref(false);
    const itemToDelete = ref(null);
    const isOpen = ref(false);
    const loading = ref(true);

    const setSelectAll = (value) => {
        selectAll.value = value;
    }
    const setCart = (cartItems) => {
        cart.value = cartItems;
    };

    const updateQuantity = (action, id) => {
        const index = cart.value.findIndex((item) => item.id === id);
    
        if ((cart.value[index].quantity || 0) + action < 1) {
            openDeleteModal(id);
            return;
        }
    
        cart.value[index].quantity = (cart.value[index].quantity || 0) + action;
    };

    const openDeleteModal = (id) => {
        isOpen.value = true;
        itemToDelete.value = id;
    };

    const deleteItem = (id) => {
        const index = cart.value.findIndex((item) => item.id === id);
        cart.value.splice(index, 1);
        isOpen.value = false;
        return;
    };

    const subtotal = computed(() => {
        // Ensure both cart and selectedItems are not undefined
        if (!cart.value || !selectedItems.value) return 0;
        return cart.value
            .filter((item) => selectedItems.value.includes(item.id)) // Only selected items
            .reduce((acc, item) => acc + item.price * item.quantity, 0);
    });

    return{
        cart,
        loading,
        selectedItems,
        selectAll,
        itemToDelete,
        isOpen,
        setCart,
        setSelectAll,
        updateQuantity,
        openDeleteModal,
        deleteItem,
        subtotal,
    }
})