<template>
  <div class="w-full h-full bg-[#f5f5f5]">
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
      <Chat />
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
  @apply mt-16 md:mt-32 ml-0  min-h-[calc(100%-8rem)]   w-full md:w-full  items-start mx-auto;
}

.main-content {
  @apply w-full md:w-[90%] 2xl:w-[80%] mx-auto;
}
</style>
