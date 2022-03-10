<template>
  <div :class="'cart-container-wrapper ' + (isCartOpen ? 'active ' : '')">
    <div class="cart-container">
      <div class="cart-header">
        <button @click="SET_CART(!isCartOpen)">
          <font-awesome-icon
            :icon="['fas', 'times']"
            class="text-slate-500 hover:text-slate-700 close-icon"
          />
        </button>
        <div class="cart-header-title">
          <h3>Your Cart</h3>
        </div>
        <!-- <div class="cart-header-action">
          <button class="btn btn-sm btn-outline-primary">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
          </button>
        </div> -->
      </div>
      <div class="cart-body">
        <CartItem
          v-for="(product, index) in cartProducts"
          :key="index"
          :product="product"
          :productId="index"
        />
      </div>
      <!-- NOTE: Cart's bottom -->
      <div class="cart-bottom">
        <div class="cart-bottom-total">
          <span>Total</span>
          <span>$ {{ cartProductsTotal }}</span>
        </div>
        <div class="cart-bottom-action">
          <button
            class="btn btn-sm btn-primary"
            @click="$router.push('/checkout'), SET_CART(!isCartOpen)"
          >
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
            <span>Checkout</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isCartOpen", "cartProducts", "cartProductsTotal"]),
  },
  methods: {
    ...mapMutations(["SET_CART"]),
  },
};
</script>

<style lang="postcss" scoped>
.cart-container-wrapper {
  @apply fixed right-0 top-16 w-[calc(100%_-_4.4rem)] md:w-2/6 -mr-[calc(100%_-_4.4rem)] md:-mr-[33.33%] bg-slate-300 h-[calc(100%_-_4rem)]  border-slate-200 rounded-l-xl z-50 transition-[margin];
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
  @apply flex flex-row justify-between items-center py-6 px-4 bg-white rounded-bl-xl font-comfortaa;
}

.cart-bottom .cart-bottom-action button {
  @apply bg-orange-600 p-2 rounded-lg text-white text-sm md:text-base;
}
</style>
