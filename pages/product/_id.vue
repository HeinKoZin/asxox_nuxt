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
  @apply flex w-full flex-row h-full bg-slate-100 gap-x-2 px-2;
}

.product-cover {
  @apply w-1/5 h-[calc(100vh-4rem)];
}

.product-detail {
  @apply w-4/5 flex gap-y-2 flex-col;
}
</style>
