<template>
  <div class="categories-page-container">
    <div class="categories-page-header">
      <!-- NOTE: Test Carousel -->
      <!-- <no-ssr>
        <carousel v-bind="options" @page-change="test">
          <slide class="slide-item">
            <img
              src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/08/06/category/image/06-08-2021_Asxox_4610c9d17e5b049.02990017.png"
              alt=""
            />
          </slide>
          <slide class="slide-item">
            <img
              src="https://asxox-production-space.nyc3.digitaloceanspaces.com/upload/2021/08/06/category/image/06-08-2021_Asxox_4610c9d17e5b049.02990017.png"
              alt=""
            />
          </slide>
        </carousel>
      </no-ssr> -->

      <h2>All Categories</h2>
    </div>
    <div class="categories-container">
      <div
        class="category-item-wrapper group"
        v-for="(category, index) in categories"
        :key="index"
      >
        <div class="category-item" @click="handleCategoryClick(category.id)">
          <h2>{{ category.name }}</h2>
          <div class="category-cover">
            <img :src="category.image" alt="" />
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap w-full"
        v-if="$fetchState.pending && !categories"
      >
        <Skeleton class="w-1/3 h-32 p-1" v-for="i in 6" :key="i" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { Skeleton } from "vue-loading-skeleton";

export default {
  layout: "MainLayout",

  components: {
    Skeleton,
  },

  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        perPage: 1,
        paginationEnabled: false,
      },
    };
  },

  computed: {
    ...mapGetters(["categories"]),
  },

  methods: {
    test(e) {
      console.log("test Cahnge ", e);
    },

    ...mapActions(["getCategories"]),

    handleCategoryClick(categoryId) {
      this.$router.push({ name: "categories-id", params: { id: categoryId } });
    },
  },

  async fetch() {
    await this.getCategories();
  },
};
</script>

<style lang="postcss" scoped>
.categories-page-container {
  @apply w-full pb-20 flex flex-col;
}

.categories-page-container .categories-page-header {
  @apply flex  items-center justify-center;
}

.categories-page-header h2 {
  @apply text-lg md:text-xl lg:text-2xl p-2 py-10 pb-8 font-quicksand text-slate-700 font-bold text-center;
}
.categories-container {
  @apply w-full flex flex-wrap p-1 lg:p-4;
}

.category-item-wrapper {
  @apply w-full md:w-1/3 lg:w-[33.33%] p-1;
}

.category-item {
  @apply w-full h-36 flex flex-col items-center justify-center bg-slate-300 text-slate-900 rounded-md  relative;
}

.category-item h2 {
  @apply lg:text-2xl h-full justify-center  font-quicksand text-lg text-white font-bold z-10 flex md:hidden md:group-hover:flex items-center bg-black w-full bg-opacity-40 rounded-md;
}

.category-item .category-cover {
  @apply w-full h-full absolute rounded-lg;
}

.category-cover img {
  @apply w-full h-full object-cover rounded-md;
}

.VueCarousel {
  @apply w-full h-full;
}

.slide-item {
  @apply w-full;
}

.slide-item img {
  @apply w-full;
}
</style>
