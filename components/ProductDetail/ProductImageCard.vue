<template>
  <div class="product-image-card">
    <img
      src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/10/products/feature/10-02-2022_Asxox_46204e7319bf317.66596257.jpg"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.product-image-card {
  @apply md:min-w-[26%] md:max-w-[26%] w-full h-full  rounded-lg;
}

.product-image-card img {
  @apply w-full h-auto object-cover rounded-lg;
}
</style>
