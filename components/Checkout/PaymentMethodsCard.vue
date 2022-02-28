<template>
  <div class="payment-methods-container-wrapper">
    <div class="payment-methods-container">
      <div class="payment-methods-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon
              class="shopping-icon"
              :icon="['fas', 'credit-card']"
            />
          </span>
          <span>Payment Methods</span>
        </div>
        <!-- <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'edit']" />
            Edit
          </button>
        </div> -->
      </div>
      <div class="body">
        <div class="payment-method">
          <button>
            <span>
              <font-awesome-icon
                class="shopping-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <span> Cash On Delivery</span>
          </button>
        </div>
        <div class="payment-method">
          <button>
            <span>
              <font-awesome-icon
                class="shopping-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <span> Online Payment</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.payment-methods-container-wrapper {
  @apply w-full p-1 font-quicksand;
}

.payment-methods-container {
  @apply w-full flex flex-col gap-y-4 border border-slate-300  p-10 rounded-lg justify-center;
}

.payment-methods-title {
  @apply text-slate-800 text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.body {
  @apply flex gap-x-2;
}

.payment-method {
  @apply flex flex-grow   gap-x-2;
}

.payment-method button {
  @apply px-3 p-2 bg-orange-500 text-white w-full rounded-lg flex gap-x-2;
}
</style>
