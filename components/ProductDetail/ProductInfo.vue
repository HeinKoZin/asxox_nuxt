<template>
  <div class="product-description-container">
    <div class="header">Product Information</div>
    <div class="body">
      <div class="brand">
        <span>Brand : </span
        ><a href="#" class="font-bold text-blue-500 underline font-quicksand">{{
          product.brand.name
        }}</a>
      </div>

      <div class="product-code" v-if="product.product_code">
        <p>
          Product code: <span>{{ product.product_code }}</span>
        </p>
      </div>

      <div class="availability-container">
        <div class="availability-label">Availability:</div>
        <div class="availability-value">
          {{ generateStatus(product.status) }}
        </div>
      </div>

      <div class="categories-container">
        <p>Categories :</p>

        <div class="categories">
          <a
            href="#"
            @click.prevent="handleCategoryClick(category.category_id)"
            v-for="(category, index) in product.categories"
            :key="index"
            >{{ category.name }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    generateStatus(data) {
      switch (data) {
        case "pre_order":
          return "Pre Order";
        case "instock":
          return "Pre Order";
        case "out_of_stock":
          return "Out of Stock";
      }
    },
    handleCategoryClick(categoryId) {
      this.$router.push({ name: "categories-id", params: { id: categoryId } });
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-description-container {
  @apply flex w-full bg-slate-50 border border-slate-300 rounded-lg flex-col;
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 p-2 text-base md:text-lg font-quicksand font-bold;
}

.body {
  @apply w-full p-2 flex flex-col gap-y-3;
}

.brand {
  @apply flex w-full bg-slate-50 space-x-2;
}

.brand span {
  @apply text-slate-800 font-bold text-base font-quicksand;
}

.categories-container {
  @apply flex flex-col gap-y-2 w-full font-quicksand font-semibold;
}

.categories {
  @apply flex flex-wrap gap-2;
}

.categories a {
  @apply px-2 py-1 bg-slate-50 text-slate-800 border border-slate-300 text-sm rounded-full;
}

.product-code {
  @apply text-slate-800 font-bold text-base font-quicksand w-full space-x-2;
}

.product-code span {
  @apply font-medium;
}

.availability-container {
  @apply flex w-full gap-x-2 items-center font-quicksand flex-wrap;
}

.availability-container .availability-label {
  @apply font-semibold;
}

.availability-container .availability-value {
  @apply p-2  bg-green-600 text-white text-sm font-medium;
}
</style>
