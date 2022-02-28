<template>
  <div class="customer-info-container">
    <div class="w-full md:w-1/2 flex flex-col gap-y-2">
      <CustomerDataCard />
      <PaymentMethodsCard />
    </div>

    <PromotionInputCard />

    <CustomerAddressCard />

    <OrderNoteCard />
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="postcss" scoped>
.customer-info-container {
  @apply w-full md:w-[70%] flex flex-col md:flex-row  flex-wrap gap-y-2;
}

.header {
  @apply text-slate-800 text-xl font-bold font-quicksand border border-slate-300 p-2 rounded-lg;
}

.shopping-icon {
  @apply text-xl;
}
</style>
