<template>
  <div class="promotion-products-container">
    <div class="header">Recommended Products</div>
    <div class="body" v-dragscroll>
      <ProductCard
        :data="data"
        v-for="(data, index) in products"
        :key="index"
        isPromotionProduct
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="postcss" scoped>
.promotion-products-container {
  @apply flex w-full bg-slate-50 border border-slate-300 rounded-lg flex-col md:sticky top-16 h-[calc(100vh_-_4rem)];
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 h-12 items-center px-2 font-quicksand text-base md:text-lg font-bold;
}

.body {
  @apply w-full cursor-auto p-2 flex flex-wrap overflow-y-scroll overflow-hidden;
}

.body::-webkit-scrollbar {
  @apply hidden;
}
</style>
