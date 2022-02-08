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
        <button
          class="btn btn-sm btn-outline-primary bg-orange-600 text-white w-9 h-9 rounded-md hover:bg-orange-700"
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
  @apply w-24 rounded-md relative;
}

.cart-item .cart-item-image img {
  @apply object-cover w-full h-auto;
}

.cart-quantity {
  @apply flex flex-row items-center justify-items-end flex-1;
}

.cart-item-details {
  @apply flex flex-row justify-start items-center h-full flex-grow px-2;
}

.cart-item-details input {
  @apply p-2 w-8 text-center bg-transparent;
}

.cart-item-quantity {
  @apply mr-8;
}

.cart-item-details .cart-item-action {
  @apply flex flex-row items-center justify-center;
}
</style>
