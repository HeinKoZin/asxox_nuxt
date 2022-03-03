// import { state } from "@/store/state.js";
import actions from "./actions";
import state from "./state";
import mutations from "./mutations";
import getters from "./getters";
import order from "./modules/order/index";
import cart from "./modules/cart/index";
import category from "./modules/category/index";
import wishlistProduct from "./modules/wishlistProduct/index";

export default {
  state,
  getters,
  actions,
  mutations,
  modules: {
    order,
    cart,
    category,
    wishlistProduct,
  },
};

// const generateModule = (moduleName) => {
//   return `./modules/${moduleName}/index.js`;
// };
