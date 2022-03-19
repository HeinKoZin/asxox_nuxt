// ==== actions ====
const actions = {
  async getSlideAds({ commit }) {
    try {
      const res = await this.$axios.get("ads/widget/6");
      commit("SET_SLIDE_ADS", res?.data?.data);
    } catch (error) {}
  },
};

export default actions;
