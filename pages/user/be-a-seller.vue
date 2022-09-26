<template>
  <div class="container">
    <div class="header"></div>
    <div class="body">
      <UserBeASeller />
    </div>
  </div>
</template>

<script>
export default {
  layout: "ProfileLayout",
};
</script>

<style lang="postcss" scoped>
.container {
  @apply bg-white drop-shadow-sm rounded;
}
</style>
