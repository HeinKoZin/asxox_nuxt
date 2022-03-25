<template>
  <div class="loading-page">
    <Spinner />
    <p class="animate-pulse">Loading...</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.loading-page {
  @apply w-full h-full flex flex-col justify-center items-center gap-2;
}

p {
  @apply text-center text-slate-900 text-lg font-semibold font-quicksand;
}
</style>
