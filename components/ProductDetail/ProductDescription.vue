<template>
  <div class="product-description-container">
    <div class="header">Description</div>
    <div class="body">This is description of product.</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.product-description-container {
  @apply flex w-full bg-slate-50 border border-slate-300 rounded-lg flex-col;
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 p-2 font-quicksand font-bold;
}

.body {
  @apply w-full p-2;
}
</style>
