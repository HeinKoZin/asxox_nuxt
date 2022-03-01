<template>
  <div class="customer-info-container">
    <div class="flex flex-col w-full md:w-1/2 gap-y-2">
      <CustomerDataCard />
      <PaymentMethodsCard />
    </div>

    <PromotionInputCard />

    <CustomerAddressCard />

    <OrderNoteCard />

    <CreateAddressModal />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

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
