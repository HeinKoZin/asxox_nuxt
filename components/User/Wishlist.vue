<template>
  <div class="wishlist-container">
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
      this.REMOVE_WISHLISH_PRODUCTS({
        wishListIndex,
      });
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
</style>
