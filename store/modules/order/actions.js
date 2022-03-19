// ==== actions ====
const actions = {
  async getOrders({ commit }) {
    try {
      const res = await this.$axios.get("orders");
      commit("SET_ORDERS", res?.data?.data?.orders);
    } catch (error) {}
  },
};

export default actions;
