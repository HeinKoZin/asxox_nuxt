// ==== mutations =====
const mutations = {
  SET_CART(state, data) {
    state.isCartOpen = data;
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

    const newData = [
      { type: "original_total_amount", data: original_total_amount },
      { type: "products", data: state.cartProducts },
    ];
    newData.forEach((item) => this.commit("SET_ORDER", item));
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
};

export default mutations;
