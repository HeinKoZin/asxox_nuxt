<template>
  <div class="home-container">
    <div class="home-header">
      <Slider :products="sliderItems" />
    </div>
    <!-- <CategoryBar /> -->
    <!-- Product list container -->
    <div class="products-list-container">
      <div class="products-container">
        <div class="flex items-center justify-between w-full p-1">
          <h4 class="p-1 text-lg font-bold font-quicksand">Pre-Orders</h4>
          <button class="see-all-btn">See All</button>
        </div>
        <ProductCard
          :data="data"
          v-for="(data, index) in datas"
          :key="index"
          isInWishlist
        />
      </div>
      <div class="products-container">
        <div class="flex items-center justify-between w-full p-1">
          <h4 class="p-1 text-lg font-bold font-quicksand">Pre-Orders</h4>
          <button class="see-all-btn">See All</button>
        </div>
        <ProductCard :data="data" v-for="(data, index) in datas" :key="index" />
      </div>
      <AdsShop />
      <div class="products-container">
        <div class="flex items-center justify-between w-full p-1">
          <h4 class="p-1 text-lg font-bold font-quicksand">Pre-Orders</h4>
          <button class="see-all-btn">See All</button>
        </div>
        <ProductCard :data="data" v-for="(data, index) in datas" :key="index" />
      </div>
      <div class="products-container">
        <div class="flex items-center justify-between w-full p-1">
          <h4 class="p-1 text-lg font-bold font-quicksand">Pre-Orders</h4>
          <a class="see-all-btn">See All</a>
        </div>
        <ProductCard :data="data" v-for="(data, index) in datas" :key="index" />
      </div>
      <AdsShop />
    </div>
  </div>
</template>

<script>
import Category from "../components/Common/Category.vue";
export default {
  components: { Category },
  layout: "MainLayout",
  name: "HomePage",

  data() {
    return {
      //
      sliderItems: {},
      datas: [
        {
          id: 1,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 2,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 3,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5023f807938.62020912.jpg",
          title: "Elastic Fitness Stick",
          description:
            " This is a description of the product This is a description of the product This is a description of the product This is a description of the product This is a description of the product This is a description of the product",
          price: "36000 MMK",
        },
        {
          id: 4,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 5,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 6,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 7,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 8,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 9,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 10,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 11,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 12,
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
          description: "This is a description of the product",
          price: "15000 MMK",
        },
        {
          id: 13,
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
    async fetchSlideAds() {
      try {
        const res = await this.$axios.get("ads/widget/6");
        this.sliderItems = res.data.data;
      } catch (error) {}
    },
  },
  mounted() {
    this.fetchSlideAds();
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

.products-container .icon {
  @apply text-2xl text-slate-700;
}

.products-container .see-all-btn {
  @apply p-2 px-4 text-sm font-bold font-quicksand underline border text-orange-600  hover:text-slate-800 rounded-md;
}
</style>
