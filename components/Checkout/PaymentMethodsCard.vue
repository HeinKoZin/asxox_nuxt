<template>
  <div class="payment-methods-container-wrapper">
    <div class="payment-methods-container">
      <div class="payment-methods-title">
        <div class="flex gap-x-2">
          <span>
            <i class="fa-solid fa-credit-card credit-card-icon"></i>
          </span>
          <span>Payment Methods</span>
        </div>
        <!-- <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'edit']" />
            Edit
          </button>
        </div> -->
      </div>
      <div class="body">
        <div
          class="payment-method"
          :class="{ active: order.payment_method === 'cash_on_delivery' }"
          v-if="selectedShop !== 2"
        >
          <button
            @click="payment_method('cash_on_delivery'), SET_PAYMENT(null)"
          >
            <span>
              <i class="fa-solid fa-circle-check payment-method-icon"></i>
            </span>
            <span> Cash On Delivery</span>
          </button>
        </div>
        <div
          class="payment-method"
          :class="{ active: order.payment_method === 'online_payment' }"
        >
          <button @click="payment_method('online_payment')">
            <span>
              <i class="fa-solid fa-circle-check payment-method-icon"></i>
            </span>
            <span> Online Payment</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    payment_method(method) {
      this.SET_PAYMENT_METHOD(method);
    },
    // NOTE: Method from Vuex actions
    ...mapMutations(["SET_PAYMENT_METHOD", "SET_PAYMENT"]),
  },
  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters(["cartSelectedProducts", "order"]),

    selectedShop() {
      return this.cartSelectedProducts[0]?.shop_id;
    },
  },
};
</script>

<style lang="postcss" scoped>
.payment-methods-container-wrapper {
  @apply w-full p-1 font-quicksand flex flex-grow;
}

.payment-methods-container {
  @apply w-full flex flex-col gap-y-4 border border-slate-300 p-5 md:p-10 rounded-lg justify-center flex-grow;
}

.payment-methods-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.body {
  @apply flex gap-x-2;
}

.payment-method {
  @apply flex max-w-[50%] min-w-[50%]  gap-x-2;
}

.payment-method button {
  @apply px-3 p-2 bg-transparent text-sm md:text-base text-slate-800 w-full rounded-lg flex items-center gap-x-2 border border-slate-500 font-semibold;
}

.payment-method.active button {
  @apply bg-orange-500 text-white border-0;
}
</style>
