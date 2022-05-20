<template>
  <div class="slider-item active">
    <div class="slider-item-info">
      <button>See Details</button>
    </div>
    <nuxt-img format="webp" quality="50" loading="lazy" :src="image" />
  </div>
</template>

<script>
export default {
  props: ["image"],
};
</script>

<style lang="postcss" scoped>
.slider-item {
  @apply w-full relative md:rounded-lg;
}

.slider-item .slider-item-info {
  @apply flex absolute w-full h-full  bg-opacity-60 justify-start items-center p-4 md:p-10 bg-gradient-to-r from-gray-700 via-transparent  md:rounded-lg;
}

.slider-item .slider-item-info button {
  @apply bg-slate-800 p-2 absolute px-3 md:p-3 md:px-6 text-base md:text-lg bg-opacity-75  top-1/2 text-white rounded-md hover:bg-slate-700;
}

.slider-item img {
  @apply w-full h-auto  object-cover object-center md:rounded-lg;
}
</style>
