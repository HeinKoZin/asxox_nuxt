<template>
  <div class="search-container">
    <div class="search-header">
      <h2>
        You searched : <span>{{ keyword }}</span>
      </h2>
    </div>
    <div class="search-body">
      <!-- WARNING: Temporary hide -->
      <!-- <div class="sub-categories-container">
        <div class="sub-categories-header">Filter by:</div>
        <div class="sub-categories-body" v-dragscroll>
          <div
            class="sub-search-container"
            :class="{ active: selectedCategoryId === routeId }"
            @click="handleSubCategoryClick(routeId)"
          >
            All
          </div>
          <div
            class="sub-search-container"
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
      </div> -->

      <!-- NOTE: All products of page -->
      <div class="product-list-header" v-if="!$fetchState.pending">
        Found
        {{ productCounts }}
        Products:
      </div>

      <!-- NOTE: Skeleton -->

      <!-- NOTE: searched products -->
      <div
        class="grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4"
        v-if="$fetchState.pending"
      >
        <div v-for="i in 10" :key="i">
          <Skeleton width="100%" height="300px" />
        </div>
      </div>

      <div class="products-list-container" v-if="!$fetchState.pending">
        <ProductCard
          :data="product"
          v-for="(product, index) in products ? products : []"
          :key="index"
          :isInWishlist="product.is_wishlist"
        />
      </div>

      <!-- NOTE: all products -->
      <!-- <div
        class="products-list-container"
        v-if="!$fetchState.pending && keyword === ''"
      >
        <ProductCard
          :data="product"
          v-for="(product, index) in allProducts ? allProducts : []"
          :key="index"
          :isInWishlist="product.is_wishlist"
        />
      </div> -->
      <!-- </Skeleton> -->

      <!-- NOTE: All product with category id -->
      <!-- <div
        class="products-list-container"
        v-if="selectedCategoryId !== routeId"
      >
        <div v-if="!products" class="products-status-message">
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
      </div> -->

      <!-- {{ products }} -->

      <no-ssr>
        <infinite-loading
          @infinite="infiniteHandler"
          v-if="!$fetchState.pending"
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
  // fetchOnServer: false,

  watch: {
    keyword(oldValue, newValue) {
      if (oldValue !== newValue) {
        this.current_page = 1;
      }
      this.$fetch();
    },
  },

  data() {
    return {
      // selectedCategoryId: this.routeId
      //   ? this.routeId
      //   : this.$route.query.keyword,
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
      // New
      "searchedProducts",
      "keyword",
      "allProducts",
    ]),

    // routeId() {
    //   return this.$route.query.keyword;
    // },
    // checkProducts() {
    //   return this.searchedProducts()?.products.length === 0
    //     ? false
    //     : true;
    // },
    productCounts() {
      return this.keyword === ""
        ? this.allProducts?.meta?.total
          ? this.allProducts?.meta?.total
          : ""
        : this.searchedProducts?.meta?.total
        ? this.searchedProducts?.meta?.total
        : "";
    },
  },
  methods: {
    ...mapActions(["getSearchedProducts", "getAllProducts"]),

    // NOTE: Infinite scroll handler
    infiniteHandler($state) {
      console.log(this.allProducts["meta"]["current_page"]);
      // New
      if (this.$fetchState.pending) {
        return;
      } else {
        setTimeout(() => {
          this.current_page = this.keyword
            ? this.searchedProducts["meta"]["current_page"]
            : this.allProducts["meta"]["current_page"];
          console.log("current", this.current_page);
          this.last_page = this.keyword
            ? this.searchedProducts["meta"]["last_page"]
            : this.allProducts["meta"]["last_page"];
          console.log(this.last_page);
          if (this.current_page !== this.last_page) {
            console.log("infiniteHandler");
            const test = this.keyword
              ? this.getSearchedProducts({
                  keyword: this.keyword,
                  page: this.current_page + 1,
                })
              : this.getAllProducts({
                  page: this.current_page + 1,
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
      }
    },
  },

  async fetch() {
    // New

    if (this.keyword === "") {
      await this.getAllProducts({ page: this.current_page }).then((res) => {
        this.products = res["data"];
      });
    } else {
      await this.getSearchedProducts({
        keyword: this.keyword,
        page: this.current_page,
      }).then((res) => {
        // append the new data
        this.products = res["data"];
      });
    }
  },

  mounted() {
    // this.selectedCategoryId = this.$route.query.keyword;
    // this.products = this.productsByPagination["data"];

    // New
    this.products = this.keyword
      ? this.searchedProducts["data"]
      : this.allProducts["data"];
  },
};
</script>

<style lang="postcss" scoped>
.search-container {
  @apply w-full pb-10 flex flex-col;
}

.search-header {
  @apply w-full  max-h-fit relative;
}

.search-header h2 {
  @apply text-base lg:text-xl  font-extrabold p-3 lg:p-4 font-quicksand;
}

.search-header span {
  @apply text-gray-600;
}

/* .category-cover {
  @apply w-full h-auto relative;
}

.category-cover img {
  @apply w-full h-full object-cover;
} */

.header-shape {
  @apply absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-slate-200 via-slate-200;
}

.products-list-container {
  /* @apply w-full flex p-2 bg-white rounded-lg flex-wrap; */
  @apply grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2 lg:gap-4;
}

.search-body {
  @apply w-full h-full flex flex-col px-2 relative;
}

.sub-categories-container {
  @apply w-full  flex flex-col;
}

.sub-categories-header {
  @apply w-full p-1 md:p-2 text-gray-900 uppercase text-base md:text-lg lg:text-xl font-quicksand font-bold;
}

.sub-categories-body {
  @apply w-full  flex  p-2 bg-slate-100 rounded-full mb-4 gap-x-2 overflow-hidden overflow-x-scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
.sub-categories-body::-webkit-scrollbar {
  display: none;
}

.sub-search-container {
  @apply bg-white px-2 md:px-4 rounded-full p-1 whitespace-nowrap md:p-2 text-xs md:text-sm font-medium text-slate-500 hover:shadow-md shadow-orange-600;
}

.sub-search-container.active {
  @apply bg-orange-600 text-white shadow-md;
}

.products-status-message {
  @apply w-full py-10 text-center text-slate-800 text-xl font-medium;
}

.product-list-header {
  @apply w-full p-1 md:p-2 text-gray-900 uppercase text-base md:text-lg lg:text-xl font-quicksand font-bold;
}

.no-more {
  @apply w-full text-center text-slate-900 text-xl font-medium p-4 rounded-md bg-white  mt-2;
}

.loading-status {
  @apply w-full text-center text-slate-900 text-xl font-medium p-4 rounded-md bg-white  mt-2;
}
</style>
