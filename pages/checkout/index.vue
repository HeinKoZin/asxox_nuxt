<template>
  <div class="checkout-container">
    <div class="checkout-container-wrapper">
      <div class="header">Shopping Cart</div>

      <div class="body">
        <CustomerInfo />
        <CustomerOrderList :on-my-event="myEventSource" />
      </div>
      <div class="order-confirm-btn">
        <button @click="sendEvent">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import { newEventSource } from "vue-parent-emit";

export default {
  layout: "MainLayout",

  data() {
    return {
      myEventSource: newEventSource(),
    };
  },
  methods: {
    sendEvent() {
      // use this anywhere in the parent component
      this.myEventSource.emit();
      // or this.myEventSource.emit(someEventPayload)
    },
  },

  head() {
    return {
      title: `Asxox | Checkout`,
    };
  },
  mounted() {
    if (!this.$auth.$storage.getLocalStorage("loggedIn")) {
      this.$router.push("/auth");
    }
  },
};
</script>

<style lang="postcss" scoped>
.checkout-container {
  @apply flex flex-col w-full min-h-screen bg-white px-2 md:px-24 py-14;
}

.checkout-container-wrapper {
  @apply flex flex-col gap-y-2;
}

.header {
  @apply text-slate-800 text-xl md:text-3xl font-bold font-quicksand p-2;
}

.body {
  @apply w-full flex flex-col-reverse md:flex-row gap-x-2 mt-5;
}

.order-confirm-btn {
  @apply flex justify-end my-4 p-1 md:hidden;
}

.order-confirm-btn button {
  @apply w-full bg-orange-500 text-white text-base md:text-lg font-bold py-3 px-4 rounded-lg font-quicksand disabled:bg-slate-400 disabled:cursor-not-allowed;
}
</style>
