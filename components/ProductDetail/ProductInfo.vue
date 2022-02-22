<template>
  <div class="product-description-container">
    <div class="header">Product Information</div>
    <div class="body">
      <div>
        <span class="font-semibold">Brand: </span
        ><a href="#" class="font-bold text-blue-500 underline font-quicksand"
          >Asxox</a
        >
      </div>

      <div class="product-code">
        <p>Product code: <span>#74324545</span></p>
      </div>

      <div class="categories-container">
        <p>Categories:</p>

        <div class="categories">
          <a href="#">Fancy</a>
          <a href="#">Fancy</a>
          <a href="#">Fancy</a>
          <a href="#">Fancy</a>
        </div>
      </div>
    </div>
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
  @apply w-full p-2 flex flex-col gap-y-3;
}

.categories-container {
  @apply flex flex-col gap-y-2 w-full font-quicksand font-semibold;
}

.categories {
  @apply flex flex-wrap gap-2;
}

.categories a {
  @apply px-2 py-1 bg-slate-50 text-slate-800 border border-slate-300 text-sm rounded-full;
}

.product-code {
  @apply text-slate-800 font-bold text-base font-quicksand w-full;
}

.product-code span {
  @apply font-medium;
}
</style>
