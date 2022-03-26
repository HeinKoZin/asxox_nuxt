<template>
  <div class="ads-shop-container-wrapper">
    <div class="ads-shop-container">
      <div class="shop-info">
        <div class="shop-image">
          <img :src="shop.logo" />
        </div>
        <div class="shop-title" v-if="shop">
          <h1>{{ shop.shop_name }}</h1>
        </div>
        <div class="shop-see-all-btn">
          <button>See All</button>
        </div>
      </div>
      <div class="products-list" ref="adsShopContainer" v-dragscroll>
        <ProductCard
          :data="data"
          v-for="(data, index) in datas"
          :key="index"
          isAdsProduct
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
    },
  },
  data() {
    return {
      datas: [],
    };
  },
  async fetch() {
    await this.fetchAdsProducts();
  },

  methods: {
    async fetchAdsProducts() {
      const res = await this.$axios.get(
        `/products/shop/${this.shop.id}?limit=15`
      );
      this.datas = res.data.data;
    },
    scrollWithWheel(e) {
      if (e.deltaY > 0) {
        this.$refs.adsShopContainer.scrollLeft += 100;
      } else {
        this.$refs.adsShopContainer.scrollLeft -= 100;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.ads-shop-container-wrapper {
  @apply p-1 w-full mt-5;
}

.ads-shop-container {
  @apply w-full p-5 bg-blue-200 flex text-white rounded-lg flex-col md:flex-row;
}

.ads-shop-container .shop-info {
  @apply w-full md:w-1/3 lg:w-3/12 flex flex-col items-center justify-center gap-2 mb-4 md:mb-0;
}

.ads-shop-container .shop-info .shop-image {
  @apply w-32 h-auto;
}

.ads-shop-container .shop-info .shop-title {
  @apply w-full text-center line-clamp-2 text-2xl font-zen-kurenaido text-slate-900 font-semibold;
}

.ads-shop-container .shop-info .shop-see-all-btn {
  @apply bg-orange-600 p-2 px-6 mt-2 rounded-md  font-quicksand text-base md:text-lg hover:bg-orange-500;
}

.ads-shop-container .products-list {
  @apply w-full md:w-2/3 lg:w-9/12 flex  items-center overflow-hidden overflow-x-scroll;
}

.ads-shop-container .products-list::-webkit-scrollbar {
  @apply hidden;
}

.ads-shop-container .products-list::-webkit-scrollbar-thumb {
  @apply bg-slate-400 rounded-md;
}
</style>
