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
    } catch (error) { }
  },

  async getCategories({ commit }) {
    try {
      const res = await this.$axios.get("categories");
      commit("SET_CATEGORIES", res?.data?.data);
    } catch (error) { }
  },

  async getRecommendedProducts({ commit }) {
    try {
      const res = await this.$axios.get(`products/category/1?limit=10`);
      commit("SET_DRAFT_RECOMMENDED_PRODUCTS", res?.data?.data);
    } catch (error) { }
  },

  async getSubCategoriesByCategoryId({ commit }, categoryId) {
    try {
      const res = await this.$axios.get(`categories/${categoryId}`);
      commit("SET_SUBCATEGORIES_BY_CATEGORY_ID", res?.data?.data);
    } catch (error) { }
  },

  async getProductsByCategoryId({ commit }, { categoryId, limit = 15 }) {
    try {
      const res = await this.$axios.get(`products/category/${categoryId}?limit=${limit}`);
      commit("SET_PRODUCTS_BY_CATEGORY_ID", res?.data?.data);
    } catch (error) { }
  },

  async getProductsByPagination({ commit }, { categoryId, limit, page }) {
    try {
      const res = await this.$axios.get(`products/category/${categoryId}?limit=${limit}&page=${page}`);
      commit("SET_PRODUCTS_BY_PAGINATION", res?.data);
      return res?.data;
    } catch (error) { }
  }
};

export default actions;
