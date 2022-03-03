<template>
  <MainLayout>
    <div class="home-container">
      <div class="home-header">
        <Slider />
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
          <ProductCard
            :data="data"
            v-for="(data, index) in datas"
            :key="index"
          />
        </div>
        <AdsShop />
        <div class="products-container">
          <div class="flex items-center justify-between w-full p-1">
            <h4 class="p-1 text-lg font-bold font-quicksand">Pre-Orders</h4>
            <button class="see-all-btn">See All</button>
          </div>
          <ProductCard
            :data="data"
            v-for="(data, index) in datas"
            :key="index"
          />
        </div>
        <div class="products-container">
          <div class="flex items-center justify-between w-full p-1">
            <h4 class="p-1 text-lg font-bold font-quicksand">Pre-Orders</h4>
            <a class="see-all-btn">See All</a>
          </div>
          <ProductCard
            :data="data"
            v-for="(data, index) in datas"
            :key="index"
          />
        </div>
        <AdsShop />
      </div>
    </div>
  </MainLayout>
</template>

<script>
import Category from "../components/Common/Category.vue";
import MainLayout from "~/layouts/MainLayout.vue";
export default {
  components: { Category, MainLayout },
  // layout: "MainLayout",
  name: "HomePage",

  data() {
    return {
      //
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
