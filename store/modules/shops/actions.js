// ==== actions ====
const actions = {
  async getShops({ commit }) {
    try {
      const res = await this.$axios.get("shops");
      commit("SET_SHOPS", res?.data?.data);
    } catch (error) { }
  },
};

export default actions;
