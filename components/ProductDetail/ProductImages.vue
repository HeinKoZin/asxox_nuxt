<template>
  <div class="product-images-container">
    <div class="header">Product Images</div>
    <div class="body">
      <div
        class="product-images-wrapper"
        ref="productImagesWrapper"
        v-dragscroll
      >
        <ProductImageCard
          v-for="(description_photo, index) in description_photos"
          :key="index"
          :photo="description_photo.photo"
          @click.native="openModal(index)"
        />
      </div>
    </div>

    <ProductImagesModal
      :currentIndex="currentPhotoIndex"
      :photos="description_photos"
      v-if="isShowModal"
      @closeModal="closeModal()"
    />
  </div>
</template>

<script>
export default {
  props: ["description_photos"],
  data() {
    return {
      isShowModal: false,
      currentPhotoIndex: 0,
    };
  },

  methods: {
    openModal(index) {
      this.currentPhotoIndex = index;
      this.isShowModal = true;
    },

    closeModal(value) {
      this.isShowModal = value;
    },

    leftSwipeHandler() {
      this.$refs.productImagesWrapper.scrollLeft += 200;
    },

    rightSwipeHandler() {
      this.$refs.productImagesWrapper.scrollLeft -= 200;
    },
  },
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
  @apply w-full cursor-auto;
}

.product-images-wrapper {
  @apply flex  gap-4 overflow-hidden overflow-x-scroll p-4;
}

.product-images-wrapper::-webkit-scrollbar {
  @apply hidden;
}
</style>
