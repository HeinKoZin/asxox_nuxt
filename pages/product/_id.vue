<template>
  <div
    class="product-detail-container"
    v-if="!$fetchState.pending && !$fetchState.error"
  >
    <div class="product-cover">
      <ProductCover
        :product="product"
        :size="sizes"
        :color="colors"
        :pattern="patterns"
        :accessories="accessories"
      />
    </div>
    <div class="product-detail">
      <ProductImages :description_photos="product.description_photos" />
      <ProductDescription />
      <RecommendedProducts />
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
      product: {},
      sizes: [],
      colors: [],
      patterns: [],
      accessories: [],
    };
  },
  methods: {
    ogImage() {
      if (
        !this.$fetchState.pending &&
        !this.$fetchState.error &&
        this.product?.feature_photos?.length > 0
      )
        return this.product.feature_photos[0].photo;
      else return "test";
    },
    setToProductVariant(type, main) {
      if (type && main.filter((data) => data.name === type).length === 0) {
        main.push({ name: type, isActive: false });
      }
    },
  },
  head() {
    return {
      title: `Asxox | ${this.product.name}`,
      meta: [
        {
          property: "og:title",
          content: this.product.name,
        },
        {
          property: "og:description",
          content: this.product.detail || "",
        },
        {
          property: "og:image",
          content: this.ogImage(),
        },
      ],
    };
  },
  async fetch() {
    const res = await this.generalGetApis(
      `/products/${this.$asxox.asxox_decode(this.$route.params.id)}`
    );
    this.product = res.data.data;
    if (this.product.product_varients?.length > 0) {
      this.product.product_varients.map((product) => {
        this.setToProductVariant(product.size?.name, this.sizes);
        this.setToProductVariant(product.color?.name, this.colors);
        this.setToProductVariant(product.pattern?.name, this.patterns);
        this.setToProductVariant(product.accessories?.name, this.accessories);
      });
    }
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
