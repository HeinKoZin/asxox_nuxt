// ==== state ====
const state = () => ({
  order: {
    name: "",
    phone: "",
    state_id: null,
    city_id: null,
    total_amount: 0,
    coupon_amount: 0,
    coupon_percent: 0,
    coupon_code: "",
    source: "Web",
    order_note: "",
    point_amount: null,
    payment_method: "Cash On Delivery",
    products: [],
  },
  orderDetail: {},
  isOrderDetail: false,
  orders: [],
});

export default state;
