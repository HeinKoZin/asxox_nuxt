<template>
  <div class="slidable-item">
    <div class="img-wrapper" :class="{ active: isActive }">
      <nuxt-img format="webp" quality="50" loading="lazy" :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "isActive"],
};
</script>

<style lang="postcss" scoped>
.slidable-item {
  @apply min-w-[40%] max-w-[40%] lg:min-w-[15%] lg:max-w-[15%] h-auto object-cover object-center p-2;
}

.slidable-item .img-wrapper {
  @apply w-full overflow-hidden rounded-lg;
}

.slidable-item img {
  @apply w-full h-auto object-cover object-center  hover:scale-110 transition-transform;
}

.active {
  @apply border-4 border-orange-600;
}
</style>
