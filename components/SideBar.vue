<template>
  <div
    :class="
      'sidebar-container ' + (isMobileMenuOpen ? 'slide-up' : 'slide-down')
    "
  >
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

    <!-- <div class="sidebar-menu">
      <div class="sidebar-menu-item mobile-cart-menu">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'shopping-cart']" />
        </button>
        <span class="menu-label">Cart</span>
      </div>
    </div> -->

    <!-- NOTE: Cart -->
    <div class="sidebar-menu">
      <div class="sidebar-menu-item active">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'bars']" />
        </button>
        <span class="menu-label">Category</span>
      </div>

      <div class="sidebar-menu-item">
        <button class="btn">
          <font-awesome-icon class="icon" :icon="['fas', 'sign-out-alt']" />
        </button>
        <span class="menu-label">Logout</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //
    };
  },
  computed: {
    ...mapGetters({
      isMobileMenuOpen: "isMobileMenuOpen",
    }),
  },
};
</script>

<style lang="postcss" scoped>
.sidebar-container {
  @apply w-[4.4rem] bg-slate-100 h-[calc(100%-4rem)] top-0 md:h-[calc(100%_-_4rem)] p-1 py-4 flex  flex-col justify-between fixed  z-50 transition-[margin] mt-16;
}

.sidebar-container.slide-up {
  @apply ml-0;
}

.sidebar-container.slide-down {
  @apply -ml-[4.4rem] md:ml-0;
}

.sidebar-menu {
  @apply w-full flex flex-col gap-y-2;
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
