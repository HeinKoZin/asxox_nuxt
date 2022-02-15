<template>
  <div class="product-detail-container">
    <div class="product-cover">
      <ProductCover />
    </div>
    <div class="product-detail">
      <ProductImages />
      <ProductDescription />
    </div>
  </div>
</template>

<script>
export default {
  layout: "MainLayout",
};
</script>

<style lang="postcss" scoped>
.product-detail-container {
  @apply flex w-full md:flex-row flex-col h-full bg-slate-100 gap-2 md:gap-y-0 px-2;
}

.product-cover {
  @apply w-full md:w-1/5 min-h-[calc(100vh-4rem)];
}

.product-detail {
  @apply w-full md:w-4/5 flex gap-y-2 flex-col pb-4;
}
</style>
