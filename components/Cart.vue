<template>
  <div :class="'cart-container-wrapper ' + (isCartOpen ? 'active ' : '')">
    <div class="cart-container">
      <div class="cart-header">
        <button @click="SET_CART(!isCartOpen)">
          <font-awesome-icon
            :icon="['fas', 'times']"
            class="text-slate-500 hover:text-slate-700 close-icon"
          />
        </button>
        <div class="cart-header-title">
          <h3>Cart</h3>
        </div>
        <div class="cart-header-action">
          <button class="btn btn-sm btn-outline-primary">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
          </button>
        </div>
      </div>
      <div class="cart-body">
        <div class="cart-item">
          <div class="cart-item-image">
            <img src="https://via.placeholder.com/50" alt="" />
          </div>
          <div class="cart-item-details">
            <div class="flex flex-col flex-grow">
              <div class="cart-item-title">
                <h4>Product Name</h4>
              </div>
              <div class="cart-item-price">
                <span>$10.00</span>
              </div>
            </div>
            <div class="cart-item-quantity">
              <div class="cart-item-quantity-input">
                <button class="btn btn-sm btn-outline-primary">
                  <font-awesome-icon :icon="['fas', 'minus']" class="icon" />
                </button>
                <input type="text" value="1" />
                <button class="btn btn-sm btn-outline-primary">
                  <font-awesome-icon :icon="['fas', 'plus']" class="icon" />
                </button>
              </div>
            </div>
            <div class="cart-item-action">
              <button class="btn btn-sm btn-outline-primary">
                <font-awesome-icon :icon="['fas', 'trash']" class="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["isCartOpen"]),
  },
  methods: {
    ...mapMutations(["SET_CART"]),
  },
};
</script>

<style lang="postcss" scoped>
.cart-container-wrapper {
  @apply fixed right-0 top-16 w-[calc(100%_-_4.4rem)] md:w-2/6 -mr-[calc(100%_-_4.4rem)] md:-mr-[33.33%] bg-slate-300 h-[calc(100%_-_4rem)]  border-slate-200 rounded-l-xl z-50 transition-[margin];
}

.cart-container-wrapper.active {
  @apply mr-0;
}

.cart-container {
  @apply flex flex-col h-full;
}

.cart-container .cart-header {
  @apply flex flex-row justify-between items-center p-2 px-4 bg-white rounded-tl-xl;
}

.cart-container .cart-header .cart-header-title {
  @apply text-2xl;
}

.cart-container .cart-header .close-icon {
  @apply text-2xl;
}

.cart-container .cart-body {
  @apply flex flex-col justify-center p-6;
}

.cart-container .cart-body .cart-item {
  @apply flex flex-row items-center  w-auto p-2 h-auto bg-white m-1 rounded-lg relative;
}

.cart-container
  .cart-body
  .cart-body-item
  .cart-body-item-info
  .cart-body-item-info-title {
  @apply flex flex-row items-center w-full h-full justify-start;
}

.cart-container .cart-body .cart-item .cart-item-image {
  @apply w-24 rounded-md relative;
}

.cart-container .cart-body .cart-item .cart-item-image img {
  @apply object-cover w-full h-auto;
}

.cart-quantity {
  @apply flex flex-row items-center justify-items-end flex-1;
}

.cart-item-details {
  @apply flex flex-row justify-start items-center h-full flex-grow px-2;
}

.cart-item-details input {
  @apply p-2 w-8 text-center;
}

.cart-item-quantity {
  @apply mr-8;
}

.cart-item-details .cart-item-action {
  @apply flex flex-row items-center justify-center;
}
</style>
