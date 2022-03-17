<template>
  <div class="container">
    <div class="header">
      <!-- <span class="wishlist-badge"> -->
      <font-awesome-icon class="wishlist-icon" :icon="['fas', 'cog']" />
      <!-- <span>2</span> -->
      <!-- </span> -->
      <h2>Setting</h2>
    </div>
    <div class="body">
      <UserSetting />
    </div>
  </div>
</template>
<script>
export default {
  layout: "ProfileLayout",
  middleware: ["auth/ifNotAuthRedirectAuth"],
  head() {
    return {
      title: `Asxox | Setting`,
    };
  },
};
</script>

<style lang="postcss" scoped>
.container {
  @apply flex w-full bg-slate-100 p-4 rounded-lg flex-col;
}

.header {
  @apply w-full gap-x-4 flex items-center p-4 py-6;
}

.header h2 {
  @apply text-lg font-bold  font-quicksand;
}

.wishlist-badge {
  @apply flex flex-col relative;
}

.wishlist-badge span {
  @apply text-slate-50 text-[8px] md:text-sm absolute bg-orange-500 rounded-full h-4 md:h-5 w-4 md:w-5 justify-center items-center flex text-center -top-3 -right-3;
}

.wishlist-icon {
  @apply text-slate-900 text-lg md:text-2xl;
}

.body {
  /* @apply w-full bg-slate-200 rounded-lg; */
}
</style>
