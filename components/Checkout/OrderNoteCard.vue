<template>
  <div class="order-note-container-wrapper">
    <div class="order-note-container">
      <div class="order-note-title">
        <span>
          <font-awesome-icon class="icon" :icon="['fas', 'sticky-note']" />
        </span>
        <span>Order Note</span>
      </div>
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
  @apply w-full flex flex-col gap-y-2 border border-slate-300 p-5 md:p-10 rounded-lg;
}

.order-note-container textarea {
  @apply w-full h-64  outline-none min-h-[16rem] placeholder:text-slate-700 border border-slate-300 p-2 rounded-lg;
}

.order-note-container .order-note-title {
  @apply text-slate-800 text-base md:text-lg font-bold font-quicksand  py-2 flex gap-x-2;
}
</style>
