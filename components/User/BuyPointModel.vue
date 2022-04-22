<template>
  <div class="buy-point-container" @click.self="handleTopup()">
    <div class="buy-point-wrapper">
      <div class="header">Options to Buy</div>
      <div class="body">
        <h3>Amount</h3>
        <div class="point-amount-container">
          <div class="point-amount-item">
            <input
              type="radio"
              name="amount"
              id="500"
              value="500"
              v-model="pointAmount"
            />
            <label for="500">500</label>
          </div>
          <div class="point-amount-item">
            <input
              type="radio"
              name="amount"
              id="1000"
              value="1000"
              v-model="pointAmount"
            />
            <label for="1000">1000</label>
          </div>
          <div class="point-amount-item">
            <input
              type="radio"
              name="amount"
              id="3000"
              value="3000"
              v-model="pointAmount"
            />
            <label for="3000">3000</label>
          </div>
          <div class="point-amount-item">
            <input
              type="radio"
              name="amount"
              id="5000"
              value="5000"
              v-model="pointAmount"
            />
            <label for="5000">5000</label>
          </div>
          <div class="w-full point-amount-item">
            <input
              type="radio"
              name="amount"
              id="other"
              @click="pointAmount = null"
            />
            <input
              type="number"
              name="amount"
              placeholder="Other amount"
              v-model="customPointAmount"
              @click="pointAmount = null"
              min="500"
            />
          </div>
        </div>

        <OnlinePaymentMethods isBuyPoints />

        <!-- <button class="confirm-btn" @click="finalOrder" disabled>
          <Spinner slot="loader" />
          Confirm
        </button> -->
        <Button
          variant="primary"
          class="w-full mt-7"
          :disabled="isPointOrder"
          @click.native="finalOrder"
        >
          <Spinner slot="loader" v-if="isPointOrder" />
          Confirm
        </Button>

        <button class="cancel-btn" @click="handleTopup()">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { sha256 } from "js-sha256";
import utf8 from "utf8";

export default {
  data() {
    return {
      pointAmount: null,
      customPointAmount: null,
      isPointOrder: false,
    };
  },
  watch: {
    customPointAmount(val) {
      this.pointAmount = val;
    },
  },
  computed: {
    ...mapGetters(["selectedPayment"]),
  },
  methods: {
    handleTopup() {
      this.$emit("handleTopup");
    },
    async finalOrder() {
      try {
        this.isPointOrder = true;
        const res = await this.$axios.post("/point_buy", {
          amount: this.pointAmount,
        });
        const orderId = res.data.data.id;
        switch (this.selectedPayment) {
          case "kbz-pay":
            this.kpay(orderId);
            break;
          case "wave-pay":
            this.getWavePayPaymentRequestData("000" + orderId);
            break;
          default:
            break;
        }
        // this.toast(Object.values(res.errors)[0][0], "error");
        this.isPointOrder = false;
      } catch (error) {
        console.log(error);
      }
    },
    async kpay(orderId, totalAmount) {
      // make sign with SHA256
      const timestamp = this.timestampGenerate().toString();
      const nonce_str = this.getNonce(32).toString().toUpperCase();
      let stringA = `appid=kp7845e3e156234868aaeaad2f2536dc&callback_info=title%3diphonex&merch_code=70022802&merch_order_id=${orderId}&method=kbz.payment.precreate&nonce_str=${nonce_str}&notify_url=https://asxox.com.mm/checkout?isOrder=true&timeout_express=100m&timestamp=${timestamp}&title=iPhoneX&total_amount=${this.pointAmount}&trade_type=PWAAPP&trans_currency=MMK&version=1.0`;

      let stringToSign = `${stringA}&key=13d961f122cbb78451d7f4b333147745`;
      let bytes1 = await utf8.encode(stringToSign);
      let sign = sha256(bytes1).toUpperCase();

      var paymentData = {
        Request: {
          timestamp,
          method: "kbz.payment.precreate",
          notify_url: "https://asxox.com.mm/user/points?isPointConfirm=success",
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
            total_amount: this.pointAmount,
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
              type: "point",
            },
          }
        );
        window.location.href = `https://payments.wavemoney.io/authenticate?transaction_id=${res.data.transaction_id}`;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.buy-point-container {
  @apply w-full h-full top-0 left-0 bg-slate-900 bg-opacity-20 flex text-slate-50 fixed items-center justify-center p-1 lg:p-0;
}

.buy-point-wrapper {
  @apply p-5 bg-white text-black bg-opacity-100 text-lg rounded-md lg:max-w-[450px];
}

.header {
  @apply w-full font-quicksand text-slate-900 lg:text-lg text-sm font-bold;
}

.body {
  @apply w-full flex flex-col gap-4 py-4 text-sm lg:text-base;
}

.body h3 {
  @apply font-semibold text-slate-600 text-sm lg:text-base;
}

.point-amount-container {
  @apply flex gap-4 w-full text-base lg:text-lg flex-wrap;
}
.point-amount-item {
  @apply flex items-center gap-2 text-sm lg:text-base;
}

.point-amount-item input[type="number"] {
  @apply border-b-2 border-slate-300  py-2 px-3  active:outline-none hover:outline-none focus:outline-none;
}

.confirm-btn {
  @apply w-full p-2 mt-2 bg-orange-500 text-white text-sm lg:text-lg rounded-lg font-semibold font-quicksand;
}

.cancel-btn {
  @apply w-full p-2 mt-2 bg-slate-400 text-white text-sm lg:text-lg rounded-lg font-semibold font-quicksand;
}
</style>
