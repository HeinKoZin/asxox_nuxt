<template>
  <div class="product-images-container">
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
          v-for="(photo, index) in photos"
          :key="index"
          :photo="photo"
          @click.native="isDrag ? null : openModal(index)"
        />
      </div>
    </div>

    <ProductImagesModal
      :currentIndex="currentPhotoIndex"
      :photos="photos"
      v-if="isShowModal"
      @closeModal="closeModal()"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowModal: false,
      isDrag: false,

      currentPhotoIndex: 0,
      photos: [
        "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/16/products/description/16-02-2022_Asxox_4620c81a88e95c3.54638706.jpg",
        "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/10/products/feature/10-02-2022_Asxox_46204e7319bf317.66596257.jpg",
        "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
        "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/11/13/products/feature/13-11-2021_Asxox_4618f41f811c9c7.80369118.jpg",
      ],
    };
  },

  methods: {
    //

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
