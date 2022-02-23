<template>
  <div class="customer-info-container">
    <div class="header">Your Info</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.customer-info-container {
  @apply w-3/4 flex flex-col gap-y-2;
}

.header {
  @apply text-slate-800 text-3xl font-bold font-quicksand;
}
</style>
