<template>
  <div class="recommended-products-container">
    <div class="header">Recommended Products</div>
    <div
      class="body"
      v-on:dragscrollstart="dragStartListener"
      v-on:dragscrollend="dragEndListener"
      v-dragscroll
    >
      <ProductCard
        :data="data"
        v-for="(data, index) in products"
        :key="index"
        isAdsProduct
        @click.native="
          isDrag
            ? null
            : $router.push(`/product/${$asxox.asxox_encode(data.id)}`)
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    // NOTE: drag start listener
    dragStartListener(e) {
      this.isScroll = true;
      this.isDrag = true;
    },

    // NOTE: drag end listener
    dragEndListener(e) {
      this.isScroll = false;
      setTimeout(() => {
        this.isDrag = false;
      }, 50);
    },
  },
};
</script>

<style lang="postcss" scoped>
.recommended-products-container {
  @apply flex w-full bg-slate-50 border border-slate-300 rounded-lg flex-col;
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 h-12 items-center px-2 font-quicksand text-base md:text-lg font-bold;
}

.body {
  @apply w-full overflow-x-scroll overflow-hidden flex p-2 bg-slate-100 rounded-lg;
}

.body::-webkit-scrollbar {
  @apply hidden;
}
</style>
