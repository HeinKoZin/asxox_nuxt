// ==== actions ====
const actions = {
  async getWidgetOneAds({ commit }) {
    try {
      const res = await this.$axios.get("ads/widget/1");

      commit("SET_WIDGET_ONE_ADS", res?.data?.data);
    } catch (error) { }
  },
};

export default actions;
