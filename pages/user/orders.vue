<template>
  <div class="order-list-container">
    <div class="header">
      <span class="order-badge">
        <font-awesome-icon class="order-icon" :icon="['fas', 'box-open']" />
        <span>{{ orders.length }}</span>
      </span>
      <h2>Your Orders</h2>
    </div>
    <div class="body">
      <OrderList :orders="orders" />
    </div>
    <OrderDetailsModel v-if="isOrderDetail" />
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import { mapGetters } from "vuex";
export default {
  layout: "ProfileLayout",
  mixins: [generalMixins],
  data() {
    return {
      isModelOpen: false,
      orders: [],
    };
  },
  computed: {
    ...mapGetters(["isOrderDetail"]),
  },
  methods: {
    openModel() {
      this.isModelOpen = true;
    },

    closeModel() {
      this.isModelOpen = false;
    },
  },
  async fetch() {
    const res = await this.generalGetApis("orders");
    this.orders = res.data.data.orders;
  },
  mounted() {
    if (!this.$auth.$storage.getLocalStorage("loggedIn")) {
      this.$router.push("/auth");
    }
  },
};
</script>

<style lang="postcss" scoped>
.order-list-container {
  @apply flex w-full bg-slate-100 p-4 rounded-lg flex-col;
}

.header {
  @apply w-full gap-x-4 flex items-center p-4 py-6;
}

.header h2 {
  @apply text-lg font-bold  font-quicksand;
}

.order-badge {
  @apply flex flex-col relative;
}

.order-badge span {
  @apply text-slate-50 text-[10px] md:text-sm absolute bg-orange-500 rounded-full h-5 md:h-6 w-5 md:w-6 justify-center items-center flex text-center -top-3 -right-3;
}

.order-icon {
  @apply text-slate-900 text-lg md:text-2xl;
}

.body {
  @apply w-full p-4 bg-slate-100 rounded-lg;
}

.body .order-table {
  @apply w-full;
}
</style>
