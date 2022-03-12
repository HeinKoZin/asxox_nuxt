<template>
  <div class="cart-item">
    <div class="cart-item-image">
      <img src="https://via.placeholder.com/50" alt="" />
    </div>
    <div class="cart-item-details">
      <div class="flex flex-col flex-grow">
        <div class="cart-item-title">
          <h4>Product Name</h4>
        </div>
        <div class="cart-item-variants"><span>(Red/ Pattern A)</span></div>
        <div class="cart-item-price">
          <span>$10.00</span>
        </div>
      </div>
      <div class="cart-item-quantity">
        <div class="cart-item-quantity-input">
          <button class="">
            <font-awesome-icon :icon="['fas', 'minus']" class="icon" />
          </button>
          <span>1</span>
          <button class="cart-item-plus-btn">
            <font-awesome-icon :icon="['fas', 'plus']" class="icon" />
          </button>
        </div>
      </div>
      <div class="cart-item-action">
        <button
          class="text-white bg-orange-600 rounded-md btn btn-sm btn-outline-primary w-7 h-7 hover:bg-orange-700"
        >
          <font-awesome-icon :icon="['fas', 'trash']" class="icon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.cart-item {
  @apply flex flex-row items-center  w-auto p-2 h-auto bg-slate-100 m-1 rounded-lg relative;
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
  @apply flex flex-row justify-start items-center h-full flex-grow px-2;
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
  @apply mr-5 md:mr-8 ml-2;
}

.cart-item-quantity span {
  @apply px-4 text-sm font-semibold rounded-lg border border-slate-300;
}

.cart-item-details .cart-item-action {
  @apply flex flex-row items-center justify-center;
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
</style>
