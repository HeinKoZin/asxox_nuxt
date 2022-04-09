// ==== mutations =====
const mutations = {
  SET_CART(state, data) {
    state.isCartOpen = data;
  },
  SET_PRODUCT_TO_CART(state, data) {
    data.isSelected = data.isSelected || false;
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
    this.commit("REFRESH_ORDER");
  },

  SET_WHOLE_PRODUCTS_TO_CART(state, data) {
    state.cartProducts = data;
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    this.commit("REFRESH_ORDER");
  },

  REMOVE_PRODUCT_FROM_CART(state, id) {
    state.cartProducts.splice(id, 1);
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    this.commit("REFRESH_ORDER");
  },

  UPDATE_PRODUCT_IN_CART(state, data) {
    state.cartProducts[data.productId].qty = data.newQty;
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    this.commit("REFRESH_ORDER");
  },

  UPDATE_IS_SELECTED_PRODUCT_IN_CART(state, data) {
    state.cartProducts[data.productId].isSelected = data.isSelected;
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    this.commit("REFRESH_ORDER");
  },

  SELECTED_ALL_PRODUCT_IN_CART(state, data) {
    for (let i = 0; i < state.cartProducts.length; i++) {
      state.cartProducts[i].isSelected = data;
    }
    this.app.$cookies.remove("cartProducts");
    this.app.$cookies.set("cartProducts", state.cartProducts, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    this.commit("REFRESH_ORDER");
  },

  REFRESH_ORDER(state, data) {
    const selectedProducts = state.cartProducts.filter((product) => {
      return product.isSelected;
    });

    let original_total_amount = 0;
    selectedProducts.forEach((product) => {
      original_total_amount += product.sell_price * product.qty;
    });

    const newData = [
      { type: "original_total_amount", data: original_total_amount },
      { type: "products", data: selectedProducts },
      { type: "total_amount", data: original_total_amount },
    ];
    newData.forEach((item) => this.commit("SET_ORDER", item));
  },
};

export default mutations;
