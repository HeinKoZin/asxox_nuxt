// ==== actions ====
const actions = {
  async getUser({ commit }) {
    try {
      const res = await axios.get("user");
      commit("SET_USER", res.data.data);
    } catch (error) {}
  },
};

export default actions;
