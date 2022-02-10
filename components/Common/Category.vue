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
  @apply flex p-2 px-4 rounded-md border border-slate-400   text-sm md:text-base font-comfortaa;
}
.active {
  @apply bg-orange-600 text-white;
}

.category .icon {
  @apply text-lg mr-2 text-slate-500;
}

.category.active .icon {
  @apply text-white;
}
</style>
