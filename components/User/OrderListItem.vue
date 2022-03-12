<template>
  <tr>
    <td>{{ productIndex }}</td>
    <td class="text-base font-bold text-slate-800">{{ order.order_code }}</td>
    <td>{{ order.total - (order.promotions.point_amount || 0) }}</td>
    <td>{{ formatDatetime(order.created_at) }}</td>
    <td class="hidden md:block">{{ order.address }}</td>
    <td>
      <span class="status-badge">
        <font-awesome-icon class="status-icon" :icon="['fas', 'check']" />
        <span>{{ order.status }}</span>
      </span>
    </td>
    <td class="text-center">
      <button
        class="details-btn"
        @click="SET_ORDER_DETAIL(order), SET_IS_ORDER_DETAIL()"
      >
        <font-awesome-icon class="status-icon" :icon="['fas', 'eye']" />Details
      </button>
    </td>
  </tr>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
    productIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["SET_ORDER_DETAIL", "SET_IS_ORDER_DETAIL"]),
    formatDatetime(datetime) {
      const newDateTime = new Date(datetime);
      const formattedDate =
        newDateTime.getDate() +
        "/" +
        (newDateTime.getMonth() + 1) +
        "/" +
        newDateTime.getFullYear();
      return formattedDate;
    },
  },
};
</script>

<style lang="postcss" scoped>
tr {
  @apply border-t border-slate-300 even:bg-slate-100 hover:bg-slate-200  text-sm font-semibold;
}

tr td {
  @apply p-3;
}

.status-badge {
  @apply flex  p-2 px-4 rounded-full bg-green-200 text-green-500 items-center gap-x-2 w-auto;
}

.status-icon {
  @apply text-lg;
}

.details-btn {
  @apply bg-orange-500 text-white p-2 px-4 rounded-lg font-semibold flex justify-center items-center mx-auto gap-x-2;
}
</style>
