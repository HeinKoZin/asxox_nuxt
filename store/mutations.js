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

  SET_CATEGORIES(state, data) {
    state.categories = data;
  },

  SET_PRODUCTS_BY_CATEGORY(state, data) {
    state.categoryProducts.push(data);
  },

  SET_ADS_SHOPS(state, data) {
    state.adsShops = data;
  },
};

export default mutations;
