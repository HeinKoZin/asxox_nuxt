const actions = {
  async getAllProducts({ commit }, { page }) {
    try {
      const res = await this.$axios.get(`products?page=${page}`);
      commit("SET_PRODUCTS", res?.data);
      return res?.data;
    }
    catch (error) { }
  },
}

export default actions;
