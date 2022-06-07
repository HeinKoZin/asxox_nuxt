<template>
  <div class="bg-white">
    <div class="relative w-full overflow-hidden group">
      <nuxt-img
        format="webp"
        quality="50"
        loading="lazy"
        fit="cover"
        :src="category.image"
        alt=""
        class="group-hover:scale-110 duration-700 transition-transform"
      />
      <div
        class="absolute w-full h-full top-0 bg-black bg-opacity-20 flex items-center px-5 2xl:px-10"
      >
        <div
          class="text-white xl:text-xl lg:text-lg 2xl:text-xl font-bold font-sans"
        >
          <h3>{{ category.name }}</h3>
        </div>
      </div>
    </div>
    <div class="grid w-full grid-cols-3 gap-5 p-5">
      <CategoryShopProductCard
        v-for="(product, index) in categoryProducts.data
          ? categoryProducts.data
          : []"
        :key="index"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CategoryShopProductCard from "./CategoryShopProductCard.vue";

export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    categoryProducts: [],
  }),
  computed: {},
  methods: {},
  async fetch() {
    const res = await this.$axios.get(
      `products/category/${this.category.id}?limit=3`
    );
    this.categoryProducts = res.data;
  },
};
</script>

<style lang="scss" scoped></style>
