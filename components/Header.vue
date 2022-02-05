<template>
  <header>
    <div class="header-container">
      <div class="header-left">
        <div class="mobile-header-menu">
          <button
            v-if="!isMobileMenuOpen"
            @click="SET_MOBILE_MENU(!isMobileMenuOpen)"
          >
            <font-awesome-icon :icon="['fas', 'bars']" class="icon" />
          </button>
          <button
            v-if="isMobileMenuOpen"
            @click="SET_MOBILE_MENU(!isMobileMenuOpen)"
          >
            <font-awesome-icon :icon="['fas', 'times']" class="icon" />
          </button>
        </div>
        <div class="header-logo">
          <!-- <a href="#">
            <img src="https://via.placeholder.com/50" alt="logo" />
          </a> -->
          <img
            src="~/assets/img/logo-title.png"
            class="hidden md:block"
            alt=""
            srcset=""
          />
        </div>
        <!-- <div class="header-brand">
          <span>Asxox Ecommerce</span>
        </div> -->
      </div>
      <div class="header-center group">
        <div class="header-search">
          <input type="text" placeholder="Search" />
          <Button class="header-search-button" size="sm">
            <font-awesome-icon
              :icon="['fas', 'search']"
              class="text-slate-500 hover:text-slate-700"
            />
          </Button>
        </div>
      </div>
      <div class="header-right">
        <div class="header-user">
          <button class="header-user-button" size="sm" @click="toggleUserMenu">
            <font-awesome-icon :icon="['fas', 'user-circle']" class="icon" />
          </button>
          <div v-if="isUserMenuOpen" class="user-menu">
            <ul>
              <li>Profile</li>
              <li>Purchased History</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div class="header-cart" v-if="!isCartOpen">
          <button class="header-cart-button" size="sm" @click="toggleCart">
            <font-awesome-icon :icon="['fas', 'shopping-cart']" class="icon" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      //
      isUserMenuOpen: false,
    };
  },
  computed: {
    ...mapGetters(["isMobileMenuOpen", "isCartOpen"]),
  },
  methods: {
    //
    ...mapMutations(["SET_MOBILE_MENU", "SET_CART"]),
    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    },
    toggleCart() {
      this.SET_CART(!this.isCartOpen);
    },
  },
};
</script>

<style lang="postcss" scoped>
.header-container {
  @apply w-full h-16 bg-slate-100 px-4  flex items-center justify-between fixed z-50;
}

.header-left {
  @apply flex flex-row h-12 items-center;
}

.header-logo {
  @apply mr-4;
}

.header-logo img {
  @apply w-36 hidden md:block h-auto rounded-full;
}

/* .header-brand {
  @apply text-2xl first-letter:text-3xl font-zen-kurenaido text-slate-700 hidden md:block;
} */

.header-right {
  @apply flex flex-row h-12 items-center gap-1 md:gap-5;
}

.header-search {
  @apply flex-row items-center  bg-white  rounded-md border border-slate-300 flex;
}

.header-search input {
  @apply h-10 px-2 pl-4 bg-transparent  text-sm text-slate-700 w-24 focus:w-48 md:w-56 transition-[width] md:focus-within:w-[30rem] focus:outline-none active:outline-none;
}

.header-cart {
  @apply hidden md:block;
}

.header-search .header-search-button {
  @apply w-10 h-10 rounded-md bg-transparent text-slate-700 hover:text-slate-500 hover:bg-slate-100;
}

.header-cart .header-cart-button {
  @apply w-10 h-10 rounded-full text-white hover:text-slate-500 mr-2;
}

.header-container .icon {
  @apply rounded-full text-slate-500 hover:text-slate-700 text-2xl md:text-3xl;
}

.header-user {
  @apply flex flex-row h-12 items-center;
}

.header-user .user-menu {
  @apply absolute top-16  right-2 md:right-6  bg-white rounded-md shadow-sm shadow-black z-50;
}

.header-user .user-menu ul {
  @apply list-none;
}

.header-user .user-menu li {
  @apply px-4 py-2 text-sm text-slate-700 hover:text-slate-500 hover:bg-slate-100 hover:cursor-pointer;
}

.header-user-button {
  @apply w-10 h-10 rounded-full text-white hover:text-slate-500 text-xl;
}

.mobile-header-menu {
  @apply block md:hidden mr-2;
}
</style>
