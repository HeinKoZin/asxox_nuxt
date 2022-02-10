<template>
  <div class="category-bar-container" @wheel.prevent="scrollWithWheel($event)">
    <div class="category-bar-wrapper" ref="categoryContainer">
      <Category :class="'active'" />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // scroll with wheel
    scrollWithWheel(e) {
      if (e.deltaY > 0) {
        this.$refs.categoryContainer.scrollLeft += 100;
      } else {
        this.$refs.categoryContainer.scrollLeft -= 100;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.category-bar-container {
  @apply w-full h-16 my-5 relative z-20;
}

.category-bar-wrapper {
  @apply w-full overflow-x-scroll flex absolute p-4   gap-4;
}

.category-bar-wrapper::-webkit-scrollbar {
  @apply hidden;
}

.category-bar-wrapper::-webkit-scrollbar-thumb {
  @apply bg-slate-400 rounded-md;
}
</style>
