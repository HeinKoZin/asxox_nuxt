<template>
  <div class="product-detail-container">
    <div class="product-cover">
      <ProductCover ref="productCoverRef" />
    </div>
    <div class="product-detail">
      <ProductImages />
      <ProductDescription />
      <RecommendedProducts />
    </div>
  </div>
</template>

<script>
export default {
  layout: "MainLayout",

  data() {
    return {
      //get height
      height: 0,
    };
  },
  computed: {
    getHeight() {
      return `h-[1050px]`;
    },
  },

  mounted() {
    this.height = this.$refs.productCoverRef.$el.clientHeight;
  },
};
</script>

<style lang="postcss" scoped>
.product-detail-container {
  @apply flex w-full md:flex-row flex-col bg-slate-100 gap-2 md:gap-y-0 px-2;
}

.product-cover {
  @apply w-full h-full md:w-1/5  sticky top-0 bottom-0;
}

.product-detail {
  @apply w-full md:w-4/5 flex gap-y-2 flex-col;
}

.product-detail-container::-webkit-scrollbar {
  @apply hidden;
}
</style>
