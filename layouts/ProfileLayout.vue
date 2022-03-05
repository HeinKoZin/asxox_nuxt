<template>
  <div>
    <MainLayout>
      <div class="profile-layout-container">
        <UserSidebar />
        <Nuxt keep-alive />
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
  @apply flex gap-x-2 p-2 h-full;
}
</style>
