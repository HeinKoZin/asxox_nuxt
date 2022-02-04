// ==== state ====
const state = () => ({
  isMobileMenuOpen: false,
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
  }
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
};

// ==== actions ====
const actions = {
  async getUser(state) {
    try {
      const res = await axios.get("user");
      commit("SET_USER", res.data.data);
    } catch (error) { }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
