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

export default mutations;
