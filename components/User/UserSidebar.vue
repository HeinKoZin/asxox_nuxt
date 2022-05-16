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
          <li
            :class="linkIsActive('/user') ? 'active' : ''"
            @click="$router.push('/user').catch(() => {})"
          >
            <i class="fa-solid fa-user icon"></i>
            Profile
          </li>
          <li
            :class="linkIsActive('/user/orders') ? 'active' : ''"
            @click="$router.push('/user/orders').catch(() => {})"
          >
            <i class="fa-solid fa-cart-shopping icon"></i>
            Orders
          </li>
          <li
            :class="linkIsActive('/user/wishlists') ? 'active' : ''"
            @click="$router.push('/user/wishlists').catch(() => {})"
          >
            <i class="fa-solid fa-heart icon"></i>
            Wishlist
          </li>
          <!-- <li>
            <font-awesome-icon :icon="['fas', 'cog']" class="icon" />
            Purchased History
          </li> -->
          <li
            :class="linkIsActive('/user/points') ? 'active' : ''"
            @click="$router.push('/user/points').catch(() => {})"
          >
            <i class="fa-solid fa-1 icon"></i>
            Points
          </li>

          <li
            :class="linkIsActive('/user/setting') ? 'active' : ''"
            @click="$router.push('/user/setting').catch(() => {})"
          >
            <i class="fa-solid fa-gear icon"></i>
            Settings
          </li>
        </ul>
        <!-- <button class="user-logout" @click="userLogout"></button> -->
        <Button
          variant="primary"
          class="w-full d-flex"
          :class="[{ 'user-logout': !isSpin }, { 'mt-6': isSpin }]"
          :disabled="isSpin"
          @click.native="userLogout"
        >
          <div class="mr-3" v-show="!isSpin">
            <i class="mr-3 fa-solid fa-arrow-right-from-bracket icon"></i>
            Logout
          </div>
          <Spinner slot="loader" v-if="isSpin" />
          <div class="mr-3" v-show="isSpin">Logout</div>
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
export default {
  mixins: [generalMixins],
  data() {
    return {
      isSpin: false,
    };
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
    // === logout ===
    async userLogout() {
      this.isSpin = true;
      await this.$auth.logout("local");

      // === no response from auth logout so reuse isAuthenticated ===
      if (!this.isAuthenticated) {
        this.$auth.$storage.removeUniversal("user");
        this.$auth.$storage.removeUniversal("loggedIn");
        this.toast("You have been logged out!", "success");
        this.isUserMenuOpen = !this.isUserMenuOpen;
      } else this.toast("Fail to log out!", "error");
      this.isSpin = false;
    },
  },
};
</script>

<style lang="postcss" scoped>
.user-sidebar-container {
  @apply px-0 md:px-2 w-full h-full;
}

.user-sidebar-wrapper {
  @apply flex flex-col items-center bg-white p-5 rounded-lg;
}

.user-sidebar-header {
  @apply flex flex-col items-center;
}

.user-sidebar-header h2 {
  @apply text-lg md:text-2xl font-bold text-center p-4 font-quicksand border-b border-slate-300 w-full;
}

.user-sidebar-avatar img {
  @apply w-full h-auto rounded-full border-2 border-slate-400;
}

.user-sidebar-menu {
  @apply mt-4 w-full font-quicksand;
}

.user-sidebar-menu ul {
  @apply flex gap-y-1 flex-col text-base w-full font-semibold text-slate-600;
}

.user-sidebar-menu ul li {
  @apply flex flex-row items-center gap-x-2 py-3 px-3 rounded-lg cursor-pointer hover:bg-slate-200;
}

.user-sidebar-menu ul li.active {
  @apply bg-slate-300;
}

.user-logout {
  @apply w-full bg-orange-500 text-white text-sm md:text-base font-bold py-3  rounded-lg font-quicksand mt-6 hover:bg-orange-600 hidden md:block;
}

.icon {
  @apply text-lg;
}
</style>
