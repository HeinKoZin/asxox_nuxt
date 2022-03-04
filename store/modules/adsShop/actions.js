// ==== actions ====
const actions = {
  async getAdsShops({ commit }) {
    try {
      const res = await this.$axios.get("shops");
      commit("SET_ADS_SHOPS", res?.data?.data);
    } catch (error) {}
  },
};

export default actions;
