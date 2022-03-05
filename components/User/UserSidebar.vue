<template>
  <div class="user-sidebar-container">
    <div class="user-sidebar-wrapper">
      <div class="user-sidebar-header">
        <!-- <div class="user-sidebar-avatar">
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div class="user-sidebar-name">
          <h3>Hein Ko Zin</h3>
          <p>heinkozin4@gmail.com</p>
        </div> -->
        <h2>My Account</h2>
      </div>
      <div class="user-sidebar-menu">
        <ul>
          <li class="active">
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
  @apply bg-slate-100 p-5 rounded-lg;
}

.user-sidebar-container-wrapper {
  @apply flex flex-col items-center;
}

.user-sidebar-header {
  @apply flex flex-col items-center;
}

.user-sidebar-header h2 {
  @apply text-2xl font-bold p-4 font-quicksand border-b border-slate-300 w-full;
}

.user-sidebar-avatar img {
  @apply w-full h-auto rounded-full border-2 border-slate-400;
}

.user-sidebar-menu {
  @apply mt-4 w-full font-quicksand;
}

.user-sidebar-menu ul {
  @apply flex gap-y-1 flex-col text-lg w-full font-semibold text-slate-600;
}

.user-sidebar-menu ul li {
  @apply flex flex-row items-center gap-x-2 py-2 px-3 rounded-lg cursor-pointer hover:bg-slate-100;
}

.user-sidebar-menu ul li.active {
  @apply bg-slate-200;
}

.user-logout {
  @apply w-full bg-orange-500 text-white text-base md:text-lg font-bold py-3  rounded-lg font-quicksand mt-6 hover:bg-orange-600;
}
</style>
