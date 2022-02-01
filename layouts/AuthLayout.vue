<template>
  <div class="auth-layout-container">
    <div class="info-container-wrapper">Info</div>
    <div class="auth-form-container-wrapper">
      <Button
        variant="secondary"
        class="absolute font-bold top-40 left-20 hidden md:block"
        size="sm"
      >
        Back
      </Button>

      <AnimationView>
        <div class="auth-form-container">
          <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
          <h3 class="company-title">Asxox Ecommerce</h3>
          <h2 class="form-title mt-6"><slot name="form-title"></slot></h2>
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
  @apply w-full min-h-screen   flex flex-col md:flex-row  text-base md:text-lg lg:text-xl;
}

.info-container-wrapper {
  @apply w-full md:w-7/12 bg-slate-600   hidden md:flex flex-col p-6 box-border;
}

.auth-form-container-wrapper {
  @apply w-full md:w-5/12 min-h-screen flex justify-center items-center float-right p-6 relative;
}

.auth-form-container {
  @apply container md:w-1/2 bg-white  rounded-lg flex flex-col justify-center items-center text-base animate-slideUp;
}

.auth-form-container .logo {
  @apply w-16 h-16 mr-0 md:mr-4 mb-4;
}

.auth-form-container .company-title {
  @apply font-zen-kurenaido text-4xl;
}

.auth-form-container .form-title {
  @apply text-black  p-3  mb-5  py-2 font-dongle text-3xl font-bold text-left w-full border-l-4 border-orange-600;
}
</style>
