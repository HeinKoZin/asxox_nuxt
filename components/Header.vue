<template>
  <header>
    <div class="header-container">
      <div class="header-left">
        <div class="header-logo">
          <a href="#">
            <img src="https://via.placeholder.com/50" alt="logo" />
          </a>
        </div>
        <div class="header-brand">
          <span>Asxox Ecommerce</span>
        </div>
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
        <div class="header-cart">
          <Button class="header-cart-button" size="sm">
            <font-awesome-icon
              :icon="['fas', 'shopping-cart']"
              class="text-slate-500 hover:text-slate-700"
            />
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.header-container {
  @apply w-full h-16 bg-slate-100 px-4  flex items-center justify-between;
}

.header-left {
  @apply flex flex-row h-12 items-center;
}

.header-logo {
  @apply mr-4;
}

.header-logo img {
  @apply w-12 h-12 rounded-full;
}

.header-brand {
  @apply text-2xl first-letter:text-3xl font-zen-kurenaido text-slate-700 hidden md:block;
}

.header-right {
  @apply flex flex-row h-12 items-center gap-5;
}

.header-search {
  @apply flex flex-row items-center  bg-white  rounded-md border border-slate-300;
}

.header-search input {
  @apply h-10 px-2 pl-4 bg-transparent  text-sm text-slate-700 w-28 md:w-52 transition-[width] focus-within:w-60 group-focus:w-96 focus:outline-none active:outline-none;
}

.header-search .header-search-button {
  @apply w-10 h-10 rounded-md bg-transparent text-slate-700 hover:text-slate-500;
}

.header-cart .header-cart-button {
  @apply w-10 h-10 rounded-full text-white hover:text-slate-500 text-xl mr-2;
}
</style>
