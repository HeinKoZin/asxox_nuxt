<template>
  <div class="category-container">
    <div class="category-header">
      <div class="category-cover">
        <Skeleton class="w-full" height="30vh">
          <img
            v-if="!$fetchState.pending"
            :src="subCategoriesByCategoryId['image']"
            alt=""
          />
        </Skeleton>
        <div class="header-shape"></div>
      </div>
    </div>
    <div class="category-body">
      <div class="sub-categories-container">
        <div class="sub-categories-header">Filter by:</div>
        <div class="sub-categories-body" v-dragscroll>
          <div
            class="sub-category-container"
            :class="{ active: selectedCategoryId === routeId }"
            @click="handleSubCategoryClick(routeId)"
          >
            All
          </div>
          <div
            class="sub-category-container"
            :class="{ active: selectedCategoryId === category.id }"
            v-for="(category, index) in subCategoriesByCategoryId[
              'sub_categories'
            ]"
            :key="index"
            @click="handleSubCategoryClick(category.id)"
          >
            <Skeleton>
              {{ category.name }}
            </Skeleton>
          </div>
        </div>
      </div>
      <!-- NOTE: All products of page -->
      <div class="product-list-header">Products:</div>
      <!-- <div class="loading-status" v-if="$fetchState.pending">Loading....</div> -->
      <Skeleton
        class="w-full"
        height="400px"
        v-if="selectedCategoryId === routeId"
      >
        <div
          class="products-list-container"
          v-if="!$fetchState.pending && selectedCategoryId === routeId"
        >
          <ProductCard
            :data="product"
            :productIndex="index"
            v-for="(product, index) in products ? products : []"
            :key="index"
            :isInWishlist="product.is_wishlist"
          />
        </div>
      </Skeleton>

      <!-- NOTE: All product with category id -->
      <div
        class="products-list-container"
        v-if="selectedCategoryId !== routeId"
      >
        <div v-if="!checkProducts" class="products-status-message">
          No products found in this category
        </div>
        <ProductCard
          :data="product"
          :productIndex="index"
          v-for="(product, index) in getSelectedCategoryProducts()
            ? getSelectedCategoryProducts().products
            : []"
          :key="index"
          :isInWishlist="product.is_wishlist"
        />
      </div>
      <!-- {{ products }} -->

      <no-ssr>
        <infinite-loading
          @infinite="infiniteHandler"
          v-if="!$fetchState.pending && selectedCategoryId === routeId"
        >
          <div slot="no-more" class="no-more">
            You reached end of the list
          </div></infinite-loading
        >
      </no-ssr>
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import { mapGetters, mapActions } from "vuex";
import { Skeleton } from "vue-loading-skeleton";

export default {
  layout: "MainLayout",
  components: {
    InfiniteLoading,
    Skeleton,
  },

  data() {
    return {
      selectedCategoryId: this.routeId ? this.routeId : this.$route.params.id,
      products: [],
      current_page: 1,
      last_page: null,
    };
  },

  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters([
      "productsByCategoryId",
      "subCategoriesByCategoryId",
      "productsByPagination",
    ]),

    routeId() {
      return this.$route.params.id;
    },
    checkProducts() {
      return this.getSelectedCategoryProducts()?.products.length === 0
        ? false
        : true;
    },
  },
  methods: {
    ...mapActions([
      "getProductsByCategoryId",
      "getSubCategoriesByCategoryId",
      "getProductsByPagination",
    ]),
    // infiniteHandler() {
    //   this.getProductsByCategory(this.categoryProducts[0].id, {
    //     page: this.categoryProducts[0].page + 1,
    //   });
    // },

    handleSubCategoryClick(subCategoryId) {
      this.selectedCategoryId = subCategoryId;
    },

    getSelectedCategoryProducts() {
      return (
        this.subCategoriesByCategoryId["sub_categories"].filter(
          (category) => category.id === this.selectedCategoryId
        )[0] || null
      );
    },

    // async getProductsByPagination() {
    //   const res = await this.$axios.get(
    //     `/products/category/${this.selectedCategoryId}?page=${this.current_page}?limit=30`
    //   );
    //   if (res?.data) {
    //     this.products = [...this.products, ...res.data.data];
    //   }
    // },

    // NOTE: Infinite scroll handler
    infiniteHandler($state) {
      setTimeout(() => {
        this.current_page = this.productsByPagination["meta"]["current_page"];
        this.last_page = this.productsByPagination["meta"]["last_page"];
        if (this.current_page !== this.last_page) {
          console.log("infiniteHandler");
          const test = this.getProductsByPagination({
            categoryId: this.selectedCategoryId,
            page: this.productsByPagination["meta"]["current_page"] + 1,
            limit: this.productsByPagination["meta"]["per_page"],
          });
          test.then((res) => {
            // filter out the duplicates
            const new_data = res["data"].filter(
              (item) => !this.products.some((prev) => prev.id === item.id)
            );

            // append the new data
            this.products = [...this.products, ...new_data];

            $state.loaded();
          });
        } else {
          $state.complete();
        }
      }, 1000);
    },
  },

  async fetch() {
    await this.getProductsByCategoryId({
      categoryId: this.selectedCategoryId,
      limit: 30,
    });
    await this.getSubCategoriesByCategoryId(this.$route.params.id);

    await this.getProductsByPagination({
      categoryId: this.selectedCategoryId,
      page: this.current_page,
      limit: 30,
    }).then((res) => {
      // append the new data
      this.products = res["data"];
    });

    // await this.getProductsByPagination();
  },

  mounted() {
    this.selectedCategoryId = this.$route.params.id;
    this.products = this.productsByPagination["data"];
  },
};
</script>

<style lang="postcss" scoped>
.category-container {
  @apply w-full pb-10 flex flex-col;
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
  @apply w-full flex p-2 bg-white rounded-lg flex-wrap;
}

.category-body {
  @apply w-full h-full flex flex-col p-2 relative -mt-5 lg:-mt-20;
}

.sub-categories-container {
  @apply w-full  flex flex-col;
}

.sub-categories-header {
  @apply w-full p-1 md:p-2 text-gray-900 uppercase text-base md:text-lg lg:text-xl font-bold;
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
  @apply bg-white px-2 md:px-4 rounded-full p-1 whitespace-nowrap md:p-2 text-xs md:text-sm font-medium text-slate-500 hover:shadow-md shadow-orange-600;
}

.sub-category-container.active {
  @apply bg-orange-600 text-white shadow-md;
}

.products-status-message {
  @apply w-full py-10 text-center text-slate-800 text-xl font-medium;
}

.product-list-header {
  @apply w-full p-1 md:p-2 text-gray-900 uppercase text-base md:text-lg lg:text-xl font-bold;
}

.no-more {
  @apply w-full text-center text-slate-900 text-xl font-medium p-4 rounded-md bg-white  mt-2;
}

.loading-status {
  @apply w-full text-center text-slate-900 text-xl font-medium p-4 rounded-md bg-white  mt-2;
}
</style>
