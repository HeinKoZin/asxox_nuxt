<template>
  <div class="customer-order-container">
    <div class="header">Your Order</div>
    <div class="body">
      <OrderItem
        v-for="(product, index) in orders"
        :product="product"
        :key="index"
      />

      <div class="total-price-container">
        <div class="total-price-wrapper">
          <div class="total-price-label">Total Price</div>
          <div class="total-price">20000 MMK</div>
        </div>
        <div class="total-price-wrapper">
          <div class="total-price-label">Delivery:</div>
          <div class="total-price">2000 MMK</div>
        </div>
        <div class="total-price-wrapper">
          <div class="total-price-label">Discount:</div>
          <div class="total-price">2000 MMK</div>
        </div>

        <div class="subtotal-price-wrapper">
          <div class="total-price-label">Subtotal:</div>
          <div class="total-price">2000 MMK</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
      orders: [
        {
          id: 1,
          name: "Product 1",
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/17/products/feature/17-02-2022_Asxox_4620e0be52ed334.63359488.jpg",
          price: "100",
          color: "Red",
          size: "XL",
          quantity: 1,
        },
        {
          id: 2,
          name: "Product 2",
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/17/products/feature/17-02-2022_Asxox_4620e0be52ed334.63359488.jpg",
          price: "200",
          color: "Blue",
          size: "L",
          quantity: 2,
        },
        {
          id: 2,
          name: "Product 3 Product 3 Product 3 Product 3 Product 3 ",
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/17/products/feature/17-02-2022_Asxox_4620e0be52ed334.63359488.jpg",
          price: "200",
          color: "Blue",
          size: "L",
          quantity: 2,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
.customer-order-container {
  @apply w-1/4 flex flex-col gap-y-2 border border-slate-300 p-4 px-10 rounded-lg;
}

.header {
  @apply text-slate-800 text-xl font-bold font-quicksand w-full border-b border-slate-300 py-4;
}

.body {
  @apply w-full flex flex-col gap-y-2;
}

.total-price-container {
  @apply flex w-full flex-col gap-y-4 font-quicksand;
}

.total-price-container .total-price-wrapper {
  @apply flex w-full gap-y-2 justify-between text-base;
}

.total-price-container .subtotal-price-wrapper {
  @apply flex w-full gap-y-2 justify-between p-4 py-6 rounded-lg bg-slate-200 text-xl font-bold;
}
</style>
