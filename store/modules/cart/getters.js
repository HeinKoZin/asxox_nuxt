// ==== getters =====
const getters = {
  cartProducts(state) {
    return state.cartProducts;
  },

  cartProductsTotal(state) {
    let total = 0;
    state.cartProducts.forEach((product) => {
      total += product.qty * product.original_unit_price;
    });
    return total;
  },

  isCartOpen(state) {
    return state.isCartOpen;
  },
};

export default getters;
