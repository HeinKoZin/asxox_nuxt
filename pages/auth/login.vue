<template>
  <div class="auth-container">
    <div class="form-container">
      <div class="auth-switch-container">
        <button
          class="auth-switch-button active"
          @click="$emit('switch', 'login')"
        >
          Login
        </button>
        <button class="auth-switch-button" @click="$emit('switch', 'register')">
          Register
        </button>
      </div>
      <div class="form-header">
        <img src="~/assets/img/logo.png" alt="Logo" class="logo" />
        <h2 class="title">Login to your account</h2>
      </div>
      <input name="email" type="email" placeholder="Email..." />
      <input name="password" type="password" placeholder="Password..." />
      <button class="login-btn">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  // layout: "MainLayout",
  name: "LoginPage",
};
</script>

<style lang="postcss" scoped>
.auth-container {
  @apply w-full h-screen bg-slate-600 flex justify-center items-center text-base md:text-lg lg:text-xl px-2 md:px-0;
}

.form-container {
  @apply w-full md:max-w-lg bg-white shadow-lg rounded-lg flex flex-col p-6 box-border;
}

.auth-switch-container {
  @apply flex justify-between items-center mb-4;
}

.auth-switch-container .auth-switch-button {
  @apply w-full text-center text-black bg-transparent px-4 py-2 uppercase border-b-2;
}

.auth-switch-container .auth-switch-button.active {
  @apply border-orange-600 hover:border-orange-700 text-orange-600;
}

.form-container .form-header {
  @apply flex flex-col md:flex-row  justify-start items-center mb-4;
}

.form-container .form-header .logo {
  @apply w-14 h-14 mr-0 md:mr-4 mb-2 md:mb-0;
}

.form-container .form-header .title {
  @apply text-lg md:text-lg lg:text-2xl font-bold font-dongle;
}

.form-container input {
  @apply w-full bg-slate-300 my-3 p-3 rounded-lg text-black placeholder:text-black text-lg focus:outline-none;
}

.form-container .login-btn {
  @apply w-full bg-orange-600 mt-7 p-2 rounded-lg  text-white  uppercase;
}
</style>
