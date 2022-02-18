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

  SET_CATEGORY_PRODUCT_FAVOURITE(state, { categoryIndex, productIndex }) {
    state.categoryProducts[categoryIndex].products[productIndex].is_wishlist =
      !state.categoryProducts[categoryIndex].products[productIndex].is_wishlist;
  },

  SET_PRODUCT_TO_CART(state, data) {
    const filteredIndex = state.cartProducts.findIndex(
      (product) => product.id === data.id
    );
    if (filteredIndex !== -1) state.cartProducts[filteredIndex].qty++;
    else state.cartProducts.push(data);

    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  },

  UPDATE_PRODUCT_IN_CART(state, { cartId, productQty }) {
    state.cartProducts[cartId].qty = productQty;
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  },
};

export default mutations;
