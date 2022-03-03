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
    const filteredIndex = state.cartProducts.findIndex((product) => {
      if (data.variant_name && product.id === data.id) {
        return product.is_variant === data.is_variant;
      } else {
        return product.id === data.id;
      }
    });
    if (filteredIndex !== -1 && !data.qty)
      state.cartProducts[filteredIndex].qty++;
    else if (filteredIndex !== -1 && data.qty)
      state.cartProducts[filteredIndex].qty += data.qty;
    else state.cartProducts.push(data);

    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    let original_total_amount = 0;
    state.cartProducts.forEach((product) => {
      original_total_amount += product.sell_price * product.qty;
    });
    this.commit("SET_ORDER", {
      type: "original_total_amount",
      data: original_total_amount,
    });
    this.commit("SET_ORDER", {
      type: "products",
      data: state.cartProducts,
    });
  },

  SET_WHOLE_PRODUCTS_TO_CART(state, data) {
    state.cartProducts = data;
  },

  REMOVE_PRODUCT_FROM_CART(state, id) {
    state.cartProducts.splice(id, 1);
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  },

  UPDATE_PRODUCT_IN_CART(state, data) {
    state.cartProducts[data.productId].qty = data.newQty;
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  },

  SET_ORDER(state, { type, data }) {
    state.order[type] = data;
  },

  UPDATE_CART_ORDER(state, data) {
    if (data.data.discount_type === "percentage") {
      const coupon_amount =
        (data.data.percentage * state.order.original_total_amount) / 100;
      state.order.final_total_amount =
        state.order.original_total_amount - coupon_amount;

      state.order.coupon_amount = coupon_amount;
      state.order.coupon_percent = data.data.percentage;
    } else {
      state.order.final_total_amount =
        state.order.original_total_amount - data.data.amount;
      state.order.coupon_amount = data.data.amount;
    }
  },
};

export default mutations;
