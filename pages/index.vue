<template>
  <div class="home-container">
    <div class="home-header">
      <Slider :products="slideAds" />
    </div>
    <!-- <CategoryBar /> -->
    <!-- Product list container -->
    <div class="products-list-container">
      <div class="ads-image-container">
        <img src="~/assets/img/ezgif.com-gif-maker.gif" />
      </div>
      <div
        class="products-container"
        v-for="(category, catIndex) in categoryProducts"
        :key="catIndex"
      >
        <div class="category-products">
          <div class="category-header">
            <h4 class="category-title">
              <!-- <img :src="getCategoryLogo(category)" class="category-logo-img" /> -->
              {{ category.categoryName }}
            </h4>
            <button class="see-all-btn">See All</button>
          </div>

          <ProductCard
            :data="product"
            :categoryIndex="catIndex"
            :productIndex="index"
            v-for="(product, index) in category.products"
            :key="index"
            :isInWishlist="product.is_wishlist"
          />
        </div>
        <no-ssr><AdsShop v-if="category.shop" :shop="category.shop" /></no-ssr>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "../components/Common/Category.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { Category },
  layout: "MainLayout",
  name: "HomePage",
  head() {
    return {
      title: `Asxox | Home`,
    };
  },

  data() {
    return {
      isLoading: true,
    };
  },

  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters([
      "isMobileMenuOpen",
      "categories",
      "adsShops",
      "categoryProducts",
      "slideAds",
    ]),
  },
  methods: {
    // NOTE: Method from Vuex actions
    ...mapActions([
      "getAdsShops",
      "getCategories",
      "getProductsByCategory",
      "getSlideAds",
    ]),

    getCategoryLogo(category) {
      return this.categories.find((c) => c.id === category.categoryId)?.logo;
    },
  },
  async fetch() {
    if (this.categoryProducts.length > 0) return;
    await this.getSlideAds();
    await this.getAdsShops();
    await this.getCategories();
    let shopIndex = 0;
    for (let i = 0; i < this.categories.length; i++) {
      await this.getProductsByCategory({
        categoryId: this.categories[i].id,
        categoryName: this.categories[i].name,
        limit: 16,
        shopIndex: i % 2 === 1 && this.adsShops[shopIndex] ? shopIndex : null,
      });
      i % 2 === 1 && this.adsShops[shopIndex] ? shopIndex++ : shopIndex;
    }
  },
};
</script>

<style lang="postcss" scoped>
.home-container {
  @apply w-full pb-4;
}

.home-header {
  @apply w-full;
}

.products-list-container {
  @apply w-full p-1 md:p-3 flex gap-10 flex-col;
}

.products-container {
  @apply flex flex-wrap;
}

.products-container .category-products {
  @apply flex flex-wrap bg-slate-50 p-2 rounded-lg;
}

.products-container .icon {
  @apply text-2xl text-slate-700;
}

.products-container .see-all-btn {
  @apply p-2 px-4 text-sm font-bold font-quicksand underline border text-orange-600  hover:text-slate-800 rounded-md;
}

.category-header {
  @apply flex items-center justify-between w-full p-1;
}

.category-header .category-title {
  @apply p-1 text-lg font-bold text-orange-600 font-quicksand flex gap-2 items-center;
}

.category-logo-img {
  @apply w-10 h-10;
}

.ads-image-container {
  @apply w-full p-1 h-auto mt-5 flex justify-center items-center;
}

.ads-image-container img {
  @apply w-full md:w-[80%] lg:w-[70%] h-auto rounded-lg;
}
</style>
