// ==== mutations =====
const mutations = {
  SET_USER(state, data) {
    localStorage.setItem("user_info", JSON.stringify(data.user_info));
    localStorage.setItem("loggedIn", JSON.stringify(true));

    state.auth.user = JSON.parse(localStorage.getItem("user_info"));
  },

  SET_MOBILE_MENU(state, data) {
    state.isMobileMenuOpen = data;
  },
  SET_MODEL(state, data) {
    state.isModel = data;
  },
  ADD_NEW_ADDRESS(state, data) {
    const addresses = state.auth.user.data.customer.shipping_addresses;
    addresses.map((address, index) => {
      state.auth.user.data.customer.shipping_addresses[index].status = false;
    });
    state.auth.user.data.customer.shipping_addresses.push(data);
  },

  UPDATE_ADDRESS_STATUS(state, data) {
    state.auth.user.data.customer.shipping_addresses[data.index].status =
      data.value;
  },

  REMOVE_ADDRESS(state, index) {
    console.log(state.auth.user.data.customer.shipping_addresses);
    state.auth.user.data.customer.shipping_addresses =
      state.auth.user.data.customer.shipping_addresses.splice(index, 1);
    console.log(state.auth.user.data.customer.shipping_addresses);
  },
};

export default mutations;
