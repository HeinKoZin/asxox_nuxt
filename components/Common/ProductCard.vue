<template>
  <div class="product-card-container">
    <div class="card-header">
      <img
        class="card-header-image"
        src="https://wp.asxox.com.mm/wp-content/uploads/2021/11/HONEST-Pen-Spray-Gun-Jet-Butane-Candle-Lighter-Metal-Gas-Kitchen-Welding-Torch-Turbo-Windproof-Cigar.jpg"
      />
      <h3 class="card-header-title my-2">
        Lazor Ge s df dfd fd wer ytr wwr wwe see ee rea er yrt as
      </h3>
      <p class="line-clamp-3 text-slate-500">This is describe about product.</p>
      <div class="mt-5">
        <span class="text-orange-500">$</span>
        <span class="text-orange-500">100</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  methods: {
    //
  },
  computed: {
    //
  },
  mounted() {
    //
  },
};
</script>

<style lang="postcss" scoped>
.product-card-container {
  @apply p-4 rounded-lg bg-white w-48 h-auto;
}

.card-header {
}

.card-header .card-header-image {
  @apply w-full h-auto object-cover rounded-lg;
}

.card-header .card-header-title {
  @apply text-base font-semibold line-clamp-2;
}
</style>
