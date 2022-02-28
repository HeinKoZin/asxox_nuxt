<template>
  <div class="customer-address-container-wrapper">
    <div class="customer-address-container">
      <div class="address-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon
              class="shopping-icon"
              :icon="['fas', 'map-marker-alt']"
            />
          </span>
          <span>Shipping Address</span>
        </div>
        <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
            Add address
          </button>
        </div>
      </div>

      <div class="address-contents-container-wrapper">
        <div class="address-contents-container">
          <AddressContentItem
            v-for="(address, index) in addresses"
            :key="index"
            :address="address"
            :addressIndex="index"
            @changeAddress="changeAddress"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addresses: [],
    };
  },
  methods: {
    //NOTE: change addresses by index
    changeAddress(index) {
      this.addresses.forEach((address, i) => {
        if (i === index) {
          this.addresses[i].status = true;
        } else {
          this.addresses[i].status = false;
        }
      });
    },
  },
  mounted() {
    this.addresses = JSON.parse(
      JSON.stringify(this.$auth.user.data.customer.shipping_addresses)
    );
  },
};
</script>

<style lang="postcss" scoped>
.customer-address-container-wrapper {
  @apply w-full p-1 font-quicksand;
}
.customer-address-container {
  @apply w-full flex flex-col gap-y-2  border border-slate-300 p-5 md:p-10 rounded-lg;
}

.customer-address-container .address-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.address-contents-container {
  @apply flex-col md:flex-row flex flex-wrap gap-y-1 md:gap-y-2 w-full;
}

button {
  @apply text-sm md:text-base font-semibold font-quicksand border bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-slate-50 rounded-lg border-slate-300 p-2 px-4 flex items-center gap-x-2;
}
</style>
