// ==== state ====
const state = () => ({
  isMobileMenuOpen: false,
  isCartOpen: false,
  wishListProductList: [],
  categories: [],
  categoryProducts: [],
  adsShops: [],
  cartProducts: [],
  order: {
    name: "",
    phone: "",
    total_amount: 0,
    coupon_amount: 0,
    coupon_percent: 0,
    coupon_code: "",
    source: "Web",
    order_note: "",
    point_amount: 0,
    products: [],
  },
});

export default state;
