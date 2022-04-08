<template>
  <div class="categories-page-container">
    <div class="categories-page-header">
      <div>
        <img
          src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/08/06/category/image/06-08-2021_Asxox_4610c9d17e5b049.02990017.png"
          alt=""
        />
      </div>
    </div>
    <h2>Category</h2>
  </div>
</template>

<script>
export default {
  layout: "MainLayout",
};
</script>

<style lang="postcss" scoped>
.categories-page-container {
  @apply w-full h-full flex;
}

.categories-page-container .categories-page-header {
  @apply flex justify-center items-center h-16 bg-slate-600;
}
</style>
