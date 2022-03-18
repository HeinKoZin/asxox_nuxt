<template>
  <button :class="'btn ' + variant + ' ' + size" :disabled="disabled">
    <slot name="loader" class="loader"></slot>
    <slot name="start-icon" class="start-icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    variant: String,
    size: String,
    disabled: Boolean,
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
  @apply h-12  bg-white uppercase flex justify-center items-center;
}
.primary {
  @apply bg-orange-600  rounded-lg text-white;
}
.secondary {
  @apply bg-gray-200  rounded-lg text-gray-600;
}

.blue-primary {
  @apply bg-blue-500 text-white p-2 px-4 rounded-lg;
}

.sm {
  @apply h-8 text-sm;
}

.md {
  @apply h-10 text-base;
}

.lg {
  @apply h-14 text-lg;
}

.btn:disabled {
  @apply cursor-not-allowed bg-gray-200 text-gray-600;
}

.start-icon {
  @apply mr-2;
}

.loader {
  @apply mr-1;
}
</style>
