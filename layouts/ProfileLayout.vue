<template>
  <MainLayoutComponent>
    <div class="profile-layout-container">
      <div class="use-sidebar">
        <UserSidebar />
      </div>
      <div class="main">
        <Nuxt keep-alive />
      </div>
    </div>
  </MainLayoutComponent>
</template>

<script>
import MainLayoutComponent from "~/components/Layouts/MainLayoutComponent.vue";

export default {
  components: {
    MainLayoutComponent,
  },
};
</script>

<style lang="postcss" scoped>
.profile-layout-container {
  @apply p-4 w-full pb-20 flex flex-col md:flex-row gap-y-2;
}

.use-sidebar {
  @apply w-full md:w-[20%];
}

.main {
  @apply w-full md:w-[80%];
}
</style>
