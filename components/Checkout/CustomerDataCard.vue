<template>
  <div class="customer-data-container-wrapper">
    <div class="customer-data-container">
      <div class="customer-data-title">
        <div class="flex gap-x-2">
          <span>
            <font-awesome-icon class="shopping-icon" :icon="['fas', 'user']" />
          </span>
          <span>Customer Info</span>
        </div>
        <!-- <div>
          <button>
            <font-awesome-icon class="icon" :icon="['fas', 'edit']" />
            Edit
          </button>
        </div> -->
      </div>
      <div class="customer-data-content">
        <div class="customer-data-item">
          <span>Name:</span>
          <span>Hein</span>
        </div>
        <div class="customer-data-item">
          <span>Phone:</span>
          <span>09950668891</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.customer-data-container-wrapper {
  @apply w-1/2 p-1 font-quicksand;
}

.customer-data-container {
  @apply w-full flex flex-col gap-y-2 border border-slate-300  p-10 rounded-lg;
}

.customer-data-title {
  @apply text-slate-800 text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}
</style>
