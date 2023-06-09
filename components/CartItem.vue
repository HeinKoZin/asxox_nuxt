<template>
  <div
    :class="'cart-item ' + (product.isSelected ? 'active' : '')"
    @click="checkBoxHandler"
  >
    <!-- Select box -->
    <div class="select-box-container">
      <div
        :class="'select-status ' + (product.isSelected ? 'active' : '')"
      ></div>
    </div>
    <div class="cart-item-image">
      <nuxt-img
        format="webp"
        quality="50"
        loading="lazy"
        :src="product.cover_photo"
        alt=""
      />
    </div>
    <div class="cart-item-details">
      <div class="flex flex-col flex-grow">
        <div class="cart-item-title">
          <h4>
            {{ product.parent_product_name }}
          </h4>
        </div>
        <div class="cart-item-variants" v-if="product.variant_name">
          <span>({{ product.variant_name }})</span>
        </div>
        <div class="cart-item-price">
          <span>{{ product.sell_price }} {{ product.currency }}</span>
        </div>
      </div>
      <div class="cart-item-quantity">
        <div class="cart-item-quantity-input">
          <button
            class="btn btn-sm btn-outline-primary"
            @click.stop="
              product.qty > 1 ? changeQty('minus', product.qty) : null
            "
          >
            <i class="fa-solid fa-minus icon"></i>
          </button>
          <span>{{ product.qty }}</span>
          <button
            class="cart-item-plus-btn"
            @click.stop="changeQty('plus', product.qty)"
          >
            <i class="fa-solid fa-plus icon"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="cart-item-action">
      <button
        class="text-white bg-orange-600 rounded-md btn btn-sm btn-outline-primary w-7 h-7 hover:bg-orange-700"
        @click.stop="REMOVE_PRODUCT_FROM_CART(product.id)"
      >
        <i class="fa-solid fa-trash icon"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    product: Object,
    productId: Number,
  },
  data() {
    return {
      id: "select-box-item",
      isSelect: false,
    };
  },

  computed: {
    selectBoxId() {
      return `${this.id}-${this.productId}`;
    },
  },
  methods: {
    ...mapMutations([
      "UPDATE_PRODUCT_IN_CART",
      "REMOVE_PRODUCT_FROM_CART",
      "UPDATE_IS_SELECTED_PRODUCT_IN_CART",
    ]),
    changeQty(type, qty) {
      let newQty = qty;
      type === "minus" ? newQty-- : newQty++;
      this.UPDATE_PRODUCT_IN_CART({ productId: this.product.id, newQty });
    },

    checkBoxHandler() {
      // this.product.isSelected = !this.product.isSelected;
      this.UPDATE_IS_SELECTED_PRODUCT_IN_CART({
        productId: this.productId,
        isSelected: !this.product.isSelected,
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.cart-item {
  @apply flex flex-row items-center  w-auto p-2 h-auto bg-slate-100 m-1 rounded-lg relative border-4 border-transparent cursor-pointer;
}
.cart-item.active {
  @apply border-orange-500;
}

.cart-item .cart-item-image {
  @apply w-16 rounded-md relative;
}

.cart-item .cart-item-image img {
  @apply object-cover w-full h-auto rounded-lg;
}

/* .cart-quantity {
  @apply flex flex-row items-center justify-items-end flex-1;
} */

.cart-item-title {
  @apply line-clamp-1 w-full md:text-base text-sm font-bold font-quicksand;
}

.cart-item-details {
  @apply flex flex-col md:flex-row justify-start items-center h-full flex-grow px-2;
}

.cart-item-quantity-input {
  @apply flex;
}

.cart-item-quantity-input span {
  @apply p-1 md:p-2 text-center bg-transparent;
}

.cart-item-quantity-input button {
  @apply w-6 h-6 rounded-full border border-slate-300 text-sm;
}

.cart-item-quantity-input {
  @apply flex gap-x-2 justify-center items-center;
}

.cart-item-quantity {
  @apply mr-3 md:mr-2 ml-2;
}

.cart-item-quantity span {
  @apply px-4 text-sm font-semibold rounded-lg border border-slate-300;
}

.cart-item-action {
  @apply flex flex-row items-center justify-center mr-2;
}

.cart-item-variants {
  @apply text-xs md:text-sm text-slate-600 line-clamp-1;
}

.cart-item-price {
  @apply text-sm md:text-base;
}

.icon {
  @apply text-sm;
}

.cart-item-plus-btn {
  @apply bg-slate-800 text-slate-50;
}

.select-box-container {
  @apply flex h-full items-center justify-center mr-2;
}

.select-box-container input {
  @apply cursor-pointer bg-slate-200 checked:bg-orange-500 border-2 border-slate-300 checked:border-orange-500 appearance-none w-4 h-4 lg:w-5 lg:h-5 rounded-lg  flex justify-center items-center before:w-1 before:lg:w-2 before:h-1 before:lg:h-2 before:bg-transparent before:rounded-lg checked:before:bg-orange-500;
}

.select-box-container .select-status {
  @apply border-2 border-slate-300 bg-transparent w-4 h-4 lg:w-5 lg:h-5 rounded-lg flex justify-center items-center;
}

.select-box-container .select-status.active {
  @apply bg-orange-500 border-orange-500;
}
</style>
