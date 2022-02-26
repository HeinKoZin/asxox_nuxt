export default async ({ app, store }) => {
  if (store.state.cartProducts?.length === 0) {
    const cartProducts = app.$cookies.get("cartProducts");
    if (cartProducts?.length > 0) store.state.cartProducts = cartProducts;
  }
};
