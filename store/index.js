// ==== state ====
const state = () => ({
  isMobileMenuOpen: false,
  isCartOpen: false,
  wishListProductList: [],
  categories: [],
  categoryProducts: [],
  adsShops: [],
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

  categories(state) {
    return state.categories;
  },

  categoryProducts(state) {
    return state.categoryProducts;
  },

  adsShops(state) {
    return state.adsShops;
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

  async getProductsByCategory(
    { commit, state },
    { categoryId, categoryName, limit, shopIndex }
  ) {
    try {
      const res = await this.$axios.get("products/category/" + categoryId, {
        params: {
          limit,
        },
      });
      const products = {
        categoryId,
        categoryName,
        products: res?.data?.data,
        shop: shopIndex || shopIndex == 0 ? state.adsShops[shopIndex] : null,
      };
      commit("SET_PRODUCTS_BY_CATEGORY", products);
    } catch (error) {}
  },

  async getCategories({ commit }) {
    try {
      const res = await this.$axios.get("categories");
      commit("SET_CATEGORIES", res?.data?.data);
    } catch (error) {}
  },

  async getAdsShops({ commit }) {
    try {
      const res = await this.$axios.get("shops");
      commit("SET_ADS_SHOPS", res?.data?.data);
    } catch (error) {}
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
