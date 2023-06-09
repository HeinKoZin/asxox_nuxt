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
            v-for="(product, index) in cartSelectedProducts"
            :product="product"
            :key="index"
            :productId="product.id"
          />
        </div>

        <div class="total-price-container">
          <div class="total-price-wrapper">
            <div class="total-price-label">Total Price</div>
            <div class="total-price" v-if="cartSelectedProducts.length > 0">
              {{ cartProductsTotal }} {{ cartSelectedProducts[0].currency }}
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
            <div class="total-price" v-if="cartSelectedProducts.length > 0">
              {{ calculateSubtotal() }}
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
import { sha256 } from "js-sha256";
import utf8 from "utf8";
export default {
  mixins: [generalMixins],
  props: {
    onMyEvent: Function,
  },
  data() {
    return {
      isSpin: false,
      test: null,
    };
  },
  // NOTE: Method from Vuex getters
  computed: {
    ...mapGetters([
      "cartSelectedProducts",
      "cartProductsTotal",
      "order",
      "isModel",
      "selectedPayment",
      "cartUnSelectedProducts",
    ]),
    calculateCartProductQuantity() {
      let qty = 0;
      for (let product of this.cartSelectedProducts) {
        qty += product.qty;
      }
      return qty;
    },
  },
  methods: {
    calculateSubtotal(type = "normal") {
      if (type === "pay"){
        const subTotal = this.order.point_amount
          ? (this.order.total_amount - this.order.point_value).toString()
          : this.order.total_amount.toString();
        return subTotal;
      }
      else{
        const subTotal = this.order.point_amount
          ? this.order.total_amount - this.order.point_value
          : this.order.total_amount;
        if(subTotal === 0){
          this.SET_PAYMENT_METHOD('cash_on_delivery');
          this.SET_PAYMENT(null);
        }
        return subTotal + " " +
              this.cartSelectedProducts[0]?.currency;
      }

    },
    ...mapMutations([
      "REFRESH_ORDER",
      "SET_WHOLE_PRODUCTS_TO_CART",
      "SET_MODEL",
      "SET_WAVEPAY_RESPONSE",
      "SET_PAYMENT_METHOD",
      "SET_PAYMENT",
      "SET_ORDER"
    ]),
    async finalOrder() {
      this.spinOnOffAndEmit(true);
      if (this.cartSelectedProducts.length === 0) {
        this.toast("Please add products to cart!", "info");
        this.spinOnOffAndEmit(false);
        return;
      }
      this.order.type = "Web";
      const res = await this.generalPostApis("orders", this.order);
      switch (this.selectedPayment) {
        case "kbz-pay":
          this.kpay(res.data);
          break;
        case "wave-pay":
          this.getWavePayPaymentRequestData(res.data);
          break;
        case "cb-bank":
          this.cbBank(res.data);
          break;
        default:
          if (!res.errors) {
            this.toast("Ordered successfully", "success");
            this.SET_WHOLE_PRODUCTS_TO_CART(this.cartUnSelectedProducts);
            this.SET_MODEL(!this.isModel);
            this.spinOnOffAndEmit(false);
            return;
          }
          this.toast(Object.values(res.errors)[0][0], "error");
          break;
      }
      this.spinOnOffAndEmit(false);
    },
    async kpay(orderId) {
      // make sign with SHA256
      const timestamp = this.timestampGenerate().toString();
      const nonce_str = this.getNonce(32).toString().toUpperCase();
      let stringA = `appid=kp7845e3e156234868aaeaad2f2536dc&callback_info=title%3diphonex&merch_code=70022802&merch_order_id=${orderId}&method=kbz.payment.precreate&nonce_str=${nonce_str}&notify_url=https://api.asxox.com.mm/api/backend/payment/kpay&timeout_express=100m&timestamp=${timestamp}&title=iPhoneX&total_amount=${this.calculateSubtotal(
        "pay"
      )}&trade_type=PWAAPP&trans_currency=MMK&version=1.0`;

      let stringToSign = `${stringA}&key=13d961f122cbb78451d7f4b333147745`;
      let bytes1 = await utf8.encode(stringToSign);
      let sign = sha256(bytes1).toUpperCase();

      var paymentData = {
        Request: {
          timestamp,
          method: "kbz.payment.precreate",
          notify_url: "https://api.asxox.com.mm/api/backend/payment/kpay",
          nonce_str,
          sign_type: "SHA256",
          sign,
          version: "1.0",
          biz_content: {
            merch_order_id: orderId.toString(),
            merch_code: "70022802",
            appid: "kp7845e3e156234868aaeaad2f2536dc",
            trade_type: "PWAAPP",
            title: "iPhoneX",
            total_amount: this.calculateSubtotal("pay"),
            trans_currency: "MMK",
            timeout_express: "100m",
            callback_info: "title%3diphonex",
          },
        },
      };
      this.paymentRequestKBZpay(paymentData);
    },
    async paymentRequestKBZpay(data) {
      try {
        const res = await this.$axios({
          baseURL: "https://api.kbzpay.com/payment/gateway/precreate",
          method: "POST",
          data,
        });
        await this.kpayReferer(res.data.Response);
      } catch (error) {
        console.log(error);
      }
    },
    //get kpay referer
    async kpayReferer(data) {
      const timestamp = this.timestampGenerate().toString();
      try {
        // make sign with SHA256
        let stringA = `appid=kp7845e3e156234868aaeaad2f2536dc&merch_code=70022802&nonce_str=${data.nonce_str}&prepay_id=${data.prepay_id}&timestamp=${timestamp}`;
        let stringToSign = `${stringA}&key=13d961f122cbb78451d7f4b333147745`;
        let bytes1 = await utf8.encode(stringToSign);
        let sign = sha256(bytes1).toUpperCase();

        var finalData = {
          prepay_id: data.prepay_id,
          appid: "kp7845e3e156234868aaeaad2f2536dc",
          merch_code: "70022802",
          sign,
          nonce_str: data.nonce_str,
          timestamp,
        };
        const res = await this.$axios.post("/kpay-referer", finalData);
        window.location.href = res.data;
      } catch (error) {
        console.log(error);
      }
    },
    getNonce(length) {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    timestampGenerate() {
      return Date.now();
    },

    async getWavePayPaymentRequestData(orderId) {
      try {
        const res = await this.$axios.get(
          `wavepay/payment-request/${orderId}`,
          {
            params: {
              type: "order",
            },
          }
        );
        window.location.href = `https://payments.wavemoney.io/authenticate?transaction_id=${res.data.transaction_id}`;
      } catch (error) {
        console.log(error);
      }
    },
    spinOnOffAndEmit(isSpin) {
      this.$emit("spinResponse", isSpin);
      this.isSpin = isSpin;
    },

    cbBank(orderId) {
      // redirect to cb bank
      window.location.href = `https://api.asxox.com.mm/api/cb-p?id=${orderId}&type=w`;
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
