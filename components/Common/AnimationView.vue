<template>
  <div class="animation-container">
    <slot></slot>
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
    //
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
.animation-container {
  @apply w-full   flex justify-center items-center overflow-hidden relative;
}
</style>
