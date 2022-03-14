<template>
  <div class="model-box-container-wrapper">
    <div class="model-box-container">
      <div class="model-box-icon">
        <i class="fa-solid fa-check" v-if="!isLoader"></i>
        <i class="fa-solid fa-circle-notch animate-spin" v-if="isLoader"></i>
      </div>
      <div class="model-box-content">
        <h3>{{ content ? content : "Loading..." }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoader: {
      type: Boolean,
      default: false,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="postcss" scoped>
.model-box-container-wrapper {
  @apply w-full h-full flex justify-center items-center fixed top-0 left-0 z-50;
}

.model-box-container {
  @apply p-4 px-10  flex flex-col items-center justify-center bg-orange-500 text-white rounded-lg border border-slate-300;
}

.model-box-content {
  @apply font-quicksand text-sm md:text-base lg:text-lg py-2;
}

.model-box-icon {
  @apply text-lg md:text-xl lg:text-2xl;
}
</style>
