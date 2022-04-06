<template>
  <div class="category-container">
    <div class="category-header">
      <div class="category-cover">
        <img
          src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/08/06/category/image/06-08-2021_Asxox_4610c9d17e5b049.02990017.png"
          alt=""
        />
        <div class="header-shape"></div>
      </div>
    </div>
    <div class="category-body">
      <div class="products-list-container">
        <ProductCard
          :data="product"
          :categoryIndex="catIndex"
          :productIndex="index"
          v-for="(product, index) in categoryProducts[0].products"
          :key="index"
          :isInWishlist="product.is_wishlist"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "MainLayout",

  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters(["categoryProducts"]),
  },
  methods: {
    ...mapActions(["getProductsByCategory"]),
  },

  async fetch() {
    await this.getProductsByCategory({
      categoryId: this.$route.params.id,
      limit: 15,
    });
  },
};
</script>

<style lang="postcss" scoped>
.category-container {
  @apply w-full  flex flex-col;
}

.category-header {
  @apply w-full  max-h-fit relative;
}

.category-cover {
  @apply w-full h-auto relative;
}

.category-cover img {
  @apply w-full h-full object-cover;
}

.header-shape {
  @apply absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-slate-200 via-slate-300;
}

.products-list-container {
  @apply w-full  flex p-2 bg-white rounded-lg flex-wrap;
}

.category-body {
  @apply w-full  flex p-2 relative -mt-20;
}
</style>
