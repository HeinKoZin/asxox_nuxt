<template>
  <div
    :class="'cart-container-wrapper ' + (isCartOpen ? 'active ' : '')"
    v-click-outside="closeCart"
  >
    <div class="cart-container">
      <div class="cart-action-button" v-show="!isCartOpen">
        <!-- WARNING: don't delete -->
        <!-- <button @click="toggleCart">
          <span class="badge" v-if="calculateCartProductQuantity">
            {{ calculateCartProductQuantity }}
          </span>
          <i class="fa-solid fa-cart-shopping icon"></i>
        </button> -->
        <a
          href="https://www.facebook.com/asxox.ecommercemyanmar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-facebook fb-icon"></i>
        </a>
        <a
          href="viber://chat?number=959961558491"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-viber viber-icon"></i>
        </a>
        <a
          href="https://www.tiktok.com/@asxoxecommerce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="~/assets/img/tiktok.png" class="tiktok-logo" alt="" />
        </a>

        <a
          href="https://www.youtube.com/channel/UCnXbJ5K2pmBIh_HJaUuh9kg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-youtube youtube-icon"></i>
        </a>
      </div>
      <div class="cart-header">
        <button @click="SET_CART(!isCartOpen)">
          <i
            class="fa-solid fa-xmark icon text-slate-500 hover:text-slate-700 close-icon"
          ></i>
        </button>
        <div class="cart-header-title">
          <h3>Your Cart</h3>
        </div>
      </div>
      <div class="cart-body" v-dragscroll>
        <CartItem
          v-for="(product, index) in cartProducts"
          :key="index"
          :product="product"
          :productId="index"
        />
      </div>
      <!-- NOTE: Cart's bottom -->
      <div class="cart-bottom">
        <div class="total-and-select-all">
          <div class="select-all-container">
            <input
              type="checkbox"
              name="select-all"
              id="select-all"
              @change="test"
              v-model="isSelectAll"
            />
            <label for="select-all">Select all</label>
          </div>
          <div class="cart-bottom-total">
            <span>Total</span>
            <span>$ {{ cartProductsTotal }}</span>
          </div>
        </div>
        <div class="cart-bottom-action">
          <Button
            variant="primary"
            class="w-full"
            :disabled="cartSelectedProducts.length === 0"
            @click.native="$router.push('/checkout'), SET_CART(!isCartOpen)"
          >
            <i class="fa-solid fa-cart-shopping icon"></i>
            <span>Checkout</span>
            Confirm
          </Button>
        </div>
      </div>
      <!-- Fab -->
      <FabCartButton @click.native="toggleCart" v-show="!isCartOpen" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      initialState: true,
      isSelectAll: false,
    };
  },
  computed: {
    ...mapGetters([
      "isCartOpen",
      "cartProducts",
      "cartProductsTotal",
      "cartSelectedProducts",
    ]),

    calculateCartProductQuantity() {
      let qty = 0;
      for (let product of this.cartProducts) {
        qty += product.qty;
      }
      return qty || null;
    },
  },
  methods: {
    test() {
      this.SELECTED_ALL_PRODUCT_IN_CART(this.isSelectAll);
    },
    ...mapMutations(["SET_CART", "SELECTED_ALL_PRODUCT_IN_CART"]),

    toggleCart() {
      this.SET_CART(!this.isCartOpen);
    },
    closeCart() {
      this.SET_CART(false);
    },
  },

  // mounted() {
  //   this.initialState = this.isCartOpen;
  //   if (this.isCartOpen) {
  //     document.body.addEventListener("click", this.test);
  //   }
  // },

  // beforeDestroy() {
  //   document.body.removeEventListener("click", this.test);
  // },
};
</script>

<style lang="postcss" scoped>
.cart-container-wrapper {
  @apply fixed right-0 top-16 w-[calc(100%_-_4.4rem)] md:w-2/6 -mr-[calc(100%_-_4.4rem)] md:-mr-[33.33%] border border-slate-300 bg-slate-300 h-[calc(100%_-_4rem)]  rounded-l-xl z-50 transition-[margin];
}

.cart-container-wrapper.active {
  @apply mr-0;
}

.cart-container {
  @apply flex flex-col h-full;
}

.cart-container .cart-header {
  @apply flex flex-row  items-center p-2 px-4 bg-white rounded-tl-xl;
}

.cart-container .cart-header .cart-header-title {
  @apply text-3xl flex-grow text-center font-dongle;
}

.cart-container .cart-header .close-icon {
  @apply text-2xl;
}

.cart-container .cart-body {
  @apply flex flex-col p-2 h-full  overflow-y-scroll overflow-hidden;
}

.cart-container .cart-body::-webkit-scrollbar {
  width: 5px;
}

.cart-container .cart-body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

.cart-container .cart-body::-webkit-scrollbar-thumb {
  @apply bg-orange-600;
  border-radius: 10px;
}

.cart-bottom {
  @apply flex flex-row justify-between items-center p-4 bg-white rounded-bl-xl font-quicksand;
}

.cart-bottom .cart-bottom-total {
  @apply font-bold;
}

.cart-bottom .cart-bottom-action button {
  @apply bg-orange-600 p-3 rounded-lg text-white text-sm font-semibold;
}

.cart-action-button {
  @apply hidden absolute  bg-opacity-50 w-14 h-auto py-4 top-[30%] flex-col gap-2 text-orange-600 text-2xl font-semibold bg-slate-50 md:flex justify-center items-center -left-14 rounded-l-lg drop-shadow-lg border-slate-300 border;
}

.cart-action-button button {
  @apply border-0 relative w-12 h-12 flex justify-center items-center rounded-full active:bg-orange-200;
}

.cart-action-button a {
  @apply border-0  relative w-12 h-12 flex justify-center items-center rounded-full active:bg-orange-200;
}

.cart-action-button .fb-icon {
  @apply text-blue-700;
}

.cart-action-button .viber-icon {
  @apply text-violet-700;
}

.cart-action-button .youtube-icon {
  @apply text-red-700;
}

.cart-action-button .tiktok-logo {
  @apply text-white w-8 h-8;
}

.badge {
  @apply absolute flex justify-center items-center  text-xs  bg-orange-500 text-white w-5 h-5 -top-0 -right-0 text-center  rounded-full;
}

.total-and-select-all {
  @apply flex flex-col gap-2;
}

.select-all-container {
  @apply flex flex-row gap-2 items-center cursor-pointer;
}

.select-all-container input {
  @apply cursor-pointer bg-slate-200 checked:bg-orange-500 appearance-none w-5 h-5 rounded-lg border-4 border-orange-500 flex justify-center items-center before:w-2 before:h-2 before:bg-transparent before:rounded-lg checked:before:bg-orange-500;
}

.select-all-container label {
  @apply cursor-pointer text-sm font-bold text-slate-700;
}
</style>
