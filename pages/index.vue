<template>
  <div class="home-container">
    <div class="home-header">
      <Slider />
    </div>
    <CategoryBar />
    <div class="product-container">
      <ProductCard :data="data" v-for="(data, index) in datas" :key="index" />
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
  @apply w-full;
}

.home-header {
  @apply w-full;
}

.product-container {
  @apply flex flex-wrap p-1 md:p-2;
}
</style>
