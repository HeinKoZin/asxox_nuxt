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
      <div class="customer-data-content" v-if="$auth.user">
        <div class="customer-data-item">
          <span>Name :</span>
          <span>{{ $auth.user.data.name }}</span>
        </div>
        <div class="customer-data-item" v-if="$auth.user.data.phone">
          <span>Phone :</span>
          <span>{{ $auth.user.data.phone }}</span>
        </div>
        <div class="customer-data-item" v-if="$auth.user.data.email">
          <span>Email :</span>
          <span>{{ $auth.user.data.email }}</span>
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
  @apply w-full p-1 font-quicksand flex flex-grow;
}

.customer-data-container {
  @apply w-full flex flex-col gap-y-2 border border-slate-300 p-5 md:p-10 rounded-lg justify-center flex-grow;
}

.customer-data-title {
  @apply text-slate-800 text-base md:text-lg flex justify-between font-bold font-quicksand border-b border-slate-300 py-2 items-center;
}

.customer-data-content {
  @apply flex flex-col gap-y-1;
}

.customer-data-item {
  @apply font-semibold text-sm md:text-base;
}

.customer-data-item span {
  @apply text-slate-600 last:text-slate-900;
}
</style>
