<template>
  <div class="promotion-products-container">
    <div class="header">Promotion Products</div>
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
  @apply flex w-full bg-slate-100 border border-slate-300 rounded-lg flex-col md:sticky top-32 h-[calc(100vh_-_8rem)];
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 py-3 items-center px-2 font-quicksand   font-bold;
}

.body {
  @apply w-full cursor-auto p-2  overflow-y-scroll overflow-hidden grid grid-cols-2;
}

.body::-webkit-scrollbar {
  @apply hidden;
}
</style>
