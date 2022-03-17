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
  },

  REMOVE_COUPON_FROM_ORDER(state, type) {
    state.order.total_amount = state.order.original_total_amount;
    state.order.coupon_code = "";
    state.order.coupon_amount = 0;
    state.order.coupon_percent = 0;
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

  SET_ORDER_DETAIL(state, data) {
    state.orderDetail = data;
  },

  SET_IS_ORDER_DETAIL(state, data) {
    state.isOrderDetail = !state.isOrderDetail;
  },

  SET_ORDERS(state, data) {
    state.orders = data;
  },
};

export default mutations;
