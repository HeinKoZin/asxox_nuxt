<template>
  <div class="order-item-container">
    <div class="order-item-image-container">
      <img :src="product.cover_photo" />
    </div>
    <div class="order-item-info-container">
      <div class="order-item-info-title">
        <span>{{ product.parent_product_name }}</span>
      </div>
      <div class="order-item-variants-container">
        <div
          class="order-item-variant"
          v-for="(variant, index) in product.selectedVariant"
          :key="index"
        >
          <span>{{ variant.type }}:</span>
          <span>{{ variant.data }}</span>
        </div>
      </div>

      <div class="order-item-info-price-quantity">
        <span>$ {{ product.sell_price }} {{ product.currency }}</span>
        <span>X</span>
        <span>{{ product.qty }}</span>
      </div>

      <div class="order-item-actions">
        <div class="order-item-quantity-actions">
          <button
            @click="product.qty > 1 ? changeQty('minus', product.qty) : null"
          >
            <font-awesome-icon class="icon" :icon="['fas', 'minus']" />
          </button>
          <button @click="changeQty('plus', product.qty)">
            <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
          </button>
        </div>
        <button
          class="order-item-remove"
          @click="REMOVE_PRODUCT_FROM_CART(productId)"
        >
          <font-awesome-icon class="icon" :icon="['fas', 'trash']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    productId: {
      type: Number,
    },
  },
  methods: {
    ...mapMutations(["UPDATE_PRODUCT_IN_CART", "REMOVE_PRODUCT_FROM_CART"]),
    changeQty(type, qty) {
      let newQty = qty;
      type === "minus" ? newQty-- : newQty++;
      this.UPDATE_PRODUCT_IN_CART({ productId: this.productId, newQty });
    },
  },
};
</script>

<style lang="postcss" scoped>
.order-item-container {
  @apply w-full py-4 border-b border-slate-300 flex gap-x-2 justify-center;
}

.order-item-image-container {
  @apply w-[45%];
}

.order-item-image-container img {
  @apply w-full h-auto rounded-lg object-cover;
}

.order-item-info-container {
  @apply w-full h-full gap-x-2;
}

.order-item-info-title {
  @apply text-slate-800 text-base font-bold font-quicksand line-clamp-2 w-full break-all;
}

.order-item-variants-container {
  @apply flex gap-x-2 flex-wrap py-1;
}

.order-item-variant span {
  @apply text-slate-800 text-xs font-bold first:text-slate-600 first:font-medium;
}

.order-item-info-price-quantity {
  @apply flex gap-x-2 text-xs text-slate-600 items-center;
}

.order-item-info-price-quantity span {
  @apply first:text-base font-quicksand first:text-slate-800 first:font-bold last:text-base;
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
