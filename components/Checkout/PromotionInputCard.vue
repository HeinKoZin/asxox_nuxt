<template>
  <div class="promotion-container-wrapper">
    <div class="promotion-container">
      <div class="promotion-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon class="shopping-icon" :icon="['fas', 'gift']" />
          </span>
          <span>Discount</span>
        </div>
      </div>
      <div class="promotion-content">
        <div class="input-wrapper">
          <input
            type="text"
            placeholder="Coupon Code"
            v-model="couponCode"
            :disabled="checkData.isCoupon"
          />
          <button
            @click="applyCoupon(couponCode)"
            v-if="!checkData.isCoupon"
            class="default-button"
          >
            Apply
          </button>
          <button
            @click="removePromotion('coupon')"
            class="remove-button"
            v-else
          >
            Remove Coupon
          </button>
        </div>
        <p v-if="errors.couponError">{{ errors.couponError }}</p>
        <p v-if="errors.couponSuccess">{{ errors.couponSuccess }}</p>
        <div class="input-wrapper">
          <input
            type="number"
            placeholder="Point amount"
            v-model="point"
            :disabled="checkData.isPoint"
            required
          />
          <button
            @click="applyPoint"
            v-if="!checkData.isPoint"
            class="default-button"
          >
            Apply
          </button>
          <button
            @click="removePromotion('point')"
            class="remove-button"
            v-else
          >
            Remove Point
          </button>
        </div>
        <p v-if="errors.pointError">{{ errors.pointError }}</p>
        <p v-if="errors.pointSuccess">{{ errors.pointSuccess }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../Common/Input.vue";
import { generalMixins } from "@/mixins/general";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: { Input },
  mixins: [generalMixins],
  data() {
    return {
      checkData: {
        isPoint: false,
        isCoupon: false,
      },
      errors: {
        couponError: null,
        couponSuccess: null,
        pointError: null,
        pointSuccess: null,
      },
      point: null,
      couponCode: "",
    };
  },
  computed: {
    ...mapGetters(["order"]),
  },
  methods: {
    // NOTE: Method from Vuex actions
    ...mapMutations([
      "UPDATE_CART_ORDER_COUPON",
      "SET_ORDER",
      "REMOVE_COUPON_FROM_ORDER",
    ]),

    calculateSubtotal() {
      return this.order.point_amount
        ? this.order.total_amount - this.order.point_amount
        : this.order.total_amount;
    },

    removePromotion(type) {
      if (type === "point") {
        this.point = null;
        this.checkData.isPoint = false;
        this.SET_ORDER({ type: "point_amount", data: null });
        this.errors.pointError = null;
        this.errors.pointSuccess = null;

        //draft
        this.toast("Point removed", "info");
      } else {
        this.couponCode = null;
        this.checkData.isCoupon = false;
        this.REMOVE_COUPON_FROM_ORDER();
        this.errors.couponError = null;
        this.errors.couponSuccess = null;

        //draft
        this.toast("Coupon removed", "info");
      }
    },

    async applyPoint() {
      if (this.point === null) {
        this.errors.pointError = "Please enter point amount";
        return;
      }
      if (this.point > this.$auth.user.data.point.amount) {
        this.errors.pointError = "You don't have sufficient point";
        return;
      }
      if (this.point > this.calculateSubtotal) {
        this.errors.pointError =
          "Your point amount must be smaller than your oder subtotal amount";
        return;
      }
      const res = await this.generalGetApis("check-one-point-value");
      const pointValue = +this.point * +res.data.data.one_point_value;
      this.checkData.isPoint = true;
      this.errors.pointSuccess = "Point amount added";
      this.errors.pointError = null;
      this.SET_ORDER({ type: "point_amount", data: pointValue });

      //draft
      this.toast("Point amount added", "success");
    },

    async applyCoupon(code) {
      const res = await this.generalPostApis(`/check-coupon`, { code });
      if (res.status === "error") {
        this.errors.couponError = res.message;
        this.errors.couponSuccess = null;

        //draft
        this.toast(res.message, "error");
      } else {
        this.errors.couponError = null;
        this.errors.couponSuccess = res.message;
        this.checkData.isCoupon = true;
        this.UPDATE_CART_ORDER_COUPON(res);

        //draft
        this.toast("Coupon added", "success");
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.promotion-container-wrapper {
  @apply w-full md:w-1/2  p-1 flex font-quicksand pl-0 md:pl-2 flex-grow order-3 md:order-none;
}

.promotion-container {
  @apply w-full h-full flex flex-col gap-y-4 border border-slate-300 p-5 md:p-10 rounded-lg justify-center flex-grow;
}

.promotion-title {
  @apply text-slate-800 text-base md:text-lg font-bold font-quicksand border-b border-slate-300 py-2;
}

.input-wrapper {
  @apply flex  gap-x-2 w-full;
}

.promotion-content {
  @apply flex flex-col gap-y-4;
}

.input-wrapper input {
  @apply border border-slate-300 px-4 p-2 flex-grow rounded-lg text-sm md:text-base focus:outline-slate-400 placeholder:text-slate-700;
}

.default-button {
  @apply p-2 px-4 rounded-lg bg-orange-500 text-slate-50 text-sm md:text-base font-semibold hover:bg-orange-600 active:bg-orange-700;
}

.remove-button {
  @apply p-2 px-4 rounded-lg bg-red-500 text-slate-50 text-sm md:text-base font-semibold hover:bg-red-600 active:bg-red-700;
}
</style>
