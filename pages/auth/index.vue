<template>
  <div class="auth-container">
    <div class="info-container-wrapper">Info</div>
    <div class="form-container-wrapper">
      <div class="form-container">
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
        <h2 class="title">Login</h2>
        <label for="email">Email</label>
        <input name="email" type="email" placeholder="Email..." />
        <label for="email">Password</label>
        <input name="password" type="password" placeholder="Password..." />
        <div class="flex flex-row items-center w-full mt-5 text-base">
          <input type="checkbox" name="remember" /><span>Remember me</span>
        </div>
        <button class="login-btn">Login</button>

        <div class="social-login-container">
          <button class="social-login-btn">
            <img src="~/assets/img/facebook.png" alt="Facebook" />
          </button>
          <p class="text-lg font-semibold">OR</p>
          <button class="social-login-btn">
            <img src="~/assets/img/google.png" alt="Google" />
          </button>
        </div>
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
  @apply w-full md:w-1/2 bg-white p-6   flex flex-col  box-border justify-center items-center;
}

.form-container-wrapper .form-container {
  @apply w-1/2 bg-white  rounded-lg flex flex-col justify-center items-center text-base;
}

.form-container .logo {
  @apply w-16 h-16 mr-0 md:mr-4 mb-4;
}

.form-container .title {
  @apply text-black bg-transparent mb-5  py-2 font-dongle text-xl font-bold text-left w-full border-b-2 border-gray-300;
}

.form-container label {
  @apply w-full text-left font-sans;
}
.form-container input {
  @apply w-full px-4 p-2 my-2 rounded-lg border border-gray-400 focus:outline-none;
}

.form-container input[type="checkbox"] {
  @apply h-4 md:h-5 w-4 md:w-5 mr-3 rounded-lg;
}

.form-container .login-btn {
  @apply w-full p-2 mt-5 bg-orange-600 uppercase rounded-lg text-white;
}

.social-login-container {
  @apply w-full flex justify-evenly items-center mt-6;
}

.social-login-container .social-login-btn {
  @apply rounded-full p-0 border-0 w-10 h-10;
}

/* NOTE: Info container */
.info-container-wrapper {
  @apply w-full md:w-1/2 bg-slate-600   flex flex-col p-6 box-border;
}
</style>
