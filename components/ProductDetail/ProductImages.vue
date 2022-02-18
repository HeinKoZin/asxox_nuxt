<template>
  <div class="product-images-container" v-if="description_photos">
    <div class="header">Product Images</div>
    <div class="body">
      <div
        class="product-images-wrapper"
        ref="productImagesWrapper"
        v-on:dragscrollstart="dragStartListener"
        v-on:dragscrollend="dragEndListener"
        v-dragscroll
      >
        <ProductImageCard
          v-for="(description_photo, index) in description_photos"
          :key="index"
          :photo="description_photo.photo"
          @click.native="isDrag ? null : openModal(index)"
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
  props: { description_photos: Array },
  data() {
    return {
      isShowModal: false,
      isDrag: false,

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

    dragStartListener() {
      this.isDrag = true;
    },

    dragEndListener() {
      setTimeout(() => {
        this.isDrag = false;
      }, 50);
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
