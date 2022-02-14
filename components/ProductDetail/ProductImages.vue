<template>
  <div class="product-images-container">
    <div class="header">Product Images</div>
    <div
      class="body"
      v-touch:swipe.left="leftSwipeHandler"
      v-touch:swipe.right="rightSwipeHandler"
    >
      <div
        class="product-images-wrapper"
        ref="productImagesWrapper"
        @wheel.prevent="scrollWithWheel($event)"
      >
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
        <ProductImageCard />
      </div>
    </div>

    <ProductImagesModal />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowModal: false,
    };
  },

  methods: {
    //

    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },

    scrollWithWheel(e) {
      if (e.deltaY > 0) {
        this.$refs.productImagesWrapper.scrollLeft += 100;
      } else {
        this.$refs.productImagesWrapper.scrollLeft -= 100;
      }
    },

    leftSwipeHandler() {
      this.$refs.productImagesWrapper.scrollLeft += 100;
    },

    rightSwipeHandler() {
      this.$refs.productImagesWrapper.scrollLeft -= 100;
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-images-container {
  @apply flex w-full bg-slate-50 border border-slate-300 rounded-lg flex-col;
}

.header {
  @apply flex w-full bg-slate-50 border-b rounded-t-lg border-slate-300 p-2;
}

.body {
  @apply w-full;
}

.product-images-wrapper {
  @apply flex  gap-4 overflow-hidden overflow-x-scroll p-4;
}

.product-images-wrapper::-webkit-scrollbar {
  @apply hidden;
}
</style>
