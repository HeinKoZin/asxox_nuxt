<template>
  <div class="order-item-container">
    <div class="order-item-image-container">
      <img :src="product.image" />
    </div>
    <div class="order-item-info-container">
      <div class="order-item-info-title">
        <span>{{ product.name }}</span>
      </div>
      <div class="order-item-variants-container">
        <div class="order-item-variant">
          <span>Color:</span>
          <span>{{ product.color }}</span>
        </div>

        <div class="order-item-variant">
          <span>Color:</span>
          <span>{{ product.size }}</span>
        </div>
      </div>

      <div class="order-item-info-price-quantity">
        <span>$ {{ product.price }}</span>
        <span>X</span>
        <span>{{ product.quantity }}</span>
      </div>

      <div class="order-item-actions">
        <div class="order-item-quantity-actions">
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
          </button>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'minus']" />
          </button>
        </div>
        <button class="order-item-remove">
          <font-awesome-icon class="icon" :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.order-item-container {
  @apply w-full py-4 border-b border-slate-300 flex gap-x-2 justify-center;
}

.order-item-image-container {
  @apply w-[40%];
}

.order-item-image-container img {
  @apply w-full h-auto rounded-lg object-cover;
}

.order-item-info-container {
  @apply w-full h-full gap-x-2;
}

.order-item-info-title {
  @apply text-slate-800 text-lg font-bold font-quicksand line-clamp-2;
}

.order-item-variants-container {
  @apply flex gap-x-2 flex-wrap py-1;
}

.order-item-variant span {
  @apply text-slate-800 text-sm font-bold first:text-slate-600 first:font-medium;
}

.order-item-info-price-quantity {
  @apply flex gap-x-2 text-sm text-slate-600 items-center;
}

.order-item-info-price-quantity span {
  @apply first:text-lg font-quicksand first:text-slate-800 first:font-bold last:text-base;
}

.icon {
  @apply text-slate-600 font-thin;
}

.order-item-actions {
  @apply flex gap-x-4 w-full py-2 justify-between mt-2;
}

.order-item-quantity-actions {
  @apply flex gap-x-6;
}

.order-item-actions button {
  @apply w-8 h-8 rounded-full border border-slate-300 flex justify-center items-center active:bg-slate-100;
}

.order-item-remove .icon {
  @apply text-red-600;
}
</style>
