<template>
  <div class="points-container">
    <div class="points-detail-container">
      <div class="points-item">
        <h2>My Points</h2>
        <p>
          Your Point ID: <span>{{ $auth.user.data.point.id }}</span>
        </p>
        <p>
          You have
          <span class="points">{{ $auth.user.data.point.amount }}</span> points.
        </p>
      </div>
      <div class="point-action-buttons">
        <button @click="handleTopup()">Top up</button>
        <button @click="handleTransfer()">Transfer</button>
      </div>
      <BuyPointModel v-if="isTopup" @handleTopup="handleTopup" />
      <TransferPointModel v-if="isTransfer" @handleTransfer="handleTransfer" />
    </div>

    <div class="w-full mt-10 bg-white rounded-md p-4 text-slate-800">
      <div class="w-full">
        <h2 class="font-bold text-lg">Points History</h2>
      </div>
      <div class="w-full p-2 overflow-auto">
        <table class="w-full border-separate" style="border-spacing: 0 0.8em">
          <thead class="font-bold">
            <tr>
              <td class="p-2 font-bold text-base min-w-[150px]">Type</td>
              <td class="p-2 font-bold text-base min-w-[150px]">User</td>
              <td class="p-2 font-bold text-base min-w-[200px]">Description</td>
              <td class="p-2 font-bold text-base">Date</td>
              <td class="p-2 font-bold text-base text-center">Amount</td>
            </tr>
          </thead>
          <tbody class="bg-slate-200">
            <tr v-if="$fetchState.pending">
              <td colspan="5">
                <div
                  class="w-full h-52 flex justify-center items-center text-slate-800 font-bold"
                >
                  Loading...
                </div>
              </td>
            </tr>
            <tr v-if="points.length === 0 && !$fetchState.pending">
              <td colspan="5">
                <div
                  class="w-full h-52 flex justify-center items-center text-slate-800 font-bold"
                >
                  No History
                </div>
              </td>
            </tr>
            <tr
              v-else
              v-for="(point, index) in points"
              :key="index"
              class="bg-slate-50 hover:bg-slate-100"
            >
              <td class="p-2">{{ pointTitleFormat(point.title) }}</td>
              <td class="p-2">
                {{
                  point.type === "SendPoint"
                    ? point.receiver_type === "Admin"
                      ? "Admin"
                      : point.receiver.user_name
                    : point.sender
                    ? point.sender.user_name
                    : "Admin"
                }}
              </td>
              <td class="p-2">{{ point.note }}</td>
              <td class="p-2">{{ formatDatetime(point.created_at) }}</td>

              <td class="p-2 text-white text-center">
                <p
                  class="text-center px-2 py-1 rounded-sm"
                  :class="
                    point.type === 'ReceivePoint'
                      ? 'bg-green-500'
                      : 'bg-red-500'
                  "
                >
                  {{
                    point.type === "ReceivePoint"
                      ? `+ ${formatNumber(point.amount_of_transaction)}`
                      : `- ${formatNumber(point.amount_of_transaction)}`
                  }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Common/Button.vue";
import { generalMixins } from "@/mixins/general";

export default {
  mixins: [generalMixins],
  components: { Button },
  layout: "ProfileLayout",

  data() {
    return {
      isTopup: false,
      isTransfer: false,

      points: [],
    };
  },
  methods: {
    handleTopup() {
      this.isTopup = !this.isTopup;
    },
    handleTransfer() {
      this.isTransfer = !this.isTransfer;
    },
    async updateUserData() {
      try {
        const res = await this.$auth.fetchUser();
        this.$auth.setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    },

    formatNumber(x) {
      var d = parseInt(x);
      return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    pointTitleFormat(title) {
      let pointTitle = title.replace(/_/g, " ");
      const words = pointTitle.split(" ");

      return words
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    },
    // async pointBuy() {
    //   try {
    //     if (process.browser) {
    //       const orderId = window.localStorage.getItem("orderId");
    //       if (this.$route.query.orderId === orderId) {
    //         const res = this.$axios.post(
    //           `/point_buy?amount=${this.$route.query.amount}&status=success&point_order_id=${orderId}`
    //         );
    //       }
    //       window.localStorage.removeItem("orderId");
    //       this.updateUserData();
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },

    formatDatetime(datetime) {
      const newDateTime = new Date(datetime);
      const formattedDate =
        newDateTime.getDate() +
        "/" +
        (newDateTime.getMonth() + 1) +
        "/" +
        newDateTime.getFullYear();
      return formattedDate;
    },
  },
  async fetch() {
    await this.$auth.fetchUser();
    if (process.browser) {
      if (this.$route.query.isPointConfirm === "success")
        this.toast("Points have been successfully added!", "success");
    }

    const pointsHistory = await this.$axios.get("/transfer-point-history");
    this.points = pointsHistory.data.data;
  },

  // mounted() {
  //   this.pointBuy();
  // },
};
</script>

<style lang="postcss" scoped>
.points-container {
  @apply flex w-full h-full bg-slate-100 lg:p-4 p-1 py-6 rounded-lg flex-col;
}

tr {
  @apply border-t border-slate-300 even:bg-slate-100 hover:bg-slate-200  text-sm font-semibold;
}

.points-detail-container {
  @apply flex  items-center px-3 lg:px-0 gap-4 flex-col justify-center h-full w-full;
}

.points-item {
  @apply bg-slate-100 w-full md:w-1/2 mx-auto md:mx-0 font-quicksand font-bold text-center flex flex-col gap-2 p-4 py-6 border-2 border-slate-300 rounded-md;
}

.points-item p span {
  @apply text-lg font-semibold  text-slate-600  font-quicksand;
}

.points-item h2 {
  @apply text-2xl text-slate-600 mb-2;
}

.point-action-buttons {
  @apply flex  w-1/2  gap-4;
}

.point-action-buttons button {
  @apply bg-orange-500 w-full py-3 px-4 text-center text-sm lg:text-lg  text-white font-quicksand font-semibold rounded-md;
}
</style>
