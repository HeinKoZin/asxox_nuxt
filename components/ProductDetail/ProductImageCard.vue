<template>
  <div class="product-image-card">
    <div class="video-play-style" ref="videoIcon">
      <i class="fa-solid fa-circle-play icon" v-if="this.isVideo"></i>
    </div>
    <nuxt-img
      format="webp"
      quality="50"
      loading="lazy"
      :src="this.checkImageOrVideo"
      ref="productImageRef"
    />
  </div>
</template>

<script>
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      //
      isVideo: false,
    };
  },

  computed: {
    //
    checkImageOrVideo() {
      if (this.photo.includes("youtube")) {
        const videoId = this.photo.split("/")[4];
        const ampersandPosition = videoId.indexOf("&");
        if (ampersandPosition !== -1) {
          videoId.slice(0, ampersandPosition);
        }

        this.isVideo = true;
        return `https://img.youtube.com/vi/${videoId}/0.jpg`;
      } else {
        this.isVideo = false;
        return this.photo;
      }
    },
  },

  mounted() {
    let imageHeight = this.$refs.productImageRef.clientHeight;
    if (this.isVideo) {
      this.$refs.videoIcon.style.height = `${imageHeight}px`;
    }
  },
};
</script>

<style lang="postcss" scoped>
.product-image-card {
  @apply min-w-[45%] max-w-[45%] md:min-w-[26%] md:max-w-[26%]  rounded-lg relative;
}

.video-play-style {
  @apply absolute top-0 left-0 w-full  flex justify-center items-center;
}

.video-play-style .icon {
  @apply text-white text-4xl;
}

.product-image-card img {
  @apply w-full h-auto object-cover rounded-lg pointer-events-none;
}
</style>
