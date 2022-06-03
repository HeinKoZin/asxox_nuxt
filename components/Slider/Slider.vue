<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slidable-items">
        <div
          :class="'slidable-items-wrapper ' + (isScroll ? '' : 'scroll-smooth')"
          ref="slidableItems"
          @mouseover="pauseSlider"
          @mouseleave="playSlider"
          v-on:dragscrollstart="dragStartListener"
          v-on:dragscrollend="dragEndListener"
          v-dragscroll
        >
          <SlidableItem
            v-for="(product, index) in products"
            :key="index"
            @click.native="isDrag ? null : setSlideItem(product)"
            :image="product.photo"
            :isActive="currentSlideIndex === index ? true : false"
          />
        </div>
      </div>
      <!-- NOTE: Old Slider code -->
      <!-- <div
        class="slider-items"
        v-touch:swipe.left="leftSwipeHandler"
        v-touch:swipe.right="rightSwipeHandler"
      >
        <SliderItem :image="selectImage.image" />
      </div> -->
      <vueper-slides
        @slide="setCurrentSlideIndex($event.currentSlide.index)"
        :slide-ratio="2 / 4"
        ref="slides"
        :duration="4000"
        :autoplay="true"
        :dragging-distance="50"
        :touchable="true"
      >
        <vueper-slide
          v-for="(slide, index) in products"
          :key="index"
          :image="slide.photo"
          link="#"
          :style="'background-color: #000; color:#fff; '"
          class="h-auto w-full"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  props: ["products"],
  data() {
    return {
      //
      slidableItemsCount: this.$refs?.slidableItems?.childElementCount,
      selectImage: {
        currentPosition: null,
        image: null,
      },
      sliderInterval: null,

      // isScroll
      isScroll: false,

      // isDrag
      isDrag: false,
      currentSlideIndex: 0,
    };
  },
  watch: {
    products: {
      handler() {
        this.selectImage.image = this.products[0]?.photo;
        this.selectImage.currentPosition = 0;
      },
      immediate: true,
    },
  },
  methods: {
    setCurrentSlideIndex(index) {
      this.currentSlideIndex = index;
    },
    // Change slide item
    changeSliderItem(action) {
      if (action === "next") {
        if (this.selectImage.currentPosition < this.products.length - 1) {
          this.selectImage.currentPosition++;
          // this.$refs.slides.next();
        } else {
          this.selectImage.currentPosition = 0;
          // this.$refs.slides.next();
        }
      } else if (action === "prev") {
        if (this.selectImage.currentPosition < 1) {
          this.selectImage.currentPosition = this.products.length - 1;
        } else {
          this.selectImage.currentPosition--;
        }
      }
      this.selectImage.image =
        this.products[this.selectImage.currentPosition].photo;

      // Note: scroll to current slide item in center of screen
      this.$refs.slidableItems.scrollLeft =
        this.$refs.slidableItems.scrollWidth *
          (this.selectImage.currentPosition / this.products.length) -
        this.$refs.slidableItems.clientWidth / 2;
    },

    scrollWithWheel(e) {
      if (e.deltaY > 0) {
        this.$refs.slidableItems.scrollLeft += 100;
      } else {
        this.$refs.slidableItems.scrollLeft -= 100;
      }
    },

    // Set slide item
    setSlideItem(product) {
      if (!this.isDrag) {
        this.$refs.slides.goToSlide(this.products.indexOf(product));
        this.selectImage.currentPosition = this.products.indexOf(product);
        this.selectImage.image = product.photo;

        // Note: scroll to current slide item in center of screen
        this.$refs.slidableItems.scrollLeft =
          this.$refs.slidableItems.scrollWidth *
            (this.selectImage.currentPosition / this.products.length) -
          this.$refs.slidableItems.clientWidth / 2;
      }
    },

    //  Note: change slide item in every 3 seconds

    changeSliderItemWithTimer() {
      this.sliderInterval = setInterval(() => {
        this.changeSliderItem("next");
      }, 3000);
    },

    pauseSlider() {
      clearInterval(this.sliderInterval);
    },

    playSlider() {
      this.changeSliderItemWithTimer();
    },

    leftSwipeHandler() {
      this.changeSliderItem("next");
    },
    rightSwipeHandler() {
      this.changeSliderItem("prev");
    },

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
  mounted() {
    // NOTE: slide items every 3 s
    this.changeSliderItemWithTimer();
  },
};
</script>

<style lang="postcss" scoped>
.slider-container {
  @apply w-full relative mb-20 md:mb-0 md:rounded-lg;
}

.slider-container .slider-wrapper {
  @apply w-full md:rounded-lg;
}

.slider-container .slidable-items {
  @apply w-full absolute  -bottom-20 md:bottom-0 z-30 bg-gradient-to-t from-slate-200 via-slate-300 md:rounded-lg;
}

.slider-container .slider-items {
  @apply w-full md:rounded-lg;
}

.slider-container .slidable-items .slidable-items-wrapper {
  @apply w-full h-auto   flex pt-5 md:pt-10 overflow-x-scroll rounded-tl-3xl px-2;
}

.slider-container .slidable-items .slidable-items-wrapper::-webkit-scrollbar {
  @apply hidden;
}

.slider-container
  .slidable-items
  .slidable-items-wrapper::-webkit-scrollbar-thumb {
  @apply bg-slate-400 rounded-md;
}
</style>
