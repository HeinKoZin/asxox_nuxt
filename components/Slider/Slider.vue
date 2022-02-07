<template>
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slidable-items">
        <div
          class="slidable-items-wrapper"
          ref="slidableItems"
          @wheel.prevent="scrollWithWheel($event)"
        >
          <SlidableItem
            v-for="(product, index) in products"
            :key="index"
            @click.native="setSlideItem(product)"
          />
        </div>
      </div>
      <div class="slider-items">
        <SliderItem :image="selectImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
      slidableItemsCount: this.$refs?.slidableItems?.childElementCount,
      products: [
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/05/29/ads/29-05-2021_Asxox_460b1d14fa7bd84.72902738.jpg",
          title: "Hair Scope Alabaster",
        },
        {
          image:
            "https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2022/01/29/products/feature/29-01-2022_Asxox_461f5034b333e30.38241242.jpg",
          title: "Hair Scope Alabaster",
        },
      ],
      selectImage: null,
    };
  },
  methods: {
    scrollWithWheel(e) {
      if (e.deltaY > 0) {
        this.$refs.slidableItems.scrollLeft += 100;
      } else {
        this.$refs.slidableItems.scrollLeft -= 100;
      }
    },

    // NOTE: Get current slidable item
    setSlideItem(product) {
      this.selectImage = product.image;
    },

    // Set slide item
  },
  computed: {},
  mounted() {
    this.selectImage = this.products[0].image;
  },
};
</script>

<style lang="postcss" scoped>
.slider-container {
  @apply w-full relative;
}

.slider-container .slider-wrapper {
  @apply w-full;
}

.slider-container .slidable-items {
  @apply w-full absolute bottom-0 z-40;
}

.slider-container .slider-items {
  @apply w-full;
}

.slider-container .slidable-items .slidable-items-wrapper {
  @apply w-full h-auto  bg-gradient-to-t from-white via-slate-300 flex pt-10 overflow-x-scroll rounded-tl-3xl px-2;
}

.slider-container .slidable-items .slidable-items-wrapper::-webkit-scrollbar {
  @apply h-2;
}

.slider-container
  .slidable-items
  .slidable-items-wrapper::-webkit-scrollbar-thumb {
  @apply bg-slate-400 rounded-md;
}
</style>
