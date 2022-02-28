<template>
  <div class="fab-container" v-if="!isCartOpen">
    <button class="fab-container-btn" @click="toggleCart">
      <span class="badge">2</span>
      <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
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
    ...mapGetters(["isCartOpen"]),
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
  @apply w-14 h-14 relative;
}

.fab-container .fab-container-btn .icon {
  @apply rounded-full text-white hover:text-slate-200 text-lg md:text-xl;
}

.badge {
  @apply absolute w-4 h-4 font-semibold text-sm md:font-bold  p-[2px] top-3 right-3 rounded-full text-orange-600 bg-white flex justify-center items-center;
}
</style>
