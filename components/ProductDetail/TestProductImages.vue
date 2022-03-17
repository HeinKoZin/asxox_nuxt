<template>
  <div class="product-images-container">
    <div class="header">Product Images</div>
    <div class="body">
      <img
        src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/05/29/products/description/29-05-2021_Asxox_460b1bd00a95999.99799988.jpg"
        alt=""
      />
      <img
        src=" https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/05/29/products/description/29-05-2021_Asxox_460b1bd00b6ffb3.89555814.jpg"
        alt=""
      />
      <img
        src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/11/15/products/description/15-11-2021_Asxox_4619236239b57b0.51292120.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
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
