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
    <div class="w-full flex justify-between items-center bg-white p-3">
      <div class="flex items-center font-bold text-slate-600">
        Page {{ orders_paginate.current_page }} /
        {{ orders_paginate.last_page }}
      </div>

      <div class="flex items-center gap-3">
        <Transition>
          <button
            @click="paginateOrders(currentPage > 1 ? (currentPage -= 1) : null)"
            class="w-10 h-10 font-bold bg-slate-100 text-slate-700 hover:text-orange-500 rounded-full"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
        </Transition>
        <div class="flex">
          <button
            v-for="index in orders_paginate ? orders_paginate.last_page : 0"
            :key="index"
            class="w-12 h-10 font-bold first:rounded-l-full last:rounded-r-full"
            @click="paginateOrders(index)"
            :class="
              orders_paginate.current_page === index
                ? 'bg-orange-500 text-white hover:bg-orange-600 '
                : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
            "
            v-show="
              index === 1 ||
              orders_paginate.current_page === index ||
              orders_paginate.current_page === index + 1 ||
              orders_paginate.current_page === index - 1 ||
              // orders_paginate.current_page === index + 2 ||
              // orders_paginate.current_page === index - 2 ||
              orders_paginate.last_page === index
            "
          >
            {{ index }}
          </button>
        </div>
        <!-- <button
          @click="paginateOrders(orders_paginate.last_page)"
          class="px-3 py-2 font-bold bg-slate-100 text-slate-600 hover:bg-slate-200"
        >
          Last
        </button> -->
        <button
          @click="
            paginateOrders(
              orders_paginate.last_page != currentPage &&
                orders_paginate.last_page > currentPage
                ? (currentPage += 1)
                : null
            )
          "
          class="w-10 h-10 font-bold bg-slate-100 text-slate-700 hover:text-orange-500 rounded-full"
        >
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
    <OrderDetailsModel v-if="isOrderDetail" />
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import { mapGetters, mapActions } from "vuex";
export default {
  layout: "ProfileLayout",
  mixins: [generalMixins],
  middleware: ["auth/ifNotAuthRedirectAuth"],
  head() {
    return {
      title: `Asxox | Orders`,
    };
  },
  data() {
    return {
      isModelOpen: false,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["isOrderDetail", "orders", "orders_paginate"]),
  },
  methods: {
    ...mapActions(["getOrders"]),
    openModel() {
      this.isModelOpen = true;
    },

    closeModel() {
      this.isModelOpen = false;
    },

    async paginateOrders(page) {
      this.currentPage = page;
      await this.getOrders({
        page: this.currentPage,
      });
    },
  },
  async fetch() {
    await this.getOrders(this.currentPage);
  },
};
</script>

<style lang="postcss" scoped>
.order-list-container {
  @apply flex w-full bg-white lg:p-1 p-1 rounded-lg flex-col;
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
