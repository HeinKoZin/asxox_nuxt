export default async ({ app, store }) => {
  if (store.state.cartProducts?.length === 0) {
    const cartProducts = app.$cookies.get("cartProducts");
    if (cartProducts?.length > 0) {
      store.state.cartProducts = cartProducts;
      let original_total_amount = 0;

      store.state.cartProducts.forEach((product) => {
        original_total_amount += product.sell_price * product.qty;
      });

      [
        store.state.order.original_total_amount,
        store.state.order.products,
        store.state.order.total_amount,
      ] = [
        original_total_amount,
        store.state.cartProducts,
        original_total_amount,
      ];
    }
  }
};
