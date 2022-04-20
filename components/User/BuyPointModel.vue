<template>
  <div class="buy-point-container">
    <div class="buy-point-wrapper">
      <div class="header">Options to Buy</div>
      <div class="body">
        <h3>Amount</h3>
        <div class="point-amount-container">
          <div class="point-amount-item">
            <input type="radio" name="amount" id="500" />
            <label for="500">500</label>
          </div>
          <div class="point-amount-item">
            <input type="radio" name="amount" id="1000" />
            <label for="1000">1000</label>
          </div>
          <div class="point-amount-item">
            <input type="radio" name="amount" id="3000" />
            <label for="3000">3000</label>
          </div>
          <div class="point-amount-item">
            <input type="radio" name="amount" id="5000" />
            <label for="5000">5000</label>
          </div>
          <div class="w-full point-amount-item">
            <input type="radio" name="amount" id="other" />
            <input type="number" name="amount" placeholder="Other amount" />
          </div>
        </div>

        <OnlinePaymentMethods isBuyPoints />

        <button class="confirm-btn">Confirm</button>
        <button class="cancel-btn" @click="handleTopup()">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleTopup() {
      this.$emit("handleTopup");
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
