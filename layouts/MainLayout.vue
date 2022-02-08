<template>
  <div class="w-full h-full bg-slate-200">
    <Header />
    <div
      class="flex w-full h-[calc(100%-4rem)] flex-col-reverse md:flex-row relative"
    >
      <SideBar />
      <div class="main-layout">
        <Nuxt />
      </div>
      <Cart />
    </div>
    <FabCartButton />
  </div>
</template>

<script>
export default {
  data() {
    return {
      //
    };
  },
  methods: {},
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
  @apply mt-16 ml-0 md:ml-[4.4rem]  min-h-[calc(100%-4rem)]  w-full md:w-[calc(100%_-_4rem)]  items-start;
}
</style>
