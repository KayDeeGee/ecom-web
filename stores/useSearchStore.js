export const useSearchStore = defineStore('search', () => {
    const searchQuery = ref("");
    const searchResults = ref([]);
    const loading = ref(false);

    const setSearchQuery = (query) => {
        searchQuery.value = query;
    };

    const searchProducts = async () => {
        if (!searchQuery.value) return;
        loading.value = true;

        try {
            const data = await $fetch(`/api/products/?title=${searchQuery.value}`);
            searchResults.value = data.value || [];
        } catch (error) {
            console.error("Search error:", error);
        } finally {
            loading.value = false;
        }
    };

    return { 
        searchQuery,
        searchResults, 
        loading, 
        setSearchQuery,
        searchProducts,
    };
});