<template>
  <div class="product-images-modal-container" @click.self="closeModal()">
    <button class="modal-close-btn" @click="closeModal()">
      <span><i class="fa-solid fa-xmark icon"></i></span>
    </button>
    <div class="photos-slide-btn-group">
      <button class="photos-slide-btn" @click="prevPhoto()">
        <i class="fa-solid fa-angle-left icon"></i>
      </button>
      <button class="photos-slide-btn" @click="nextPhoto()">
        <i class="fa-solid fa-angle-right icon"></i>
      </button>
    </div>
    <div
      class="product-images-modal-wrapper"
      v-touch:swipe.left="leftSwipeHandler"
      v-touch:swipe.right="rightSwipeHandler"
      @keyup.esc="test('left')"
      @keydown.right="test('right')"
      @click.self="closeModal()"
    >
      <!-- <div class="product-image-container">
        <img :src="photos[currentPhotoIndex].photo" alt="" srcset="" />
         -->
      <div class="product-image-container" v-if="!this.isVideo">
        <nuxt-img
          format="webp"
          quality="50"
          loading="lazy"
          :src="this.checkImageOrVideo"
          alt=""
          srcset=""
        />
      </div>
      <div class="product-video-container" v-if="this.isVideo">
        <iframe
          :src="this.checkImageOrVideo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          width="100%"
          height="100%"
        />
      </div>
      <!-- Photo count of counts -->
      <div class="label-container" @click.self="closeModal()">
        <h5 v-if="!isVideo">
          Photo <span>{{ currentPhotoIndex + 1 }}</span>
        </h5>
        <h5 v-if="isVideo">Sample Video</h5>
        <div class="label-number">
          <span>{{ currentPhotoIndex + 1 }}</span>
          <span>/</span>
          <span>{{ photos.length }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../Common/Button.vue";
export default {
  components: { Button },

  props: {
    photos: {
      type: Array,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      //
      currentPhotoIndex: this.currentIndex,

      isVideo: false,
    };
  },

  methods: {
    // Close modal
    closeModal() {
      this.$emit("closeModal", false);
    },
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

    leftSwipeHandler() {
      this.nextPhoto();
    },
    rightSwipeHandler() {
      this.prevPhoto();
    },
    keyUpHandler(e) {
      if (e.key === "ArrowRight") this.nextPhoto();
      if (e.key === "ArrowLeft") this.prevPhoto();
    },
  },
  mounted() {
    window.addEventListener(
      "keydown",
      (e) => {
        this.keyUpHandler(e);
      },
      true
    );
  },
  beforeDestroy() {
    window.removeEventListener(
      "keydown",
      (e) => {
        this.keyUpHandler(e);
      },
      true
    );
  },

  computed: {
    //
    checkImageOrVideo() {
      this.isVideo = this.photos[this.currentPhotoIndex].photo.includes(
        "youtube"
      )
        ? true
        : false;
      return this.photos[this.currentPhotoIndex].photo;
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
  @apply max-w-sm md:max-w-xl max-h-full mx-auto;
}

.product-image-container img {
  @apply object-cover w-auto mx-auto max-h-[calc(100vh_-_4rem_-_5rem)];
}

.product-video-container {
  @apply max-w-sm md:max-w-6xl aspect-[16/9] max-h-full mx-auto;
}

.product-video-container iframe {
  @apply mx-auto aspect-[16/9];
}

.label-container {
  @apply flex flex-col justify-between items-center;
}

.label-container h5 {
  @apply text-white text-base md:text-xl mt-1 font-bold font-quicksand;
}

.label-container .label-number {
  @apply flex flex-row justify-center items-center px-4  py-1 bg-slate-50 rounded-full font-semibold  font-quicksand text-slate-500 gap-x-2 mt-2;
}

.label-number span {
  @apply first:text-slate-900 first:font-bold;
}

.modal-close-btn {
  @apply absolute top-0 right-0 mt-4 mr-8 text-slate-50 text-2xl md:text-3xl;
}

.photos-slide-btn-group {
  @apply flex flex-row justify-between items-center absolute gap-x-2 min-w-[90%] md:min-w-[80%] my-auto  text-slate-50 text-2xl md:text-4xl z-50;
}

.photos-slide-btn-group button {
  @apply px-2 py-4 flex gap-x-3 bg-slate-600 text-white rounded-lg active:bg-slate-500;
}
</style>
