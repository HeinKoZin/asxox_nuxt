<template>
  <div class="flex w-full bg-white shadow-sm rounded flex-col gap-0">
    <div class="header">Recommended Products</div>
    <div
      class="body"
      v-on:dragscrollstart="dragStartListener"
      v-on:dragscrollend="dragEndListener"
      v-dragscroll
      v-if="recommendedProducts && !$fetchState.pending"
    >
      <ProductCard
        :data="data"
        v-for="(data, index) in recommendedProducts"
        :key="index"
        isAdsProduct
        @click.native="
          isDrag
            ? null
            : $router.push(`/product/${$asxox.asxox_encode(data.id)}`)
        "
      />
    </div>
    <div class="body" v-if="$fetchState.pending">
      <div
        class="min-w-[60%] max-w-[60%] md:min-w-[33.33%] md:max-w-[33.33%] xl:min-w-[20%] xl:max-w-[20%] h-80 p-1"
        v-for="i in 10"
        :key="i"
      >
        <Skeleton width="100%" height="100%" />
      </div>
    </div>
    <div class="body" v-if="recommendedProducts.length < 0">
      <div class="w-full h-80 flex justify-center items-center">
        <p class="text-center text-slate-600">No Recommended Products</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Skeleton } from "vue-loading-skeleton";

export default {
  // props: {
  //   products: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  components: {
    Skeleton,
  },

  methods: {
    ...mapActions(["getRecommendedProducts"]),

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

  computed: {
    ...mapGetters(["recommendedProducts"]),
  },

  async fetch() {
    await this.getRecommendedProducts();
  },
};
</script>

<style lang="postcss" scoped>
.recommended-products-container {
  @apply flex w-full bg-white rounded flex-col gap-0;
}

.header {
  @apply flex w-full h-12 items-center p-2 font-quicksand text-base text-orange-500  md:text-lg font-bold;
}

.body {
  @apply w-full overflow-x-scroll overflow-hidden flex p-2 bg-orange-100;
}

.body::-webkit-scrollbar {
  @apply hidden;
}
</style>
