<template>
  <tr>
    <td>23</td>
    <td class="text-base font-bold text-slate-800">{{ order.order_code }}</td>
    <td>Test</td>
    <td>3000</td>
    <td>2</td>
    <td>6000</td>
    <td>2 weeks ago{{ order }}</td>
    <td>
      <span class="status-badge">
        <font-awesome-icon class="status-icon" :icon="['fas', 'check']" />
        <span>Delivered</span>
      </span>
    </td>
    <td class="text-center">
      <button class="details-btn">
        <font-awesome-icon class="status-icon" :icon="['fas', 'eye']" />Details
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
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
