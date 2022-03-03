export default async ({ app, store }) => {
  if (store.state.cart.cartProducts?.length === 0) {
    const cartProducts = app.$cookies.get("cartProducts");
    if (cartProducts?.length > 0) {
      store.state.cart.cartProducts = cartProducts;
      let original_total_amount = 0;

      store.state.cart.cartProducts.forEach((product) => {
        original_total_amount += product.sell_price * product.qty;
      });

      store.commit("SET_ORDER", {
        type: "original_total_amount",
        data: original_total_amount,
      });
      store.commit("SET_ORDER", {
        type: "products",
        data: cartProducts,
      });
      store.commit("SET_ORDER", {
        type: "total_amount",
        data: original_total_amount,
      });
    }
  }
};
