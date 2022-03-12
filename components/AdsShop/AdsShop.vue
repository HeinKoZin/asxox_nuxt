<template>
  <div class="ads-shop-container-wrapper">
    <div class="ads-shop-container">
      <div class="shop-info">
        <div class="shop-image">
          <img src="https://asxox.com.mm/assets/photo/logo/asxox%20Logo.png" />
        </div>
        <div class="shop-title">
          <h1>Asxox</h1>
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
  data() {
    return {
      datas: [
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5023f807938.62020912.jpg",
          title: "Elastic Fitness Stick",
          description:
            " This is a description of the product This is a description of the product This is a description of the product This is a description of the product This is a description of the product This is a description of the product",
          price: "36000 MMK",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
      ],
    };
  },

  methods: {
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
  @apply p-1;
}

.ads-shop-container {
  @apply w-full p-5 bg-slate-700 flex text-white rounded-lg flex-col md:flex-row;
}

.ads-shop-container .shop-info {
  @apply w-full md:w-1/3 lg:w-3/12 flex flex-col items-center justify-center gap-2 mb-4 md:mb-0;
}

.ads-shop-container .shop-info .shop-image {
  @apply w-32 h-auto;
}

.ads-shop-container .shop-info .shop-title {
  @apply w-full text-center line-clamp-2 text-2xl font-zen-kurenaido;
}

.ads-shop-container .shop-info .shop-see-all-btn {
  @apply bg-slate-900 p-2 px-6 mt-2 rounded-md  font-quicksand text-base md:text-lg hover:bg-slate-800;
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
