<template>
  <div
    :class="
      'customer-address-container-wrapper ' + (isInProfile ? 'profile' : '')
    "
  >
    <div class="customer-address-container">
      <div class="address-title">
        <div class="flex gap-x-2">
          <span>
            <i class="fa-solid fa-location-dot shopping-icon"></i>
          </span>
          <span>Shipping Address</span>
        </div>
        <div>
          <button @click="$emit('openModal')">
            <i class="fa-solid fa-plus icon"></i>
            Add address
          </button>
        </div>
      </div>

      <div class="address-contents-container-wrapper">
        <div class="address-contents-container">
          <AddressContentItem
            v-for="(address, index) in shippingAddresses"
            :key="index"
            :address="address"
            :addressIndex="index"
            @changeAddress="changeAddress"
            @removeAddress="removeAddress(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      addresses: [],
    };
  },
  props: {
    isInProfile: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["shippingAddresses"]),
  },
  methods: {
    // NOTE: Method from Vuex actions
    ...mapMutations([
      "SET_ADDRESS_TO_ORDER",
      "UPDATE_ADDRESS_STATUS",
      "REMOVE_ADDRESS",
      "SET_SHIPPING_ADDRESSES",
    ]),
    //NOTE: change addresses by index
    changeAddress(index) {
      this.shippingAddresses.forEach((address, i) => {
        if (i === index) {
          this.UPDATE_ADDRESS_STATUS({ index: i, value: true });
        } else {
          this.UPDATE_ADDRESS_STATUS({ index: i, value: false });
        }
      });
      this.SET_ADDRESS_TO_ORDER(
        this.shippingAddresses.filter((address) => address.status)[0]
      );
    },

    //NOTE: remove addresses by index
    removeAddress(index) {
      this.REMOVE_ADDRESS(index);
    },
  },
  mounted() {
    // this.addresses = this.$auth.user?.data?.customer?.shipping_addresses || [];
    this.SET_SHIPPING_ADDRESSES(
      this.$auth.user?.data?.customer?.shipping_addresses || []
    );
    if (this.shippingAddresses.length === 0) return;
    console.log(this.shippingAddresses);
    // console.log(this.shippingAddresses.filter((address) => !address.status));
    this.SET_ADDRESS_TO_ORDER(
      this.shippingAddresses.filter((address) => !address.status)[0] ||
        this.shippingAddresses.filter((address) => address.status)[0]
    );
  },
};
</script>

<style lang="postcss" scoped>
.customer-address-container-wrapper {
  @apply w-full p-1 font-quicksand order-3 md:order-none;
}

.customer-address-container-wrapper.profile {
  @apply p-0 order-none;
}

.customer-address-container {
  @apply w-full flex flex-col gap-y-0 md:gap-y-2  border border-slate-300 p-0 md:p-10 rounded-lg;
}

.customer-address-container-wrapper.profile .customer-address-container {
  @apply bg-white;
}

.customer-address-container .address-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center px-2 md:p-0;
}

.address-contents-container {
  @apply grid grid-cols-1  gap-y-0  md:gap-y-4 w-full py-2 2xl:py-4;
}

button {
  @apply text-sm md:text-base font-semibold font-quicksand border bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-slate-50 rounded-lg border-slate-300 p-2 px-4 flex items-center gap-x-2;
}

.customer-address-container-wrapper.profile
  .address-contents-container-wrapper {
  @apply bg-slate-100 p-2 md:p-3 rounded-lg;
}
</style>
