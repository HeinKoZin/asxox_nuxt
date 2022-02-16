<template>
  <div
    class="product-detail-container"
    v-if="!$fetchState.pending && !$fetchState.error"
  >
    <div class="product-cover">
      <ProductCover :product="product" />
    </div>
    <div class="product-detail">
      <ProductImages :description_photos="product.description_photos" />
      <ProductDescription />
    </div>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
export default {
  mixins: [generalMixins],
  layout: "MainLayout",
  data() {
    return {
      product: [],
    };
  },
  async fetch() {
    const res = await this.generalGetApis(
      `/products/${this.$asxox.asxox_decode(this.$route.params.id)}`
    );
    this.product = res.data.data;
  },
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
