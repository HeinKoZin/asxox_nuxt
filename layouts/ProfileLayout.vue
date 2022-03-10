<template>
  <div>
    <MainLayout>
      <div class="profile-layout-container">
        <div class="use-sidebar">
          <UserSidebar />
        </div>
        <div class="main">
          <Nuxt />
        </div>
      </div>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "~/layouts/MainLayout.vue";

export default {
  components: {
    MainLayout,
  },
};
</script>

<style lang="postcss" scoped>
.profile-layout-container {
  @apply p-4 w-full pb-20 flex flex-col md:flex-row gap-y-2;
}

.use-sidebar {
  @apply w-full md:w-[18%];
}

.main {
  @apply w-full md:w-[82%];
}
</style>
