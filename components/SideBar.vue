<template>
  <div
    :class="
      'sidebar-container ' + (isMobileMenuOpen ? 'slide-up' : 'slide-down')
    "
  >
    <!-- NOTE: Menu -->
    <div class="sidebar-menu">
      <!-- NOTE: Logo -->
      <div class="sidebar-logo">
        <a href="">
          <img src="~/assets/img/logo.png" alt="" srcset="" />
        </a>
      </div>
      <!-- NOTE: Item -->
      <div class="sidebar-menu-item" :class="linkIsActive('/') ? 'active' : ''">
        <button class="btn" @click="$router.push('/')">
          <i class="fa-solid fa-house icon"></i>
        </button>
        <span class="menu-label">Home</span>
      </div>
      <!-- NOTE: Item -->
      <!-- WARNING: Temporary hide -->
      <!-- <div class="sidebar-menu-item">
        <button class="btn">
          <i class="fa-solid fa-shop icon"></i>
        </button>
        <span class="menu-label">Shop</span>
      </div> -->
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
      <!-- WARNING: Temporary hide -->
      <div
        class="sidebar-menu-item"
        :class="linkIsActive('/categories') ? 'active' : ''"
      >
        <button class="btn" @click="$router.push('/categories')">
          <i class="fa-solid fa-bars icon"></i>
        </button>
        <span class="menu-label">Category</span>
      </div>

      <!-- <div class="sidebar-menu-item">
        <button class="btn">
          <i class="fa-solid fa-right-from-bracket icon"></i>
        </button>
        <span class="menu-label">Logout</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters({
      isMobileMenuOpen: "isMobileMenuOpen",
    }),
  },

  methods: {
    linkIsActive(link) {
      const paths = Array.isArray(link) ? link : [link];
      const res = paths.some((path) => this.$route.path === path);
      if (res) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style lang="postcss" scoped>
.sidebar-container {
  @apply md:hidden w-[4.4rem] bg-slate-100 h-[calc(100%-4rem)] top-0 md:h-[calc(100%_-_4rem)] p-2 md:px-1 py-4 flex  flex-col justify-between fixed  z-40 transition-[margin] mt-16;
  /* box-shadow: 2px 10px 5px 1px rgba(0, 0, 0, 0.1); */
}

.sidebar-container.slide-up {
  @apply ml-0 shadow-md shadow-black md:shadow-none md:shadow-transparent;
}

.sidebar-container.slide-down {
  @apply -ml-[4.4rem] md:ml-0;
}

.sidebar-menu {
  @apply w-full flex flex-col gap-y-2;
}

.sidebar-menu .sidebar-logo {
  @apply w-12 h-auto block md:hidden mx-auto mb-2;
}

.sidebar-menu .sidebar-menu-item {
  @apply w-full h-14 md:h-16 flex flex-col items-center justify-center bg-slate-100 rounded-md transition-[all] cursor-pointer;
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
