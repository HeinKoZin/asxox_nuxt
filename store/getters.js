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

  isModel(state) {
    return state.isModel;
  },

  selectedPayment(state) {
    return state.selectedPayment;
  },
};

export default getters;
