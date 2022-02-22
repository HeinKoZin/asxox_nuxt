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

  addProductToCart({ commit }, data) {
    const newData = {
      id: data.id,
      qty: data.quantity || 1,
      parent_product_name: data.name,
      variant_name: data.variant_name,
      cover_photo: data.temp_photo || data.feature_photos[0].photo,
      currency: data.currency,
      is_article: data.is_article_promotion,
      is_flashsale: data.is_flashsale_promotion,
      original_unit_price: data.sell_price,
      sell_price: data.sell_price,
    };
    console.log(data);
    commit("SET_PRODUCT_TO_CART", newData);
  },

  updateProductInCart({ commit }, { cartId, productQty }) {
    commit("UPDATE_PRODUCT_IN_CART", { cartId, productQty });
  },
};

export default actions;
