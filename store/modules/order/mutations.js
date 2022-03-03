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

  UPDATE_CART_ORDER_POINT(state, point) {
    state.order.point_amount = point;
  },

  SET_ADDRESS_TO_ORDER(state, data) {
    state.order.address = data.address;
    state.order.state_id = data.state.id;
    state.order.city_id = data.city.id;
    state.order.phone = data.phone;
    state.order.name = data.name;
  },

  SET_ORDER_NOTE_TO_ORDER(state, data) {
    console.log(data);
    state.order.order_note = data;
  },
};

export default mutations;
