<template>
  <div class="auth-layout-container">
    <div class="info-container-wrapper">
      <div class="relative w-full h-full">
        <!-- Info Image -->
        <img src="~/assets/img/auth/verified.png" class="auth-cover-img" />
      </div>
    </div>
    <div class="auth-form-container-wrapper">
      <AnimationView class="p-1">
        <div class="auth-form-container">
          <div class="w-full">
            <Button
              class="float-left px-4 font-bold border-2 top-40 left-20 rounded-xl border-slate-400"
              size="md"
              @click.native="$router.push('/')"
            >
              <i class="fa-solid fa-arrow-left-long"></i>
            </Button>
          </div>
          <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
          <h3 class="company-title">Asxox</h3>
          <h2 class="mt-6 form-title"><slot name="form-title"></slot></h2>
          <!-- === error message === -->
          <div class="w-full">
            <!-- Child will be render here... -->
            <slot name="form-body"></slot>
          </div>
        </div>
      </AnimationView>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.auth-layout-container {
  @apply w-full min-h-screen bg-slate-100 flex flex-col md:flex-row  text-base md:text-lg lg:text-xl;
}

.info-container-wrapper {
  @apply w-full md:w-7/12 bg-slate-600   hidden md:flex flex-col box-border;
}

.auth-form-container-wrapper {
  @apply w-full md:w-5/12 min-h-screen flex justify-center items-center float-right p-6 relative;
}

.auth-cover-img {
  @apply w-full h-full object-cover absolute;
}

.auth-form-container {
  @apply container md:w-2/3  rounded-lg flex flex-col justify-center items-center text-base animate-slideUp;
}

.auth-form-container .logo {
  @apply w-16 h-16 mr-0 md:mr-4 mb-4;
}

.auth-form-container .company-title {
  @apply font-quicksand text-4xl;
}

.auth-form-container .form-title {
  @apply text-black  p-3  mb-5  py-2 font-dongle text-3xl font-bold text-left w-full border-l-4 border-orange-600;
}

.auth-error-message {
  @apply text-white w-full font-bold py-2 px-3 text-lg mb-4 bg-red-500 rounded-lg flex  items-center;
}
</style>
