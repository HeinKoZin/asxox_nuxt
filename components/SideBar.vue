<template>
  <div class="sidebar-container">
    <!-- NOTE: Menu -->
    <div class="sidebar-menu">
      <!-- NOTE: Item -->
      <div class="sidebar-menu-item active">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'home']" />
        </button>
        <span class="menu-label">Home</span>
      </div>
      <!-- NOTE: Item -->
      <div class="sidebar-menu-item active">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'store-alt']" />
        </button>
        <span class="menu-label">Shop</span>
      </div>
    </div>

    <!-- NOTE: Cart -->
    <div class="sidebar-menu">
      <div class="mb-20 sidebar-menu-item">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'bars']" />
        </button>
        <span class="menu-label">Category</span>
      </div>
      <div class="sidebar-menu-item">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'shopping-cart']" />
        </button>
        <span class="menu-label">Cart</span>
      </div>
      <div class="sidebar-menu-item">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'user-circle']" />
        </button>
        <span class="menu-label">User</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.sidebar-container {
  @apply w-full md:w-[4.4rem] bg-slate-100 h-[4rem] md:h-[calc(100vh-4rem)]  px-2 py-2 md:p-1 md:py-4 flex md:flex-col justify-between;
}

.sidebar-menu {
  @apply w-full  flex flex-row md:flex-col gap-x-2 md:gap-y-2;
}

.sidebar-menu .sidebar-menu-item {
  @apply md:w-full w-[4rem] h-full md:h-16 flex flex-col items-center justify-center bg-slate-100 rounded-md transition-[all] cursor-pointer;
}

.sidebar-menu .sidebar-menu-item.active {
  @apply bg-white;
}

.sidebar-menu .sidebar-menu-item .btn {
  @apply w-full  text-2xl relative h-full  md:h-auto;
}

.sidebar-menu .sidebar-menu-item.active .btn {
  @apply before:bg-orange-600 before:absolute md:before:w-1 md:before:h-full md:before:left-0 before:rounded-t-lg before:rounded-b-lg before:h-1 before:w-8 before:bottom-0;
}

.sidebar-menu .sidebar-menu-item .btn .icon {
  @apply text-gray-600;
}

.sidebar-menu .sidebar-menu-item.active .btn .icon {
  @apply text-orange-600 w-8;
}

.sidebar-menu .sidebar-menu-item .menu-label {
  @apply text-gray-600 text-xs hidden md:block;
}

.sidebar-menu .sidebar-menu-item.active .menu-label {
  @apply hidden;
}
</style>
