// ==== mutations =====
const mutations = {
  SET_WISHLISH_PRODUCTS(state, data) {
    state.wishListProductList = data;
  },
  REMOVE_WISHLISH_PRODUCTS(state, wishListIndex) {
    state.wishListProductList.splice(wishListIndex, 1);
  },
};

export default mutations;
