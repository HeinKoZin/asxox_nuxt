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
};

export default getters;
