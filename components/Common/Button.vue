<template>
  <button :class="'btn ' + variant">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    variant: String,
  },
  data() {
    return {
      classes: "hello",
    };
  },
};
</script>

<style lang="postcss" scoped>
.btn {
  @apply h-12 bg-inherit;
}
.primary {
  @apply p-2 mt-5 bg-orange-600 uppercase rounded-lg text-white;
}
.secondary {
  @apply p-2 mt-5 bg-gray-200 uppercase rounded-lg text-gray-600;
}
</style>
