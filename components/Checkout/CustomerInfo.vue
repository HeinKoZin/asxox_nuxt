<template>
  <div class="customer-info-container">
    <CustomerDataCard />

    <PromotionInputCard />

    <CustomerAddressCard />

    <OrderNoteCard />
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
  @apply w-[70%] flex  flex-wrap gap-y-2;
}

.header {
  @apply text-slate-800 text-xl font-bold font-quicksand border border-slate-300 p-2 rounded-lg;
}

.shopping-icon {
  @apply text-xl;
}
</style>
