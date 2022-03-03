// ==== mutations =====
const mutations = {
  SET_CATEGORIES(state, data) {
    state.categories = data;
  },

  SET_PRODUCTS_BY_CATEGORY(state, data) {
    state.categoryProducts.push(data);
  },

  SET_CATEGORY_PRODUCT_FAVOURITE(state, { categoryIndex, productIndex }) {
    state.categoryProducts[categoryIndex].products[productIndex].is_wishlist =
      !state.categoryProducts[categoryIndex].products[productIndex].is_wishlist;
  },
};

export default mutations;
