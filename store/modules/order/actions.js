// ==== actions ====
const actions = {
  async getOrders({ commit }, { page }) {
    try {
      const res = await this.$axios.get(`orders?page=${page}`);
      commit("SET_ORDERS", res?.data?.data?.orders);
      commit("SET_ORDERS_PAGINATE", res?.data?.data?.pagination);
    } catch (error) { }
  },
};

export default actions;
