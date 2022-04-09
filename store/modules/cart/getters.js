// ==== getters =====
const getters = {
  cartProducts(state) {
    return state.cartProducts;
  },

  cartProductsTotal(state) {
    let total = 0;
    state.cartProducts.forEach((product) => {
      const initialTotal = product.qty * product.original_unit_price;
      if (product.isSelected) total += initialTotal;
    });
    return total;
  },

  cartSelectedProducts(state) {
    const selectedProducts = state.cartProducts.filter((product) => {
      return product.isSelected;
    });
    return selectedProducts;
  },

  cartUnSelectedProducts(state) {
    const unSelectedProducts = state.cartProducts.filter((product) => {
      return !product.isSelected;
    });
    return unSelectedProducts;
  },

  isCartOpen(state) {
    return state.isCartOpen;
  },
};

export default getters;
