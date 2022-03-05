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
          <input type="text" placeholder="Coupon Code" v-model="couponCode" />
          <bUtton @click="applyCoupon(couponCode)">Apply</bUtton>
        </div>
        <p v-if="errors.couponError">{{ errors.couponError }}</p>
        <p v-if="errors.couponSuccess">{{ errors.couponSuccess }}</p>
        <div class="input-wrapper">
          <input type="number" placeholder="Point amount" v-model="point" />
          <bUtton @click="applyPoint">Apply</bUtton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../Common/Input.vue";
import { generalMixins } from "@/mixins/general";
import { mapMutations } from "vuex";
export default {
  components: { Input },
  mixins: [generalMixins],
  data() {
    return {
      couponCode: "",
      errors: {
        couponError: null,
        couponSuccess: null,
      },
      point: null,
    };
  },
  methods: {
    // NOTE: Method from Vuex actions
    ...mapMutations(["UPDATE_CART_ORDER_COUPON", "SET_ORDER"]),
    async applyPoint() {
      const res = await this.generalGetApis("check-one-point-value");
      const pointValue = this.point * res.data.data.open_point_value;
      this.SET_ORDER({ type: "point_amount", data: pointValue });
    },
    async applyCoupon(code) {
      const res = await this.generalPostApis(`/check-coupon`, { code });
      if (res.status === "error") {
        this.errors.couponError = res.message;
        this.errors.couponSuccess = null;
      } else {
        this.errors.couponError = null;
        this.errors.couponSuccess = res.message;
        this.UPDATE_CART_ORDER_COUPON(res);
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

.input-wrapper button {
  @apply p-2 px-4 rounded-lg bg-orange-500 text-slate-50 text-sm md:text-base font-semibold hover:bg-orange-600 active:bg-orange-700;
}
</style>
