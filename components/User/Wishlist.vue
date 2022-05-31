<template>
  <div class="wishlist-container">
    <div v-if="wishListProductList.length == 0" class="w-full mx-auto">
      <div class="empty-wishlist">
        <h2>Your Wishlist is empty</h2>
        <p>
          You can add products to your wishlist by clicking on the heart icon on
          the product page.
        </p>
      </div>
    </div>
    <!-- {{ wishListProductList }} -->
    <ProductCard
      v-for="(data, index) in wishListProductList"
      :key="index"
      :data="data"
      isInWishlist
      isWishListProduct
      :wishListIndex="index"
      @removeWishlist="removeWishlist"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["wishListProductList"]),
  },
  methods: {
    ...mapActions(["getWishListProducts"]),
    ...mapMutations(["REMOVE_WISHLISH_PRODUCTS"]),
    removeWishlist(wishListIndex) {
      this.REMOVE_WISHLISH_PRODUCTS(wishListIndex);
    },
  },
  fetch() {
    this.getWishListProducts();
  },
};
</script>

<style lang="postcss" scoped>
.wishlist-container {
  @apply w-full flex p-2 flex-wrap;
}

.empty-wishlist {
  @apply flex-grow flex flex-col items-center justify-center h-56 text-center;
}

.empty-wishlist h2 {
  @apply text-lg lg:text-xl font-bold font-quicksand;
}

.empty-wishlist p {
  @apply text-sm lg:text-base font-normal font-quicksand;
}
</style>
