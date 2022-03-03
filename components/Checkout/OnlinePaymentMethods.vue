<template>
  <div class="online-payment-methods-container-wrapper">
    <div class="payment-methods-container">
      <div class="payment-methods-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon
              class="credit-card-icon"
              :icon="['fas', 'credit-card']"
            />
          </span>
          <span>Online Payment Methods</span>
        </div>
        <!-- <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'edit']" />
            Edit
          </button>
        </div> -->
      </div>
      <div class="body">
        <!-- <div class="payment-method active">
          <button>
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <span> Cash On Delivery</span>
          </button>
        </div> -->

        <div class="payment-method-wrapper">
          <div class="payment-method active">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <img src="~/assets/img/kbz.png" alt="" srcset="" />
          </div>
        </div>
        <div class="payment-method-wrapper">
          <div class="payment-method">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <img src="~/assets/img/wave.png" alt="" srcset="" />
          </div>
        </div>
        <div class="payment-method-wrapper">
          <div class="payment-method">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <img src="~/assets/img/kbzpay.png" alt="" srcset="" />
          </div>
        </div>
        <div class="payment-method-wrapper">
          <div class="payment-method">
            <span>
              <font-awesome-icon
                class="payment-method-icon"
                :icon="['fas', 'check-circle']"
              />
            </span>
            <img src="~/assets/img/mpitesan.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.online-payment-methods-container-wrapper {
  @apply w-full  p-1 flex font-quicksand order-2 md:order-none;
}

.payment-methods-container {
  @apply w-full flex flex-col gap-y-4 border border-slate-300 p-5 md:p-10 rounded-lg justify-center;
}

.payment-methods-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.body {
  @apply flex flex-wrap;
}

.payment-method-old {
  @apply flex flex-grow  gap-x-2;
}

.payment-method-old button {
  @apply px-3 p-2 bg-transparent text-sm md:text-base text-slate-800 w-full rounded-lg flex items-center gap-x-2 border border-slate-500 font-semibold flex-grow;
}

.payment-method.active button {
  @apply bg-orange-500 text-white border-0;
}

.payment-method-wrapper {
  @apply p-1 flex w-2/4 md:w-1/4;
}

.payment-method {
  @apply w-full relative;
}

.payment-method span {
  @apply absolute top-3 left-4 text-transparent text-lg;
}

.payment-method.active span {
  @apply text-orange-500;
}

.payment-method img {
  @apply w-full h-full rounded-lg border-4  border-transparent;
}

.payment-method.active img {
  @apply border-orange-500;
}
</style>
