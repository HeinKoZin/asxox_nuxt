// ==== actions ====
const actions = {
  async getWishListProducts({ commit }) {
    try {
      const res = await this.$axios.get("wishlists");
      commit("SET_WISHLISH_PRODUCTS", res?.data?.data);
    } catch (error) {}
  },
};

export default actions;
