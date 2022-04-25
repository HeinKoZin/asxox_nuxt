// ==== actions ====
const actions = {
  async getSearchedProducts({ commit }, {
    keyword,
    page,
  }) {
    try {
      const res = await this.$axios.post("products/search", { "keyword": keyword, "page": page });
      commit("SET_SEARCHED_PRODUCTS", res?.data);
      return res?.data;
    } catch (error) { }
  },

  setSearchKeyword({ commit }, keyword) {
    commit("SET_SEARCH_KEYWORD", keyword);
  }
};

export default actions;
