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

  SET_PRODUCT_FAVOURITE(state, productId) {
    for (let i = 0; i < state.categoryProducts.length; i++) {
      for (let j = 0; j < state.categoryProducts[i].products.length; j++) {
        if (state.categoryProducts[i].products[j].id === productId) {
          this.commit("SET_CATEGORY_PRODUCT_FAVOURITE", { i, j });
          console.log(i, j);
        }
      }
    }
  },
};

export default mutations;
