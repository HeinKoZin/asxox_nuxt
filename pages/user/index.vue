<template>
  <div class="profile-layout-container">
    <div class="profile-layout-container-wrapper">
      <div class="user-cover-container">
        <div class="user-profile-avatar">
          <img src="https://picsum.photos/150" alt="Avatar" />
        </div>
      </div>

      <div class="user-profile-info-container">
        <div class="user-profile-name">
          <h2>Hein Ko Zin</h2>
        </div>

        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "ProfileLayout",
};
</script>

<style lang="postcss" scoped>
.profile-layout-container {
  @apply flex gap-x-2  h-full flex-grow bg-slate-100 p-5 rounded-lg items-center justify-center;
}

.profile-layout-container-wrapper {
  @apply w-full h-full flex flex-col;
}

.user-cover-container {
  @apply flex items-end h-64 w-full bg-slate-600 px-4 rounded-lg mb-12;
}

.user-profile-avatar {
  @apply aspect-2 relative top-12 left-5;
}

.user-profile-avatar img {
  @apply rounded-full aspect-2;
}

.user-profile-info-container {
  @apply w-full p-4;
}

.user-profile-name {
  @apply text-2xl font-bold p-5 font-quicksand border-b border-slate-400 w-full;
}
</style>
