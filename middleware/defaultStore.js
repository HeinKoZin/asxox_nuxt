export default async ({ app, store }) => {
  const cartProducts = app.$cookies.get("cartProducts");
  if (cartProducts) {
    store.state.cartProducts = cartProducts;
  }
};
