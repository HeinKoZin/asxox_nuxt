<template>
  <div class="auth-container">
    <div class="info-container-wrapper">Info</div>
    <div class="form-container-wrapper">
      <div class="form-container">
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
        <h2 class="title">Login</h2>
        <input name="email" type="email" placeholder="Email..." />
        <input name="password" type="password" placeholder="Password..." />
        <button class="login-btn">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.auth-container {
  @apply w-full h-screen  flex flex-col md:flex-row  text-base md:text-lg lg:text-xl;
}

/* NOTE: Form container */
.form-container-wrapper {
  @apply w-full md:w-1/2 bg-white   flex flex-col  box-border justify-center items-center;
}

.form-container-wrapper .form-container {
  @apply w-1/3 bg-white  rounded-lg flex flex-col;
}

.form-container .logo {
  @apply w-16 h-16 mr-0 md:mr-4 mb-4;
}

.form-container .title {
  @apply text-black bg-transparent px-4 py-2 font-dongle font-bold;
}

.form-container input {
  @apply w-full p-4 my-4 rounded-lg border border-gray-400 focus:outline-none;
}

/* NOTE: Info container */
.info-container-wrapper {
  @apply w-full md:w-1/2 bg-slate-600   flex flex-col p-6 box-border;
}
</style>
