<template>
  <div>
    <MainLayout>
      <div class="profile-layout-container">
        <UserSidebar />
        <Nuxt />
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
  @apply flex gap-x-4 p-4 h-full pb-20;
}
</style>
