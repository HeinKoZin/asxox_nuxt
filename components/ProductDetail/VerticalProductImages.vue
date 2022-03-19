<template>
  <div class="product-images-container">
    <div class="header">Product Images</div>
    <div class="body">
      <img
        v-for="(description_photo, index) in description_photos"
        :key="index"
        :src="description_photo.photo"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: { description_photos: Array },
};
</script>

<style lang="postcss" scoped>
.product-images-container {
  @apply flex w-full bg-slate-50 border border-slate-300 rounded-lg flex-col;
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 p-2 font-quicksand font-bold;
}

.body {
  @apply w-full p-2 flex flex-col gap-y-2;
}

.body img {
  @apply w-full h-auto object-cover rounded-md;
}
</style>
