<template>
  <Teleport>
    <div class="product-images-modal-container">
      <button class="modal-close-btn">
        <span><font-awesome-icon class="icon" :icon="['fas', 'times']" /></span>
      </button>
      <div class="photos-slide-btn-group">
        <button class="photos-slide-btn" @click="prevPhoto()">
          <font-awesome-icon class="icon" :icon="['fas', 'angle-left']" />
        </button>
        <button class="photos-slide-btn" @click="nextPhoto()">
          <font-awesome-icon class="icon" :icon="['fas', 'angle-right']" />
        </button>
      </div>
      <div class="product-images-modal-wrapper">
        <div class="product-image-container">
          <img :src="photos[currentPhotoIndex].image" alt="" srcset="" />
        </div>
        <!-- Photo count of counts -->
        <div class="label-container">
          <h5>
            Photo <span>{{ currentPhotoIndex + 1 }}</span>
          </h5>
          <div class="label-number">
            <span>{{ currentPhotoIndex + 1 }}</span>
            <span>/</span>
            <span>{{ photos.length }}</span>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import Button from "../Common/Button.vue";
export default {
  components: { Button },

  data() {
    return {
      //
      currentPhotoIndex: 0,
      photos: [
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/02/10/products/feature/10-02-2022_Asxox_46204e7319bf317.66596257.jpg",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
        },
      ],
    };
  },

  methods: {
    // Next photo
    nextPhoto() {
      this.currentPhotoIndex++;
      if (this.currentPhotoIndex > this.photos.length - 1) {
        this.currentPhotoIndex = 0;
      }
    },
    prevPhoto() {
      this.currentPhotoIndex--;
      if (this.currentPhotoIndex < 0) {
        this.currentPhotoIndex = this.photos.length - 1;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-images-modal-container {
  @apply flex w-screen h-[calc(100vh_-_4rem)] bg-black bg-opacity-70  top-16 left-0 fixed z-50 justify-center items-center;
}

.product-images-modal-container .product-images-modal-wrapper {
  @apply w-3/4 h-auto   relative;
}

.product-image-container {
  @apply max-w-xl mx-auto h-auto;
}

.label-container {
  @apply flex flex-col justify-between items-center;
}

.label-container h5 {
  @apply text-white text-xl mt-1 font-bold font-quicksand;
}

.label-container .label-number {
  @apply flex flex-row justify-center items-center px-4  py-1 bg-slate-50 rounded-full font-semibold  font-quicksand text-slate-500 gap-x-2 mt-2;
}

.label-number span {
  @apply first:text-slate-900 first:font-bold;
}

.modal-close-btn {
  @apply absolute top-0 right-0 mt-4 mr-8 text-slate-50 text-3xl;
}

.photos-slide-btn-group {
  @apply flex flex-row justify-between items-center absolute gap-x-2 min-w-[80%] my-auto text-slate-50 text-4xl;
}

.photos-slide-btn-group button {
  @apply px-2 py-4 flex gap-x-3 bg-slate-600 text-white rounded-lg;
}
</style>
