<template>
  <div class="container">
    <div class="header">
      <span class="wishlist-badge">
        <!-- <font-awesome-icon class="wishlist-icon" :icon="['fas', 'heart']" /> -->
        <i class="fa-solid fa-heart icon"></i>
        <span>{{ calculateWishlisProducts }}</span>
      </span>
      <h2>Wishlists</h2>
    </div>
    <div class="body">
      <Wishlist />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "ProfileLayout",
  middleware: ["auth/ifNotAuthRedirectAuth"],
  head() {
    return {
      title: `Asxox | Wishlists`,
    };
  },
  computed: {
    ...mapGetters(["wishListProductList"]),
    calculateWishlisProducts() {
      return this.wishListProductList?.length || 0;
    },
  },
};
</script>

<style lang="postcss" scoped>
.container {
  @apply flex w-full bg-white shadow-sm rounded p-4 flex-col;
}

.header {
  @apply w-full gap-x-4 flex items-center p-4 py-6;
}

.header h2 {
  @apply text-lg font-bold  font-quicksand;
}

.wishlist-badge {
  @apply flex flex-col relative;
}

.wishlist-badge span {
  @apply text-slate-50 text-[8px] md:text-sm absolute bg-orange-500 rounded-full h-4 md:h-5 w-4 md:w-5 justify-center items-center flex text-center -top-3 -right-3;
}

.wishlist-icon {
  @apply text-slate-900 text-lg md:text-2xl;
}

.body {
  @apply w-full bg-orange-100 rounded-lg;
}
</style>
