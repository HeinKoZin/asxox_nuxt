// ==== state ====
const state = () => ({
  isMobileMenuOpen: false,
  isCartOpen: false,
  wishListProductList: [],
});

// ==== getters =====
const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },

  token() {
    return localStorage.getItem("token");
  },

  isMobileMenuOpen(state) {
    return state.isMobileMenuOpen;
  },

  isCartOpen(state) {
    return state.isCartOpen;
  },

  wishListProductList(state) {
    return state.wishListProductList;
  },
};

// ==== mutations =====
const mutations = {
  SET_USER(state, data) {
    localStorage.setItem("user_info", JSON.stringify(data.user_info));
    localStorage.setItem("loggedIn", JSON.stringify(true));

    state.auth.user = JSON.parse(localStorage.getItem("user_info"));
  },
  SET_MOBILE_MENU(state, data) {
    state.isMobileMenuOpen = data;
  },

  SET_CART(state, data) {
    state.isCartOpen = data;
  },

  SET_WISHLISH_PRODUCTS(state, data) {
    state.wishListProductList = data;
  },
};

// ==== actions ====
const actions = {
  async getUser({ commit }) {
    try {
      const res = await axios.get("user");
      commit("SET_USER", res.data.data);
    } catch (error) {}
  },
  async getWishListProducts({ commit }) {
    try {
      const res = await this.$axios.get("wishlists");
      commit("SET_WISHLISH_PRODUCTS", res?.data?.data);
    } catch (error) {}
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
