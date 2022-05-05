<template>
  <div class="shop-product-card-container-wrapper">
    <div class="shop-product-card-container">
      <div class="shop-product-card-image-container">
        <img
          :src="product.temp_photo"
          alt=""
          srcset=""
          class="shop-product-card-image"
        />
      </div>
      <div class="product-details-container">
        <h3>{{ product.name }}</h3>
        <p>{{ product.sell_price + " " + product.currency }}</p>
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
};
</script>

<style lang="postcss" scoped>
.shop-product-card-container-wrapper {
  @apply p-1 min-w-[100%] max-w-[100%] md:min-w-[33.33%] md:max-w-[33.33%] h-auto;
}

.shop-product-card-container {
  @apply flex bg-slate-200 text-black p-2 rounded-xl shadow-sm;
}

.shop-product-card-image-container {
  @apply h-auto w-20 md:w-32;
}

.shop-product-card-image {
  @apply object-cover w-full h-full rounded-xl;
}

.product-details-container {
  @apply flex flex-col  flex-grow items-center justify-center gap-3 pl-2;
}

.product-details-container h3 {
  @apply text-sm md:text-base font-bold font-quicksand text-orange-500 w-full text-center;
}

.product-details-container p {
  @apply text-sm md:text-base font-bold font-quicksand py-2 px-4 bg-orange-500 text-white text-center;
}
</style>
