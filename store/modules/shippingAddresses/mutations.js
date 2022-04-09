// ==== mutations =====
const mutations = {
  SET_SHIPPING_ADDRESSES(state, data) {
    console.log(data);
    state.shippingAddresses = data;
  },
  REMOVE_ADDRESS(state, index) {
    state.shippingAddresses.splice(index, 1);
  },
  UPDATE_ADDRESS_STATUS(state, data) {
    state.shippingAddresses[data.index].status = data.value;
  },
};

export default mutations;
