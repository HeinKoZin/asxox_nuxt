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
      <div class="sidebar-menu-item">
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
  @apply w-[4.4rem] bg-slate-100 h-screen p-1 py-4 flex flex-col justify-between;
}

.sidebar-menu {
  @apply w-full  flex flex-col gap-y-2;
}

.sidebar-menu .sidebar-menu-item {
  @apply w-full h-16 flex flex-col items-center justify-center bg-slate-100 rounded-md transition-[all] cursor-pointer;
}

.sidebar-menu .sidebar-menu-item.active {
  @apply bg-white;
}

.sidebar-menu .sidebar-menu-item .btn {
  @apply w-full  text-2xl relative;
}

.sidebar-menu .sidebar-menu-item.active .btn {
  @apply before:bg-orange-600 before:absolute before:w-1 before:h-full before:left-0 before:rounded-t-lg before:rounded-b-lg;
}

.sidebar-menu .sidebar-menu-item .btn .icon {
  @apply text-gray-600;
}

.sidebar-menu .sidebar-menu-item.active .btn .icon {
  @apply text-orange-600;
}

.sidebar-menu .sidebar-menu-item .menu-label {
  @apply text-gray-600 text-xs;
}

.sidebar-menu .sidebar-menu-item.active .menu-label {
  @apply hidden;
}
</style>
