export default async ({ app, store }) => {
  if (store.state.cart.cartProducts?.length === 0) {
    const cartProducts = app.$cookies.get("cartProducts");
    if (cartProducts?.length > 0) {
      store.state.cart.cartProducts = cartProducts;
      let original_total_amount = 0;

      store.state.cart.cartProducts.forEach((product) => {
        original_total_amount += product.sell_price * product.qty;
      });

      const newData = [
        { type: "original_total_amount", data: original_total_amount },
        { type: "products", data: cartProducts },
        { type: "total_amount", data: original_total_amount },
      ];

      newData.forEach((data) => {
        store.commit("SET_ORDER", data);
      });
    }
  }
};
