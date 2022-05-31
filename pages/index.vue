<template>
  <div class="home-container">
    <div class="home-header">
      <div class="w-full lg:w-[70%]">
        <Slider :products="slideAds" />
      </div>
      <div class="flex-col flex-grow hidden gap-2 md:flex">
        <div class="relative flex-grow w-full rounded-lg">
          <nuxt-img
            class="absolute object-cover w-full h-full rounded-lg"
            src="https://cdn.asxox.com.mm/upload/2021/05/04/seeder/ads/bannerads/04-05-2021_Asxox_46090ce95655580.57927422.png"
            alt=""
            srcset=""
            format="webp"
            loading="lazy"
          />
        </div>
        <div class="relative flex-grow w-full rounded-lg">
          <nuxt-img
            class="absolute object-cover w-full h-full rounded-lg"
            src="https://cdn.asxox.com.mm/upload/2021/05/04/seeder/ads/bannerads/04-05-2021_Asxox_46090ce3b6386c3.56220880.png"
            alt=""
            srcset=""
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <!-- <CategoryBar /> -->

    <!-- Category Container -->
    <div class="categories-container">
      <!-- <div class="categories-header">
        <h3>Categories</h3>
      </div> -->
      <div class="categories-wrapper">
        <div
          class="category-item-wrapper group"
          v-for="(category, index) in categories"
          :key="index"
          @click="handleCategoryClick(category.id)"
        >
          <div class="category-item">
            <div class="category-content">
              <h3>{{ category.name }}</h3>
            </div>
            <div class="category-logo">
              <nuxt-img
                format="webp"
                quality="50"
                loading="lazy"
                :src="category.logo"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

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
            <button
              class="see-all-btn"
              @click="handleCategoryClick(category.categoryId)"
            >
              See All
            </button>
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

    handleCategoryClick(categoryId) {
      this.$router.push({ name: "categories-id", params: { id: categoryId } });
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
  @apply w-full flex p-0 md:p-5 md:bg-white rounded-lg mt-4 gap-2;
}

.products-list-container {
  @apply w-full  mx-auto p-1 md:p-3 flex gap-5 flex-col;
}

.products-container {
  @apply flex flex-wrap;
}

.products-container .category-products {
  @apply flex flex-wrap bg-transparent p-2 rounded-lg;
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
  @apply w-full md:w-[80%] mx-auto p-1 h-auto mt-5 flex justify-center items-center;
}

.ads-image-container img {
  @apply w-full  h-auto rounded-lg;
}

.categories-container {
  @apply w-full flex flex-col justify-center items-center my-5;
}

.categories-wrapper {
  @apply flex flex-wrap w-full bg-transparent;
}

.category-logo {
  @apply rounded-full w-20 h-20 md:w-32 md:h-32;
}

.category-logo img {
  @apply w-full h-full object-cover;
}

.category-item-wrapper {
  @apply w-1/2 sm:w-2/6 md:w-3/12 lg:w-1/5 xl:w-2/12 h-auto p-1 relative box-border;
}

.category-item {
  @apply flex flex-col items-center relative justify-center w-full h-full gap-y-2  py-10  bg-white hover:shadow-md    rounded-lg font-quicksand font-bold;
}

.category-item .category-content h3 {
  @apply text-sm md:text-base lg:text-lg text-white text-center  font-bold drop-shadow-sm bg-orange-500 bg-opacity-100 text-opacity-100 p-1 w-full;
}

.category-item .category-content {
  @apply w-full h-full bg-black bg-opacity-0 hover:bg-opacity-0 hidden group-hover:flex rounded-lg absolute m-auto animate-slideUp justify-center items-end;
}

.categories-header {
  @apply w-full border-b-2 border-slate-300 p-2 mb-2;
}

.categories-header h3 {
  @apply text-lg lg:text-xl font-bold text-orange-500 font-quicksand;
}
</style>
