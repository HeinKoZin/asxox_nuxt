// ==== mutations =====
const mutations = {
  SET_ORDER(state, { type, data }) {
    state.order[type] = data;
  },

  UPDATE_CART_ORDER_COUPON(state, data) {
    const amount = data.data.amount;
    const code = data.data.code;
    if (data.data.discount_type === "percentage") {
      const coupon_amount =
        (data.data.percentage * state.order.original_total_amount) / 100;
      const percentage = data.data.percentage;
      state.order.total_amount =
        state.order.original_total_amount - coupon_amount;
      state.order.coupon_amount = coupon_amount;
      state.order.coupon_percent = percentage;
    } else {
      state.order.total_amount = state.order.original_total_amount - amount;
      state.order.coupon_amount = amount;
    }
    state.order.coupon_code = code;
    this.commit("REFRESH_ORDER");
  },

  SET_ADDRESS_TO_ORDER(state, data) {
    const newData = [
      { type: "address", data: data.address },
      { type: "state_id", data: data.state.id },
      { type: "city_id", data: data.city.id },
      { type: "phone", data: data.phone },
      { type: "name", data: data.name },
    ];
    newData.forEach((item) => this.commit("SET_ORDER", item));
  },

  SET_PAYMENT_METHOD(state, data) {
    state.order.payment_method = data;
  },

  REFRESH_ORDER(state, data) {
    console.log(state);
    // state.cart.cartProducts.forEach((product) => {
    //   original_total_amount += product.sell_price * product.qty;
    // });

    // const newData = [
    //   { type: "original_total_amount", data: original_total_amount },
    //   { type: "total_amount", data: original_total_amount },
    // ];

    // newData.forEach((data) => {
    //   this.commit("SET_ORDER", data);
    // });
  },
};

export default mutations;
