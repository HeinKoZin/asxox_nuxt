<template>
  <div class="points-container">
    <div class="points-detail-container">
      <div class="points-item">
        <h2>My Points</h2>
        <p>
          You have
          <span class="points">{{ userData.point.amount }}</span> points.
        </p>
      </div>
      <div class="point-action-buttons">
        <button @click="handleTopup()">Top up</button>
        <button @click="handleTransfer()">Transfer</button>
      </div>
      <BuyPointModel v-if="isTopup" @handleTopup="handleTopup" />
      <TransferPointModel v-if="isTransfer" @handleTransfer="handleTransfer" />
    </div>
  </div>
</template>

<script>
import Button from "../../components/Common/Button.vue";

export default {
  components: { Button },
  layout: "ProfileLayout",

  data() {
    return {
      isTopup: false,
      isTransfer: false,
      userData: {},
    };
  },

  methods: {
    handleTopup() {
      this.isTopup = !this.isTopup;
    },
    handleTransfer() {
      this.isTransfer = !this.isTransfer;
    },
    async makePointConfirm() {
      try {
        const res = await this.$axios.post(
          `/point_buy?amount=${this.$route.query.amount}&status=${this.$route.query.status}&point_order_id=${this.$route.query.point_order_id}`,
          {
            amount: this.pointAmount,
          }
        );
      } catch (error) {}
    },
  },
  fetch() {
    this.userData = this.$auth.user.data;
    if (this.$route.query.status) {
      this.makePointConfirm();
    }
  },
};
</script>

<style lang="postcss" scoped>
.points-container {
  @apply flex w-full h-full bg-slate-100 lg:p-4 p-1 py-6 rounded-lg flex-col;
}

.points-detail-container {
  @apply flex  items-center gap-4 flex-col justify-center h-full w-full;
}

.points-item {
  @apply bg-slate-100 w-1/2 mx-auto md:mx-0 font-quicksand font-bold text-center p-4 py-6 border-2 border-slate-300 rounded-md;
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
