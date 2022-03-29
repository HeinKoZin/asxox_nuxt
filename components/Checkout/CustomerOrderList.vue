<template>
  <div class="customer-order-container-wrapper">
    <div class="customer-order-container">
      <div class="header">
        <div class="flex gap-x-4">
          <span class="order-badge">
            <i class="fa-solid fa-box-open order-icon"></i>
            <span>{{ calculateCartProductQuantity }}</span>
          </span>
          <span>Your Order</span>
        </div>
      </div>
      <div class="body">
        <div class="order-list-container">
          <!-- TODO: implement active design  -->
          <OrderItem
            v-for="(product, index) in cartProducts"
            :product="product"
            :key="index"
            :productId="index"
          />
        </div>

        <div class="total-price-container">
          <div class="total-price-wrapper">
            <div class="total-price-label">Total Price</div>
            <div class="total-price" v-if="cartProducts.length > 0">
              {{ cartProductsTotal }} {{ cartProducts[0].currency }}
            </div>
            <div class="total-price" v-else>0.00</div>
          </div>
          <div class="total-price-wrapper">
            <div class="total-price-label">Delivery :</div>
            <div class="total-price">-</div>
          </div>
          <div class="total-price-wrapper">
            <div class="total-price-label">Discount :</div>
            <div class="total-price">-</div>
          </div>
          <div class="total-price-wrapper" v-if="order.coupon_amount">
            <div class="total-price-label">Coupon Discount :</div>
            <div class="line-through total-price">
              {{ order.coupon_amount }} MMK
              {{ order.coupon_percent ? `( ${order.coupon_percent}% )` : "" }}
            </div>
          </div>
          <div class="total-price-wrapper" v-if="order.point_amount">
            <div class="total-price-label">Point Discount :</div>
            <div class="line-through total-price">
              {{ order.point_value }} MMK
            </div>
          </div>

          <div class="subtotal-price-wrapper">
            <div class="total-price-label">Subtotal :</div>
            <div class="total-price" v-if="cartProducts.length > 0">
              {{ calculateSubtotal }}
            </div>
            <div class="total-price" v-else>0.00</div>
          </div>
        </div>
      </div>
      <div class="order-confirm-btn">
        <Button
          variant="primary"
          class="w-full"
          :disabled="isSpin"
          @click.native="finalOrder"
        >
          <Spinner slot="loader" v-if="isSpin" />
          Confirm
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { generalMixins } from "@/mixins/general";
import { faL } from "@fortawesome/free-solid-svg-icons";
export default {
  mixins: [generalMixins],
  props: {
    onMyEvent: Function,
  },
  data() {
    return {
      isSpin: false,
    };
  },
  // NOTE: Method from Vuex getters
  computed: {
    ...mapGetters(["cartProducts", "cartProductsTotal", "order", "isModel"]),
    calculateCartProductQuantity() {
      let qty = 0;
      for (let product of this.cartProducts) {
        qty += product.qty;
      }
      return qty;
    },
    calculateSubtotal() {
      return this.order.point_amount
        ? this.order.total_amount - this.order.point_value
        : this.order.total_amount + " " + this.cartProducts[0]?.currency;
    },
  },
  methods: {
    ...mapMutations([
      "REFRESH_ORDER",
      "SET_WHOLE_PRODUCTS_TO_CART",
      "SET_MODEL",
    ]),
    async finalOrder() {
      this.spinOnOffAndEmit(true);
      if (this.cartProducts.length === 0) {
        this.toast("Please add products to cart!", "info");
        return;
      }
      const res = await this.generalPostApis("orders", this.order);
      this.getWavePayPaymentRequestData(res.data);

      if (res.status !== "error" && !res.errors) {
        this.toast("Ordered successfully", "success");
        // this.SET_WHOLE_PRODUCTS_TO_CART([]);
        this.SET_MODEL(!this.isModel);
        this.spinOnOffAndEmit(false);
        return;
      }

      this.toast(Object.values(res.errors)[0][0], "error");
      this.spinOnOffAndEmit(false);
    },
    async getWavePayPaymentRequestData(orderId) {
      try {
        const res = await this.$axios.get(
          `wavepay/get-payment-info/${orderId}`
        );
        const newData = {
          time_to_live_in_seconds: res.data.data.time_to_live_in_seconds,
          merchant_id: res.data.data.merchant_id,
          order_id: orderId,
          merchant_reference_id: res.data.data.merchant_reference_id,
          frontend_result_url: res.data.data.frontend_result_url,
          backend_result_url: res.data.data.backend_result_url,
          amount: res.data.data.amount,
          payment_description: res.data.data.payment_description,
          merchant_name: res.data.data.merchant_name,
          items: res.data.items,
          hash: res.data.hash,
        };
        this.paymentRequest(newData);
      } catch (error) {
        console.log(error);
      }
    },
    async paymentRequest(data) {
      try {
        const res = await this.$axios({
          url: "payment",
          baseURL: "https://payments.wavemoney.io/",
          methods: "POST",
          data,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    spinOnOffAndEmit(isSpin) {
      this.$emit("spinResponse", isSpin);
      this.isSpin = isSpin;
    },
  },
  mounted() {
    this.REFRESH_ORDER();
    this.onMyEvent(this.finalOrder);
  },
};
</script>

<style lang="postcss" scoped>
.customer-order-container-wrapper {
  @apply w-full md:w-[30%] p-1 flex;
}

.customer-order-container {
  @apply w-full flex flex-col gap-y-2 border border-slate-300 p-5 md:p-10 rounded-lg;
}

.header {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.body {
  @apply w-full flex flex-col flex-grow;
}

.order-list-container {
  @apply w-full flex flex-col gap-y-2 flex-grow;
}

.total-price-container {
  @apply flex w-full flex-col gap-y-4 font-quicksand pt-2;
}

.total-price-container .total-price-wrapper {
  @apply flex w-full gap-y-2 justify-between text-sm md:text-base font-semibold;
}

.total-price-container .subtotal-price-wrapper {
  @apply flex w-full gap-y-2 justify-between p-4 py-6 rounded-lg bg-slate-200 text-base md:text-lg font-bold;
}

.order-icon {
  @apply text-slate-900 text-lg md:text-2xl;
}

.order-badge {
  @apply flex flex-col relative;
}

.order-badge span {
  @apply text-slate-50 text-[10px] md:text-sm absolute bg-orange-500 rounded-full h-5 md:h-6 w-5 md:w-6 justify-center items-center flex text-center -top-3 -right-3;
}

.order-confirm-btn {
  @apply w-full mt-2 hidden md:block;
}

.order-confirm-btn button {
  @apply w-full bg-orange-500 text-white text-base md:text-lg font-bold py-3 px-4 rounded-lg font-quicksand disabled:bg-slate-400 disabled:cursor-not-allowed;
}
</style>
