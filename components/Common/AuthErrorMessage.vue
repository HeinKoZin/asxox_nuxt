<template>
  <div class="auth-error-message">
    <span class="h-6 w-6 mr-1"
      ><font-awesome-icon
        :icon="['fas', 'exclamation-triangle']"
        class="w-full h-full"
    /></span>
    <slot></slot>
  </div>
</template>
<style lang="postcss" scoped>
.auth-error-message {
  @apply text-white w-full font-bold py-2 px-3 text-base mb-4 bg-red-500 rounded-lg flex  items-center;
}
</style>