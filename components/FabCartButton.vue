<template>
  <div class="fab-container" v-if="!isCartOpen">
    <button class="fab-container-btn" @click="toggleCart">
      <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
    </button>
  </div>
</template>

<script>
import Button from "./Common/Button.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: { Button },
  data() {
    return {
      //
    };
  },
  computed: {
    //
    ...mapGetters(["isCartOpen"]),
  },
  methods: {
    //
    ...mapMutations(["SET_CART"]),
    toggleCart() {
      this.SET_CART(!this.isCartOpen);
    },
  },
  mounted() {
    //
  },
};
</script>

<style lang="postcss" scoped>
.fab-container {
  @apply bg-orange-600 fixed right-5 bottom-5 z-50 rounded-full md:hidden;
}

.fab-container-btn {
  @apply w-14 h-14;
}

.fab-container .fab-container-btn .icon {
  @apply rounded-full text-white hover:text-slate-200 text-lg md:text-xl;
}
</style>
