<template>
  <div class="fab-container">
    <button class="fab-container-btn">
      <span class="badge">{{ calculateCartProductQuantity }}</span>
      <i class="fa-solid fa-cart-shopping icon"></i>
    </button>
  </div>
</template>

<script>
import Button from "./Common/Button.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { Button },
  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters(["isCartOpen", "cartProducts"]),
    calculateCartProductQuantity() {
      let qty = 0;
      for (let product of this.cartProducts) {
        qty += product.qty;
      }
      return qty;
    },
  },
  methods: {
    // NOTE: Method from Vuex mutations
    ...mapMutations(["SET_CART"]),
    toggleCart() {
      this.SET_CART(!this.isCartOpen);
    },
  },
};
</script>

<style lang="postcss" scoped>
.fab-container {
  @apply bg-orange-600 fixed right-5 bottom-5 z-50 rounded-full md:hidden;
}

.fab-container-btn {
  @apply w-12 h-12 relative;
}

.fab-container .fab-container-btn .icon {
  @apply rounded-full text-slate-200 hover:text-slate-200 text-lg md:text-xl;
}

.badge {
  @apply absolute w-4 h-4 font-semibold text-xs   p-[2px] top-2 right-2 rounded-full text-orange-600 bg-white flex justify-center items-center;
}
</style>
