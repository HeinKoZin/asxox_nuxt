<template>
  <div class="header-bar-container-wrapper">
    <div class="header-bar-container">
      <!-- Categories menu  -->
      <div class="menu-container">
        <div class="categories-menu-container group">
          <div
            class="categories-menu-header"
            @click="$router.push('/categories')"
          >
            <i class="fa-solid fa-list"></i>
            <h3>Categories</h3>
          </div>
          <ul class="categories-menu-wrapper">
            <li
              class="category-item-wrapper"
              v-for="(category, index) in categories"
              :key="index"
              @click="handleCategoryClick(category.id)"
            >
              <div class="category-item">
                <h3>{{ category.name }}</h3>
              </div>
            </li>
          </ul>
        </div>
        <span> | </span>
        <div class="menu-item">
          <h3>Home</h3>
        </div>
        <span> | </span>
        <div class="menu-item">
          <h3>Shops</h3>
        </div>
        <span> | </span>
        <div class="menu-item">
          <h3>Contact</h3>
        </div>
      </div>

      <div class="app-download-links">
        <!-- Old Code -->
        <!-- <div class="app-download-link">
          <a href="#">
            <img src="~/assets/img/huawei-app.png" alt="Google Play" />
          </a>
        </div> -->

        <!-- <a
          href="https://appgallery.huawei.com/app/C105045159"
          class="download-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="download-logo"
            src="~/assets/img/appgallery.png"
            alt="Google Play"
          />
          <div>
            <p>Download our app on</p>
            <h1>App Gallery</h1>
          </div>
        </a> -->

        <!-- <a
          href="https://play.google.com/store/apps/details?id=com.asxox.mkza"
          class="download-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="download-logo"
            src="~/assets/img/playstore.png"
            alt="Google Play"
          />
          <div>
            <p>Download our app on</p>
            <h1>Play Store</h1>
          </div>
        </a> -->
        <a href="" class="app-download-link-test">
          <img src="~/assets/img/playstore-icon.png" class="h-full" alt="" />
        </a>
        <a href="" class="app-download-link-test">
          <img src="~/assets/img/app-gallery-icon.png" class="h-full" alt="" />
        </a>
        <a href="" class="app-download-link-test">
          <img src="~/assets/img/app-store-icon.png" class="h-full" alt="" />
        </a>
        <a href="" class="app-download-link-test">
          <img src="~/assets/img/direct-icon.png" class="h-full" alt="" />
        </a>
        <!-- <a
          href="https://apps.apple.com/us/app/asxox/id1590791745"
          class="download-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="download-logo"
            src="~/assets/img/appstore.png"
            alt="App Store"
          />
          <div>
            <p>Download our app on</p>
            <h1>App Store</h1>
          </div>
        </a> -->

        <!-- <a
          href="https://www.mediafire.com/file/fpefav2zsfuj87v/app-release.apk/file"
          class="download-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="download-logo"
            src="~/assets/img/download-white.png"
            alt="App Store"
          />
          <div>
            <p>Download our app on</p>
            <h1>Direct Link</h1>
          </div>
        </a> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // data() {
  //   return {
  //     categories: [
  //       {
  //         name: "Electronics",
  //       },
  //       {
  //         name: "Fashion",
  //       },
  //       {
  //         name: "Home & Garden",
  //       },
  //       {
  //         name: "Sports & Outdoors",
  //       },
  //       {
  //         name: "Toys & Games",
  //       },
  //       {
  //         name: "Health & Beauty",
  //       },
  //       {
  //         name: "Home & Kitchen",
  //       },
  //     ],
  //   };
  // },

  computed: {
    ...mapGetters(["categories"]),
  },

  methods: {
    ...mapActions(["getCategories"]),

    handleCategoryClick(categoryId) {
      this.$router.push({ name: "categories-id", params: { id: categoryId } });
    },
  },

  async fetch() {
    await this.getCategories();
  },
};
</script>

<style lang="postcss" scoped>
.header-bar-container-wrapper {
  @apply w-full h-16 bg-gray-800 hidden md:block;
}

.header-bar-container {
  @apply w-full h-full flex items-center  bg-orange-500 text-white px-[10%] justify-between gap-1;
}

.menu-container {
  @apply flex md:gap-2 lg:gap-3 items-center font-semibold;
}

.categories-menu-container {
  @apply text-white relative h-16 items-center flex;
}

.categories-menu-header {
  @apply sm:text-sm md:text-base lg:text-base  text-white flex gap-2 items-center;
}

.categories-menu-wrapper {
  @apply flex-col items-center absolute top-16 bg-orange-500 text-white w-full  min-w-[200px] hidden group-hover:flex;
}

.menu-item {
  @apply hover:cursor-pointer;
}

.category-item-wrapper {
  @apply w-full  px-4 py-2 hover:bg-orange-400 hover:cursor-pointer;
}

.category-item {
  /* @apply; */
}

.app-download-links {
  @apply flex gap-2 items-center;
}

.app-download-link {
  @apply flex items-center;
}

.app-download-link a {
  @apply flex items-center w-40 h-10 relative;
}

.app-download-link a img {
  @apply w-full h-full absolute;
}

.download-app {
  @apply flex gap-2 items-center md:text-base font-semibold my-0 font-quicksand no-underline hover:no-underline bg-black   text-white rounded-md p-2 px-2;
}

.download-app .download-logo {
  @apply w-7 h-7;
}

.download-app p {
  @apply text-white whitespace-nowrap text-[8px] leading-none;
}

.download-app h1 {
  @apply text-xs  font-bold font-quicksand text-slate-50;
}

/* NOTE: Test */
.app-download-link-test {
  @apply flex items-center md:h-7 lg:h-10 relative;
}
</style>
