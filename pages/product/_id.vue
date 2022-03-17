<template>
  <div
    class="w-full min-h-screen bg-slate-100"
    v-if="!$fetchState.pending && !$fetchState.error"
  >
    <div class="product-detail-container">
      <div class="product-cover">
        <ProductCover
          ref="productCoverRef"
          :product="product"
          :size="sizes"
          :color="colors"
          :pattern="patterns"
          :accessories="accessories"
          @changeIsActive="changeIsActive"
        />
      </div>
      <div class="product-detail">
        <ProductImages :description_photos="product.description_photos" />
        <TestProductImages />
        <ProductInfo :product="product" />
        <ProductDescription />
        <RecommendedProducts :products="recommendedProducts" />
      </div>
      <div class="w-[20%]">Test</div>
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
      recommendedProducts: [],
    };
  },
  head() {
    return {
      title: `Asxox | ${this.product?.name}`,
      meta: [
        {
          property: "og:title",
          content: this.product?.name,
        },
        {
          property: "og:description",
          content: this.product?.detail || "",
        },
        {
          property: "og:image",
          content: this.ogImage(),
        },
      ],
    };
  },
  methods: {
    changeIsActive(value) {
      switch (value.type) {
        case "size":
          this.sizes[value.index].isActive = value.data;
          break;
        case "color":
          this.colors[value.index].isActive = value.data;
          break;
        case "pattern":
          this.patterns[value.index].isActive = value.data;
          break;
        case "accessories":
          this.accessories[value.index].isActive = value.data;
          break;
      }
    },
    ogImage() {
      if (
        !this.$fetchState.pending &&
        !this.$fetchState.error &&
        this.product?.feature_photos?.length > 0
      ) {
        return this.product.feature_photos[0].photo;
      }
    },
    setToProductVariant(type, main) {
      const filterMain = main.filter((data) => data.name === type);
      if (type && filterMain.length === 0) {
        main.push({ name: type, isActive: false });
      }
    },
  },

  async fetch() {
    //fetch product detail
    const res = await this.generalGetApis(
      `/products/${this.$asxox.asxox_decode(this.$route.params.id)}`
    );
    this.product = res.data.data;

    //fetch recommended products
    const categoryRes = await this.generalGetApis(
      `products/category/${res.data.data.categories[0].id}?limit=15`
    );
    this.recommendedProducts = categoryRes.data.data;
    if (this.product.product_varients?.length > 0) {
      this.product.product_varients.map((product) => {
        const newData = [
          {
            name: product.size?.name,
            type: this.sizes,
          },
          {
            name: product.color?.name,
            type: this.colors,
          },
          {
            name: product.pattern?.name,
            type: this.patterns,
          },
          {
            name: product.accessories?.name,
            type: this.accessories,
          },
        ];
        newData.map((data) => {
          this.setToProductVariant(data.name, data.type);
        });
      });
    }
  },
};
</script>

<style lang="postcss" scoped>
.product-detail-container {
  @apply flex w-full md:flex-row flex-col bg-slate-100 gap-2 md:gap-y-0 px-2 pb-2;
}

.product-cover {
  @apply w-full h-full md:w-1/5  md:sticky md:top-0 md:bottom-0;
}

.product-detail {
  @apply w-full md:w-3/5 flex gap-y-2 flex-col;
}

.product-detail-container::-webkit-scrollbar {
  @apply hidden;
}
</style>
