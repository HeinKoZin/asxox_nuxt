<template>
  <div class="order-note-container-wrapper">
    <div class="order-note-container">
      <div class="order-note-title">Order Note</div>
      <textarea class="order-note" placeholder="Note here..."></textarea>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.order-note-container-wrapper {
  @apply w-full p-1 font-quicksand;
}
.order-note-container {
  @apply w-full flex flex-col gap-y-2  border border-slate-300 p-10 rounded-lg;
}

.order-note-container textarea {
  @apply w-full h-64 border-none outline-none min-h-[16rem];
}

.order-note-container .order-note-title {
  @apply text-slate-800 text-xl font-bold font-quicksand border-b border-slate-300 py-2;
}
</style>
