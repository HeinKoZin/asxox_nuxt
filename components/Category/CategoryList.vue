<template>
  <div class="w-full px-2 lg:p-0">
    <div class="w-full py-4 text-2xl font-bold">
      <h3 class="text-base lg:text-lg 2xl:text-xl">Featured Categories</h3>
    </div>
    <div class="grid w-full grid-col-1 xl:grid-cols-3 gap-4">
      <!-- {{ categories }} -->
      <CategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :category="category"
        v-show="index < 3"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
