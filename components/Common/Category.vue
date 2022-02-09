<template>
  <button class="category">
    <span><font-awesome-icon :icon="['fas', 'cog']" class="icon" /></span>
    <span>Settings</span>
  </button>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.category {
  @apply flex p-2 px-4 rounded-full border border-slate-400 bg-slate-100  text-sm md:text-base font-comfortaa;
}
.active {
  @apply bg-white;
}

.category .icon {
  @apply text-lg mr-2 text-orange-600;
}
</style>
