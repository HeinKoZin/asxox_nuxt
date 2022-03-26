<template>
  <header>
    <div class="header-container">
      state : {{ $store.state.auth.user }}
      <div class="header-left">
        <div class="mobile-header-menu">
          <button
            v-if="!isMobileMenuOpen"
            @click="SET_MOBILE_MENU(!isMobileMenuOpen)"
          >
            <i class="fa-solid fa-bars icon"></i>
          </button>
          <button
            v-if="isMobileMenuOpen"
            @click="SET_MOBILE_MENU(!isMobileMenuOpen)"
          >
            <i class="fa-solid fa-xmark icon"></i>
          </button>
        </div>
        <div class="header-back-button">
          <button @click="$router.back()" v-if="$route.path !== '/'">
            <i class="fa-solid fa-arrow-left icon"></i>
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
            <i
              class="fa-solid fa-magnifying-glass text-slate-500 hover:text-slate-700"
            ></i>
          </Button>
        </div>
      </div>
      <div class="header-right">
        <div class="header-user" v-click-outside="closeUserMenu">
          <button
            class="header-user-button"
            size="sm"
            @click="toggleUserMenu()"
          >
            <i class="fa-solid fa-circle-user icon"></i>
          </button>
          <div
            v-if="isUserMenuOpen && $auth.$storage.getLocalStorage('loggedIn')"
            class="user-menu"
          >
            <div class="user-menu-header">
              <span class="username"
                >Hi, {{ $auth.user ? $auth.user.data.name : "" }}</span
              >
              <span class="user-email">{{
                ($auth.user ? $auth.user.data.email : "") ||
                ($auth.user ? $auth.user.data.phone : "")
              }}</span>
            </div>
            <hr />
            <ul>
              <li @click="$router.push('/user'), toggleUserMenu()">
                <i class="fa-solid fa-circle-user icon"></i>Profile
              </li>
              <li @click="$router.push('/user/orders'), toggleUserMenu()">
                <i class="fa-solid fa-clock-rotate-left icon"></i>Purchased
                History
              </li>
              <li @click="$router.push('/user/setting'), toggleUserMenu()">
                <i class="fa-solid fa-gear icon"></i>Settings
              </li>
            </ul>
            <button class="user-logout" @click="userLogout">
              <i class="fa-solid fa-right-from-bracket icon"></i>
              Logout
            </button>
          </div>

          <!-- User menu for Gust user -->
          <div
            v-if="isUserMenuOpen && !$auth.$storage.getLocalStorage('loggedIn')"
            class="user-menu"
          >
            <div class="user-menu-header">
              <span class="username">Welcome, Guest</span>
              <span class="user-email">Login or Register </span>
            </div>
            <hr />
            <button
              class="user-logout"
              @click="$router.push('/auth'), toggleUserMenu()"
            >
              <i class="fa-solid fa-user-plus icon"></i>
              Register
            </button>
            <button
              class="user-logout"
              @click="$router.push('/auth'), toggleUserMenu()"
            >
              <i class="fa-solid fa-right-to-bracket icon"></i>
              Login
            </button>
          </div>
        </div>
        <div class="header-cart" v-if="!isCartOpen">
          <button class="header-button" @click="toggleCart">
            <span class="badge" v-if="calculateCartProductQuantity">{{
              calculateCartProductQuantity
            }}</span>
            <i class="fa-solid fa-cart-shopping icon"></i>
          </button>
        </div>
        <div class="header-wishlist">
          <button
            class="header-button"
            @click="$router.push('/user/wishlists')"
          >
            <span class="badge" v-if="giveWishlistLength">{{
              giveWishlistLength
            }}</span>
            <i class="fa-solid fa-heart icon"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import { generalMixins } from "@/mixins/general";
