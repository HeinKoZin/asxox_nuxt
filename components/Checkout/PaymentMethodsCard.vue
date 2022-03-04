<template>
  <div class="payment-methods-container-wrapper">
    <div class="payment-methods-container">
      <div class="payment-methods-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon
              class="credit-card-icon"
              :icon="['fas', 'credit-card']"
            />
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
          :class="{ active: payment_method === 'Cash On Delivery' }"
        >
          <button @click="payment_method = 'Cash On Delivery'">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <span> Cash On Delivery</span>
          </button>
        </div>
        <div
          class="payment-method"
          :class="{ active: payment_method === 'online_payment' }"
        >
          <button @click="payment_method = 'online_payment'">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <span> Online Payment</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      payment_method: "Cash On Delivery",
    };
  },
  watch: {
    payment_method() {
      this.SET_PAYMENT_METHOD(this.payment_method);
      const checkPaymentMethod = this.payment_method === "online_payment";
      this.$emit("openPaymentSection", checkPaymentMethod);
    },
  },
  methods: {
    // NOTE: Method from Vuex actions
    ...mapMutations(["SET_PAYMENT_METHOD"]),
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
  @apply flex flex-grow   gap-x-2;
}

.payment-method button {
  @apply px-3 p-2 bg-transparent text-sm md:text-base text-slate-800 w-full rounded-lg flex items-center gap-x-2 border border-slate-500 font-semibold;
}

.payment-method.active button {
  @apply bg-orange-500 text-white border-0;
}
</style>
