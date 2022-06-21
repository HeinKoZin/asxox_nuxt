// ==== getters =====
const getters = {
  order(state) {
    return state.order;
  },

  isOrderDetail(state) {
    return state.isOrderDetail;
  },

  orderDetail(state) {
    return state.orderDetail;
  },

  orders(state) {
    return state.orders;
  },

  orders_paginate(state) {
    return state.orders_paginate;
  }
};

export default getters;
