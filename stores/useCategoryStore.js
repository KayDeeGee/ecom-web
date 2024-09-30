export const useCategoryStore = defineStore('category', () => {
    const selectedCategory = ref('');
    const categoryData = ref(null);
    const loading = ref(false);
    const setCategory = (category) => {
        selectedCategory.value = category;
        fetchCategoryData(category);
    };

    const fetchCategoryData = async (category) => {
        if (!category) {
            categoryData.value = null;
            return;
        }
        try {
            loading.value = true
            let response;
            if (category == "all") {
                response = await fetch(`https://api.escuelajs.co/api/v1/products`);
            }
            else {
                response = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${category}`);
            }
            categoryData.value = await response.json();
        } catch (error) {
            console.error('Error fetching category:', error);
        } finally {
            loading.value = false; // Set loading to false when fetching completes
        }
    };

    return {
        selectedCategory,
        categoryData,
        loading,
        setCategory,
        fetchCategoryData,
    };
});