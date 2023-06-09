<template>
  <div class="transfer-point-container" @click.self="handleTransfer()">
    <div class="transfer-point-wrapper">
      <div class="header">Transfer Points</div>
      <div class="input-container">
        <label for="user-id">To: </label>
        <input
          type="number"
          id="user-id"
          placeholder="Eg. 12345"
          v-model="receiver_point_id"
        />
      </div>
      <div class="input-container">
        <label for="amount">Amount: </label>
        <input type="number" id="amount" placeholder="1000" v-model="amount" />
      </div>
      <div class="input-container">
        <label for="note">Note (Optional):</label>
        <textarea id="note" rows="6" v-model="note" />
      </div>
      <Button
        class="confirm-btn"
        :disabled="isPointTransfer"
        @click.native="transferPoint()"
      >
        <Spinner slot="loader" v-if="isPointTransfer" />
        Confirm
      </Button>

      <button class="cancel-btn" @click="handleTransfer()">Cancel</button>
    </div>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";

export default {
  mixins: [generalMixins],
  layout: "ProfileLayout",
  data() {
    return {
      receiver_point_id: null,
      amount: null,
      note: null,
      isPointTransfer: false,
    };
  },

  methods: {
    async updateUserData() {
      try {
        const res = await this.$auth.fetchUser();
        this.$auth.setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    },
    handleTransfer() {
      this.$emit("handleTransfer");
    },
    async transferPoint() {
      try {
        this.isPointTransfer = true;
        const res = await this.$axios.post("/transfer-point", {
          receiver_point_id: this.receiver_point_id,
          transfer_amount: this.amount,
          note: this.note,
        });
        this.receiver_point_id = null;
        this.amount = null;
        this.note = null;
        this.toast("Points has been transferred successfully");
        this.handleTransfer();
        this.updateUserData();
      } catch (err) {
        this.toast(Object.values(err.response.data.errors)[0][0], "error");
      }
      this.isPointTransfer = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
.transfer-point-container {
  @apply w-full h-full top-0 left-0 bg-slate-900 bg-opacity-20 flex text-slate-50 fixed items-center justify-center p-1 lg:p-0;
}

.transfer-point-wrapper {
  @apply p-5 bg-white text-black bg-opacity-100 text-lg rounded-md lg:min-w-[500px] lg:max-w-[600px];
}

.header {
  @apply font-semibold font-quicksand text-base lg:text-2xl;
}

.input-container {
  @apply flex flex-col gap-2 mt-4 text-sm;
}

.input-container input {
  @apply w-full border border-slate-300 rounded-md p-2 px-3;
}

.input-container textarea {
  @apply focus:outline-none border border-slate-300 p-2 px-3;
}

.input-container label {
  @apply font-semibold text-slate-700 text-base;
}

.confirm-btn {
  @apply w-full p-2 mt-4 bg-orange-500 text-white text-sm lg:text-base rounded shadow-sm hover:bg-orange-600 font-semibold font-quicksand;
}

.cancel-btn {
  @apply w-full p-2 mt-4 bg-slate-400 text-white text-sm lg:text-base rounded shadow-sm hover:bg-slate-600 font-semibold font-quicksand;
}
</style>
