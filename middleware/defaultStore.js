export default async ({ app, store }) => {
  if (store.state.cartProducts.length > 0) return false;
  const cartProducts = app.$cookies.get("cartProducts");
  if (cartProducts) {
    store.state.cartProducts = cartProducts;
  }
};
