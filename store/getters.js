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

  categories(state) {
    return state.categories;
  },

  categoryProducts(state) {
    return state.categoryProducts;
  },

  adsShops(state) {
    return state.adsShops;
  },

  cartProducts(state) {
    return state.cartProducts;
  },
};

export default getters;
