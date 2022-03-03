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
    final_total_amount: 0,
    coupon_amount: 0,
    coupon_percent: 0,
  },
});

export default state;
