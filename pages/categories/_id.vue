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
      <div class="sub-categories-container">
        <div>Filter by:</div>
        <div class="sub-categories-body" v-dragscroll>
          <div class="sub-category-container active">All</div>
          <div class="sub-category-container">General</div>
        </div>
      </div>
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
      <!-- {{ categoryProducts }} -->
      <no-ssr>
        <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      </no-ssr>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "MainLayout",

  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters(["categoryProducts"]),
  },
  methods: {
    ...mapActions(["getProductsByCategory"]),
    infiniteHandler() {
      this.getProductsByCategory(this.categoryProducts[0].id, {
        page: this.categoryProducts[0].page + 1,
      });
    },
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
  @apply absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-slate-200 via-slate-200;
}

.products-list-container {
  @apply w-full  flex p-2 bg-white rounded-lg flex-wrap;
}

.category-body {
  @apply w-full  flex flex-col p-2 relative -mt-5 lg:-mt-20;
}

.sub-categories-container {
  @apply w-full  flex flex-col;
}

.sub-categories-body {
  @apply w-full  flex  p-2 bg-slate-100 rounded-full mb-4 gap-x-2 overflow-hidden overflow-x-scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.sub-categories-body::-webkit-scrollbar {
  display: none;
}

.sub-category-container {
  @apply bg-white px-4 rounded-full p-2 text-sm font-medium text-slate-500 hover:shadow-md shadow-orange-600;
}

.sub-category-container.active {
  @apply bg-orange-600 text-white shadow-md;
}
</style>
