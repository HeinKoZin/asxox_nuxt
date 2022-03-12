<template>
  <div class="w-full overflow-auto">
    <table class="order-table">
      <thead>
        <tr>
          <th class="w-1">No</th>
          <th># Order ID</th>
          <!-- <th>Name</th>
          <th>Price</th>
          <th class="w-1">Quantity</th> -->
          <th>Total</th>
          <th>Ordered Date</th>
          <th class="hidden md:block">Address</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <OrderListItem
          v-for="(order, index) in orders"
          :key="index"
          :order="order"
          :productIndex="index + 1"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
table {
  border-collapse: separate !important;
  border-spacing: 0;
}

.order-table {
  /* @apply border-b border-slate-300; */
  @apply w-full;
}

.order-table thead {
  /* @apply bg-slate-200 rounded-t-lg; */
}

.order-table thead th {
  @apply text-slate-800 text-base font-bold p-3 text-left last:text-center border-b border-slate-300;
}

.order-table tbody {
  @apply bg-white rounded-t-lg text-slate-500;
}
</style>