export default {
  mixins: [generalMixins],
  data() {
    return {
      isUserMenuOpen: false,
    };
  },
  computed: {
    // NOTE: Method from Vuex getters
    ...mapGetters([
      "isMobileMenuOpen",
      "isCartOpen",
      "isAuthenticated",
      "loggedInUser",
      "wishListProductList",
      "cartProducts",
    ]),
    giveWishlistLength() {
      return this.wishListProductList?.length;
    },

    calculateCartProductQuantity() {
      let qty = 0;
      for (let product of this.cartProducts) {
        qty += product.qty;
      }
      return qty || null;
    },
  },
  methods: {
    // NOTE: Methods from Vuex actions and mutations
    ...mapMutations(["SET_MOBILE_MENU", "SET_CART"]),
    ...mapActions(["getWishListProducts"]),

    toggleUserMenu() {
      this.isUserMenuOpen = !this.isUserMenuOpen;
    },

    closeUserMenu() {
      this.isUserMenuOpen = false;
    },

    toggleCart() {
      this.SET_CART(!this.isCartOpen);
    },

    test() {
      alert("test");
    },
    // === logout ===
    async userLogout() {
      await this.$auth.logout("local");
      this.$fire.auth.signOut();

      // === no response from auth logout so reuse isAuthenticated ===
      if (!this.isAuthenticated) {
        this.$auth.$storage.removeUniversal("user");
        this.$auth.$storage.removeUniversal("loggedIn");
        this.toast("You have been logged out!", "success");
        this.isUserMenuOpen = !this.isUserMenuOpen;
        this.$router.push("/");
      } else this.toast("Fail to log out!", "error");
    },
  },
  mounted() {
    if (!this.wishListProductList?.length > 0 && this.checkAuthenticated())
      this.getWishListProducts();
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

.header-back-button {
  @apply flex flex-row items-center mr-2;
}

.header-back-button button {
  @apply w-10 h-10 text-slate-500 hover:text-slate-700 text-lg;
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
  @apply h-10 px-2 pl-4 bg-transparent  text-sm text-slate-700 w-24 focus:w-48 md:w-[30rem] transition-[width] md:focus-within:w-[40rem] focus:outline-none active:outline-none;
}

.header-cart {
  @apply hidden md:block;
}

.header-search .header-search-button {
  @apply w-10 h-10 rounded-md bg-transparent text-slate-700 hover:text-slate-500 hover:bg-slate-100;
}

/* .header-cart .header-cart-button {
  @apply w-10 h-10 rounded-full text-white hover:text-slate-500;
} */

.header-container .icon {
  @apply rounded-full text-slate-500 hover:text-slate-700 text-2xl md:text-3xl;
}

.header-user {
  @apply flex flex-row h-12 items-center relative;
}

.header-user .user-menu {
  @apply absolute top-16  right-0  bg-white rounded-md  z-50 p-4 border border-slate-300 animate-fadeIn;
}

.header-user .user-menu .user-menu-header {
  @apply flex flex-col justify-start p-2;
}

.header-user .user-menu .user-menu-header .username {
  @apply text-slate-700 text-base font-bold whitespace-nowrap;
}

.header-user .user-menu .user-menu-header .user-email {
  @apply text-slate-600 text-sm whitespace-nowrap;
}

.header-user .user-menu ul {
  @apply list-none;
}

.header-user .user-menu li {
  @apply p-2 text-sm text-slate-700 hover:text-slate-500 hover:bg-slate-100 hover:cursor-pointer flex items-center rounded-md;
}

.header-user .user-menu .icon {
  @apply mr-2 text-xl;
}

.header-user .user-logout {
  @apply p-2 text-sm text-slate-700 hover:text-slate-500 hover:bg-slate-100 hover:cursor-pointer w-full flex items-center border justify-center border-slate-300 mt-2 rounded-md;
}

.header-user .user-auth {
  @apply p-2 text-sm text-slate-700 hover:text-slate-500 hover:bg-slate-100 hover:cursor-pointer w-full flex items-center border justify-start border-slate-300 mt-2 rounded-md;
}

.header-user-button {
  @apply w-10 h-10 rounded-full text-white hover:text-slate-500 text-xl;
}

.header-wishlist .header-button {
  @apply w-10 h-10 rounded-full text-white hover:text-slate-500 text-xl;
}

.mobile-header-menu {
  @apply block md:hidden mr-2;
}

.header-wishlist {
  @apply relative;
}

.header-cart {
  @apply relative;
}

.badge {
  @apply absolute flex justify-center items-center  text-sm  bg-orange-600 text-white w-6 h-6 -top-2 -right-2 text-center  rounded-full;
}
</style>
