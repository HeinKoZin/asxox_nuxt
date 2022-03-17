// ==== actions ====
const actions = {
  async getProductsByCategory(
    { commit, rootState },
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
        shop:
          shopIndex || shopIndex == 0
            ? rootState.adsShop.adsShops[shopIndex]
            : null,
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

  async getRecommendedProducts({ commit }) {
    try {
      const res = await this.$axios.get(`products/category/1?limit=15`);
      commit("SET_DRAFT_RECOMMENDED_PRODUCTS", res?.data?.data);
    } catch (error) {}
  },
};

export default actions;
