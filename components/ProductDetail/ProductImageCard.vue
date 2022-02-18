<template>
  <div class="product-image-card">
    <img :src="photo" />
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-image-card {
  @apply min-w-[45%] max-w-[45%] md:min-w-[26%] md:max-w-[26%]  rounded-lg;
}

.product-image-card img {
  @apply w-full h-auto object-cover rounded-lg pointer-events-none;
}
</style>
