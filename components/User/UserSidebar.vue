<template>
  <div class="user-sidebar-container">
    <div class="user-sidebar-wrapper">
      <div class="user-sidebar-header">
        <div class="user-sidebar-avatar">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div class="user-sidebar-name">
          <h3>Hein Ko Zin</h3>
          <p>heinkozin4@gmail.com</p>
        </div>
      </div>
      <div class="user-sidebar-menu">
        <ul>
          <li>
            <font-awesome-icon :icon="['fas', 'user']" class="icon" />
            Profile
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
            Orders
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'heart']" class="icon" />
            Wishlist
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'cog']" class="icon" />
            Purchased History
          </li>
          <li>
            <font-awesome-icon :icon="['fas', 'cog']" class="icon" />
            Settings
          </li>
        </ul>
        <button class="user-logout" @click="logout">
          <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="icon" />
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.user-sidebar-container {
  @apply bg-slate-50 p-5 rounded-lg;
}

.user-sidebar-container-wrapper {
  @apply flex flex-col items-center;
}

.user-sidebar-header {
  @apply flex flex-col items-center;
}

.user-sidebar-avatar img {
  @apply w-full h-auto rounded-full;
}
</style>
