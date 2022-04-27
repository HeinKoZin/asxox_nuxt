<template>
  <div class="transfer-point-container" @click.self="handleTransfer()">
    <div class="transfer-point-wrapper">
      <div class="header">Transfer Points</div>
      <div class="input-container">
        <label for="user-id">To: </label>
        <input type="number" id="user-id" placeholder="Eg. 12345" />
      </div>
      <div class="input-container">
        <label for="amount">Amount: </label>
        <input type="number" id="amount" placeholder="1000" />
      </div>
      <div class="input-container">
        <label for="note">Note (Optional):</label>
        <textarea id="note" rows="6" />
      </div>
      <button class="confirm-btn">Confirm</button>
      <button class="cancel-btn" @click="handleTransfer()">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: "ProfileLayout",

  data() {
    return {};
  },

  methods: {
    handleTransfer() {
      this.$emit("handleTransfer");
    },
  },
};
</script>

<style lang="postcss" scoped>
.transfer-point-container {
  @apply w-full h-full top-0 left-0 bg-slate-900 bg-opacity-20 flex text-slate-50 fixed items-center justify-center p-1 lg:p-0;
}

.transfer-point-wrapper {
  @apply p-5 bg-white text-black bg-opacity-100 text-lg rounded-md lg:min-w-[400px] lg:max-w-[500px];
}

.header {
  @apply font-bold font-quicksand text-base lg:text-lg;
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
  @apply w-full p-2 mt-4 bg-orange-500 text-white text-sm lg:text-base rounded-lg font-semibold font-quicksand;
}

.cancel-btn {
  @apply w-full p-2 mt-4 bg-slate-400 text-white text-sm lg:text-base rounded-lg font-semibold font-quicksand;
}
</style>
