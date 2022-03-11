<template>
  <tr>
    <td>23</td>
    <td class="text-base font-bold text-slate-800">A23332</td>
    <td>6000</td>
    <td>2 weeks ago</td>
    <!-- <td>This is order note.</td> -->
    <td>
      <span class="status-badge cancelled">
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
export default {};
</script>

<style lang="postcss" scoped>
tr {
  @apply border-t border-slate-300 even:bg-slate-100 hover:bg-slate-200  text-sm font-semibold;
}

tr td {
  @apply p-3;
}

.status-badge {
  @apply flex  p-2 px-4 rounded-full  items-center gap-x-2 w-auto;
}

.status-icon {
  @apply text-lg;
}

.details-btn {
  @apply bg-orange-500 text-white p-2 px-4 rounded-lg font-semibold flex justify-center items-center mx-auto gap-x-2;
}

.status-badge.pending {
  @apply bg-yellow-200 text-yellow-500;
}

.status-badge.payment-pending {
  /* background-color: #f59e0b; */
  @apply bg-orange-200 text-orange-500;
}

.status-badge.delivered {
  @apply bg-green-200 text-green-500;
}

.status-badge.cancelled {
  /* background-color: #dc3545; */
  @apply bg-red-200 text-red-500;
}

.status-badge.completed {
  /* background-color: #007bff; */
  @apply bg-blue-200 text-blue-500;
}

.status-badge.pre-order {
  /* background-color: #ec4899; */
  @apply bg-pink-200 text-pink-500;
}

.status-badge.order-delay {
  /* background-color: #05f2c7; */
  @apply bg-teal-200 text-teal-500;
}
</style>
