<template>
  <div class="customer-info-container">
    <div class="flex flex-col order-1 w-full md:order-none md:w-1/2 gap-y-2">
      <CustomerDataCard />
      <PaymentMethodsCard @openPaymentSection="openPaymentSection" />
    </div>

    <!-- <div class="flex flex-col w-full md:w-1/2 gap-y-2"> -->
    <PromotionInputCard />
    <!-- </div> -->
    <OnlinePaymentMethods v-if="isPaymentSectionOpen" />

    <CustomerAddressCard @openModal="openModal" />

    <OrderNoteCard />

    <CreateAddressModal @closeModal="closeModal" v-if="isModalOpen" />
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      isModalOpen: false,
      isPaymentSectionOpen: false,
    };
  },

  methods: {
    openPaymentSection(value) {
      this.isPaymentSectionOpen = value;
    },
    // open modal box
    openModal() {
      this.isModalOpen = true;
    },

    // close modal box
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
/* we will explain what these classes do next! */
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
