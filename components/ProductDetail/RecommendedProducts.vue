<template>
  <div class="recommended-products-container">
    <div class="header">Recommended Products</div>
    <div class="body" v-dragscroll>
      <ProductCard
        :data="data"
        v-for="(data, index) in products"
        :key="index"
        isAdsProduct
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
.recommended-products-container {
  @apply flex w-full bg-slate-50 border border-slate-300 rounded-lg flex-col;
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 h-12 items-center px-2 font-quicksand text-base md:text-lg font-bold;
}

.body {
  @apply w-full overflow-x-scroll overflow-hidden flex p-2 bg-slate-100 rounded-lg;
}

.body::-webkit-scrollbar {
  @apply hidden;
}
</style>
