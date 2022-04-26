import actions from "./actions";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";

export default {
  state,
  getters,
  actions,
  mutations,
  modules: {
    order: generateModule("order"),
    cart: generateModule("cart"),
    category: generateModule("category"),
    wishlistProduct: generateModule("wishlistProduct"),
    adsShop: generateModule("adsShop"),
    slideAds: generateModule("slideAds"),
    shippingAddresses: generateModule("shippingAddresses"),
    searchProducts: generateModule("search"),
    products: generateModule("products"),
  },
};

function generateModule(moduleName) {
  return require(`./modules/${moduleName}/index`).default;
}
