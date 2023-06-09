// ==== getters =====
const getters = {
  categories(state) {
    return state.categories;
  },

  categoryProducts(state) {
    return state.categoryProducts;
  },
  recommendedProducts(state) {
    return state.draftRecommendedProducts;
  },

  // subcategories by category id
  subCategoriesByCategoryId(state) {
    return state.subCategoriesByCategoryId;
  },

  // products by pagination
  productsByPagination(state) {
    return state.productsByPagination;
  },

  // products by category id
  productsByCategoryId(state) {
    return state.productsByCategoryId;
  }
};

export default getters;
