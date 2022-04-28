// ==== mutations =====
const mutations = {
  SET_SEARCHED_PRODUCTS(state, data) {
    state.searchedProducts = data;
  },

  SET_SEARCH_KEYWORD(state, data) {
    state.keyword = data;
  }
};

export default mutations;
