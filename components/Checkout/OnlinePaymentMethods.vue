<template>
  <div
    class="online-payment-methods-container-wrapper"
    :class="isBuyPoints ? 'buy-points' : ''"
  >
    <div class="payment-methods-container">
      <div class="payment-methods-title">
        <div class="flex gap-x-2">
          <span>
            <i class="fa-solid fa-credit-card credit-card-icon"></i>
          </span>
          <span>{{
            isBuyPoints ? "Choose Payment Method" : "Online Payment Methods"
          }}</span>
        </div>
        <!-- <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'edit']" />
            Edit
          </button>
        </div> -->
      </div>
      <div class="body">
        <!-- <div class="payment-method active">
          <button>
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <span> Cash On Delivery</span>
          </button>
        </div> -->

        <!-- <div class="payment-method-wrapper">
          <div class="payment-method active">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <img src="~/assets/img/kbz.png" alt="" srcset="" />
          </div>
        </div> -->
        <div
          class="payment-method-wrapper"
          v-for="(payment, index) in payments"
          :key="index"
          @click="setPaymentMethod(payment.name, index)"
        >
          <div
            class="payment-method"
            :class="
              payment.isSelect || selectedPayment === payment.name
                ? 'active'
                : ''
            "
          >
            <span>
              <i class="fa-solid fa-circle-check payment-method-icon"></i>
            </span>
            <img
              :src="require(`~/assets/img/${payment.image}`)"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <!-- <div class="payment-method-wrapper">
          <div class="payment-method">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <img src="~/assets/img/mpitesan.png" alt="" srcset="" />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: {
    isBuyPoints: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      payments: [
        {
          id: 1,
          name: "kbz-pay",
          image: "kbzpay.png",
          isSelect: false,
        },
        {
          id: 2,
          name: "wave-pay",
          image: "wave.png",
          isSelect: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["selectedPayment"]),
  },
  methods: {
    ...mapMutations(["SET_PAYMENT"]),
    setPaymentMethod(name, index) {
      for (let i = 0; i < this.payments.length; i++) {
        this.payments[i].isSelect = false;
      }
      this.payments[index].isSelect = true;
      this.SET_PAYMENT(name);
    },
  },
};
</script>

<style lang="postcss" scoped>
.online-payment-methods-container-wrapper {
  @apply w-full  p-1 flex font-quicksand order-2 md:order-none;
}

/* NOTE: Buy points */
.online-payment-methods-container-wrapper.buy-points {
  @apply p-0;
}

.payment-methods-container {
  @apply w-full flex flex-col gap-y-4 border border-slate-300 p-5 md:p-10 rounded-lg justify-center;
}

/* NOTE: buy points */
.buy-points .payment-methods-container {
  @apply p-3;
}

.payment-methods-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

/* NOTE: buy points */
.buy-points .payment-methods-title {
  @apply text-sm md:text-base;
}

.body {
  @apply flex flex-wrap;
}

.payment-method-old {
  @apply flex flex-grow  gap-x-2;
}

.payment-method-old button {
  @apply px-3 p-2 bg-transparent text-sm md:text-base text-slate-800 w-full rounded-lg flex items-center gap-x-2 border border-slate-500 font-semibold flex-grow;
}

.payment-method.active button {
  @apply bg-orange-500 text-white border-0;
}

.payment-method-wrapper {
  @apply p-1 flex w-2/4 md:w-1/4;
}

/* NOTE: Buy points */
.buy-points .payment-method-wrapper {
  @apply p-1 w-1/2 md:w-1/2;
}

.payment-method {
  @apply w-full relative;
}

.payment-method span {
  @apply absolute top-3 left-4 text-transparent text-lg;
}

.buy-points .payment-method span {
  @apply absolute top-2 left-3 text-transparent text-lg;
}

.payment-method.active span {
  @apply text-orange-500;
}

.payment-method img {
  @apply w-full h-full rounded-lg border-4  border-transparent;
}

.payment-method.active img {
  @apply border-orange-500;
}
.active {
  @apply border-orange-500;
}
</style>
