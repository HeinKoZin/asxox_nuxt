<template>
  <div class="slidable-item">
    <div class="img-wrapper">
      <img
        src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/05/29/ads/29-05-2021_Asxox_460b1d14fa7bd84.72902738.jpg"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.slidable-item {
  @apply min-w-[15%] max-w-[15%] h-auto object-cover object-center p-2;
}

.slidable-item .img-wrapper {
  @apply w-full overflow-hidden rounded-md;
}

.slidable-item img {
  @apply w-full h-auto object-cover object-center rounded-md hover:scale-110 transition-transform;
}
</style>
