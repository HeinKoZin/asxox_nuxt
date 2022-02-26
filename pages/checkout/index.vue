<template>
  <div class="checkout-container">
    <div class="checkout-container-wrapper">
      <div class="header">Shopping Cart</div>

      <div class="body">
        <CustomerInfo />
        <CustomerOrderList />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "MainLayout",
};
</script>

<style lang="postcss" scoped>
.checkout-container {
  @apply flex flex-col w-full min-h-screen bg-white px-24 py-14;
}

.checkout-container-wrapper {
  @apply flex flex-col gap-y-2;
}

.header {
  @apply text-slate-800 text-3xl font-bold font-quicksand;
}

.body {
  @apply w-full flex gap-x-2 mt-5;
}
</style>
