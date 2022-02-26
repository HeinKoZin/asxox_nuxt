<template>
  <div class="promotion-container-wrapper">
    <div class="promotion-container">
      <div class="promotion-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon class="shopping-icon" :icon="['fas', 'gift']" />
          </span>
          <span>Promotion</span>
        </div>
      </div>
      <div class="promotion-content">
        <div class="promotion-item">
          <span>Promotion Code:</span>
          <span>HEIN</span>
        </div>
        <div class="promotion-item">
          <span>Promotion Amount:</span>
          <span>20000 MMK</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.promotion-container-wrapper {
  @apply w-1/2 p-1 flex font-quicksand;
}

.promotion-container {
  @apply w-full h-full flex flex-col gap-y-2 border border-slate-300 p-10 rounded-lg justify-center;
}

.promotion-title {
  @apply text-slate-800 text-xl font-bold font-quicksand border-b border-slate-300 py-2;
}
</style>
