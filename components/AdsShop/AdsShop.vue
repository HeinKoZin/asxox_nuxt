<template>
  <div class="ads-shop-container-wrapper">
    <div class="ads-shop-container">
      <div class="shop-info">
        <div
          class="flex items-center justify-start flex-grow gap-2 md:justify-center md:flex-col md:flex-grow-0"
        >
          <div class="shop-image">
            <img :src="shop.logo" />
          </div>
          <div class="shop-title" v-if="shop">
            <h1>{{ shop.shop_name }}</h1>
          </div>
        </div>
        <div class="shop-see-all-btn text-nowrap">
          <button>See All</button>
        </div>
      </div>
      <carousel
        class="flex w-full"
        ref="adsShopContainer"
        :scrollPerPage="true"
        :paginationEnabled="false"
        :autoplay="true"
        :perPage="1"
        :loop="true"
        :speed="1000"
        :autoplayTimeout="3000"
      >
        <slide
          v-for="(data, index) in products"
          :key="index"
          class="products-list"
        >
          <ShopProductCard
            v-for="(product, y) in data"
            :key="y"
            :product="product"
          />
        </slide>
      </carousel>
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
      display: 8,
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

    onResize() {
      if (window.innerWidth > 760) {
        if (window.innerWidth > 960) {
          this.display = 8;
        } else {
          this.display = 6;
        }
      } else {
        this.display = 1;
      }
    },
  },

  computed: {
    products() {
      let products = [];
      // push every three products to new object and then push to products array
      for (let i = 0; i < this.datas.length; i++) {
        if (i % this.display === 0) {
          products.push([]);
        }
        products[products.length - 1].push(this.datas[i]);
      }

      return products;
    },
  },

  created() {
    window.addEventListener("resize", this.onResize);

    // NOTE: Check for Mobile
    if (window.innerWidth < 960) {
      this.display = 1;
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="postcss" scoped>
.ads-shop-container-wrapper {
  @apply md:p-1 w-full mt-5;
}

.ads-shop-container {
  @apply w-full  md:p-4 bg-white flex text-white md:rounded-xl flex-col md:gap-2 md:flex-row;
}

.ads-shop-container .shop-info {
  @apply w-[100%] md:w-1/3  flex md:flex-col items-center justify-center gap-2 mb-0 bg-yellow-100 md:rounded-2xl mr-0 md:mr-2 p-3;
}

.ads-shop-container .shop-info .shop-image {
  @apply w-20 md:w-32 h-auto;
}

.ads-shop-container .shop-info .shop-title {
  @apply w-full md:text-center line-clamp-2 text-lg md:text-2xl font-zen-kurenaido text-slate-900 font-semibold;
}

.ads-shop-container .shop-info .shop-see-all-btn {
  @apply bg-orange-600 p-2 px-6 mt-2 rounded-md  font-quicksand text-sm md:text-lg hover:bg-orange-500;
}

.ads-shop-container .products-list {
  @apply w-[100%] lg:min-w-[100%] lg:max-w-[100%] md:w-2/3 lg:w-9/12 flex flex-col md:flex-row    overflow-hidden overflow-x-scroll flex-wrap;
}

.ads-shop-container .products-list::-webkit-scrollbar {
  @apply hidden;
}

.ads-shop-container .products-list::-webkit-scrollbar-thumb {
  @apply bg-slate-400 rounded-md;
}
</style>
