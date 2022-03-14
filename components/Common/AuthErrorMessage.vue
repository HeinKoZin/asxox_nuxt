<template>
  <div class="auth-error-message">
    <span class="w-6 h-6 mr-1">
      <i class="w-full h-full fa-solid fa-triangle-exclamation"></i>
    </span>
    <slot></slot>
  </div>
</template>
<style lang="postcss" scoped>
.auth-error-message {
  @apply text-white w-full font-bold py-2 px-3 text-base mb-4 bg-red-500 rounded-lg flex  items-center;
}
</style>
