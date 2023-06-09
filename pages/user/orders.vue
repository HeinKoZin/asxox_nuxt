<template>
  <div class="order-list-container shadow-sm">
    <div class="header">
      <span class="order-badge">
        <i class="fa-solid fa-box-open order-icon"></i>
        <span>{{ orders.length }}</span>
      </span>
      <h2>Your Orders</h2>
    </div>
    <div class="body">
      <OrderList
        v-if="!$fetchState.pending && orders.length > 0"
        :orders="orders"
      />
      <div v-if="$fetchState.pending">
        <div class="w-full flex flex-col gap-2">
          <div class="w-full rounded-sm h-12" v-for="index in 10" :key="index">
            <Skeleton class="rounded-sm" width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between items-center bg-white p-2 lg:p-3">
      <div
        class="flex items-center font-bold text-slate-600 text-sm xl:text-base"
      >
        Page
        {{ orders_paginate.current_page ? orders_paginate.current_page : 1 }} /
        {{ orders_paginate.last_page ? orders_paginate.last_page : 1 }}
      </div>

      <div class="flex items-center gap-2 lg:gap-3">
        <Transition>
          <button
            @click="paginateOrders(currentPage > 1 ? (currentPage -= 1) : null)"
            class="w-8 h-8 lg:w-10 lg:h-10 font-bold bg-slate-100 text-slate-700 hover:text-orange-500 rounded-full"
            v-if="orders_paginate.current_page > 1"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
        </Transition>
        <div class="flex">
          <button
            v-for="index in orders_paginate ? orders_paginate.last_page : 0"
            :key="index"
            class="w-9 h-7 lg:w-12 lg:h-10 font-bold first:rounded-l-full last:rounded-r-full text-sm lg:text-base"
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
        <Transition>
          <button
            @click="
              paginateOrders(
                orders_paginate.last_page != currentPage &&
                  orders_paginate.last_page > currentPage
                  ? (currentPage += 1)
                  : null
              )
            "
            class="w-8 h-8 lg:w-10 lg:h-10 font-bold bg-slate-100 text-slate-700 hover:text-orange-500 rounded-full"
            v-if="orders_paginate.last_page > orders_paginate.current_page"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </Transition>
      </div>
    </div>
    <OrderDetailsModel v-if="isOrderDetail" />
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import { mapGetters, mapActions } from "vuex";
import { Skeleton } from "vue-loading-skeleton";

export default {
  components: {
    Skeleton,
  },
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
  @apply flex w-full bg-white lg:p-1 p-1 rounded flex-col;
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
  @apply w-full p-1 bg-slate-100 rounded-lg;
}

.body .order-table {
  @apply w-full;
}
</style>
