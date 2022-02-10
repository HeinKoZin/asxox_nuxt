// ==== state ====
const state = () => ({
  isMobileMenuOpen: false,
  isCartOpen: false,
  cartProductList: [],
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

  cartProductList(state) {
    return state.cartProductList;
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

  SET_CART_PRODUCTS(state, data) {
    state.cartProductList = data;
  },
};

// ==== actions ====
const actions = {
  async getUser(state) {
    try {
      const res = await axios.get("user");
      commit("SET_USER", res.data.data);
    } catch (error) {}
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
