<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slidable-items">
        <div
          :class="'slidable-items-wrapper ' + (isScroll ? '' : 'scroll-smooth')"
          ref="slidableItems"
          @mouseover="pauseSlider"
          @mouseleave="playSlider"
          v-dragscroll
        >
          <SlidableItem
            v-for="(product, index) in products"
            :key="index"
            @click.native="setSlideItem(product)"
            :image="product.photo"
            :isActive="selectImage.currentPosition === index ? true : false"
          />
        </div>
      </div>
      <div
        class="slider-items"
        v-touch:swipe.left="leftSwipeHandler"
        v-touch:swipe.right="rightSwipeHandler"
      >
        <SliderItem :image="selectImage.image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    // Change slide item
    changeSliderItem(action) {
      if (action === "next") {
        if (this.selectImage.currentPosition < this.products.length - 1) {
          this.selectImage.currentPosition++;
        } else {
          this.selectImage.currentPosition = 0;
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
      this.selectImage.currentPosition = this.products.indexOf(product);
      this.selectImage.image = product.photo;

      // Note: scroll to current slide item in center of screen
      this.$refs.slidableItems.scrollLeft =
        this.$refs.slidableItems.scrollWidth *
          (this.selectImage.currentPosition / this.products.length) -
        this.$refs.slidableItems.clientWidth / 2;
    },

    //  Note: change slide item in every 3 seconds

    changeSliderItemWithTimer() {
      this.sliderInterval = setInterval(() => {
        this.changeSliderItem("next");
      }, 3000);
    },

    pauseSlider() {
      this.isScroll = true;
      clearInterval(this.sliderInterval);
    },

    playSlider() {
      this.isScroll = false;
      this.changeSliderItemWithTimer();
    },

    leftSwipeHandler() {
      this.changeSliderItem("next");
    },
    rightSwipeHandler() {
      this.changeSliderItem("prev");
    },
  },
  computed: {
    test() {
      // console.log(this.products);
      // if (this.products[1]) this.products[0].photo;
    },
  },
  mounted() {
    // this.selectImage.image = this.products[0].photo;

    // this.selectImage.currentPosition = 0;

    // NOTE: slide items every 3 s
    this.changeSliderItemWithTimer();
  },
};
</script>

<style lang="postcss" scoped>
.slider-container {
  @apply w-full relative mb-20 md:mb-0;
}

.slider-container .slider-wrapper {
  @apply w-full;
}

.slider-container .slidable-items {
  @apply w-full absolute  -bottom-20 md:bottom-0 z-30 bg-gradient-to-t from-slate-200 via-slate-300;
}

.slider-container .slider-items {
  @apply w-full;
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
