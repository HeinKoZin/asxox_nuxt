// ==== actions ====
const actions = {
  async getProductsByCategory(
    { commit, state },
    { categoryId, categoryName, limit, shopIndex }
  ) {
    try {
      const res = await this.$axios.get("products/category/" + categoryId, {
        params: {
          limit,
        },
      });
      const products = {
        categoryId,
        categoryName,
        products: res?.data?.data,
        shop: shopIndex || shopIndex == 0 ? state.adsShops[shopIndex] : null,
      };
      commit("SET_PRODUCTS_BY_CATEGORY", products);
    } catch (error) {}
  },

  async getCategories({ commit }) {
    try {
      const res = await this.$axios.get("categories");
      commit("SET_CATEGORIES", res?.data?.data);
    } catch (error) {}
  },
};

export default actions;
