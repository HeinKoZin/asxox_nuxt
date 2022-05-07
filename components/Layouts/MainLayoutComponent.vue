<template>
  <div class="w-full h-full bg-slate-200">
    <Header />

    <div
      class="flex w-full h-[calc(100%-8rem)] flex-col-reverse md:flex-row relative backdrop-filter"
    >
      <SideBar />
      <div class="main-layout">
        <!-- <nuxt v-if="!$slots.profilelayout" /> -->
        <div class="main-content">
          <slot />
        </div>
        <Footer v-if="checkRoute()" />
      </div>
      <Cart />
    </div>
    <!-- <FabCartButton /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  methods: {
    checkRoute() {
      return this.$nuxt.$route.name === "product-id" ? false : true;
    },
  },
  computed: {
    //
  },
  mounted() {
    //
  },
};
</script>

<style lang="postcss" scoped>
.main-layout {
  @apply mt-16 md:mt-32 ml-0  min-h-[calc(100%-8rem)]   w-full md:w-full  items-start;
}

.main-content {
  @apply w-full md:w-[90%] lg:w-[80%] mx-auto;
}
</style>
