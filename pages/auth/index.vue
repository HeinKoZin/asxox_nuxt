<template>
  <div class="auth-container">
    <div class="info-container-wrapper">Info</div>
    <div class="form-container-wrapper">
      <div class="form-container">
        <img class="logo" src="~/assets/img/logo.png" alt="Logo" />
        <h3 class="company-title">Asxox Ecommerce</h3>
        <h2 class="form-title mt-6">Login</h2>
        <Input
          type="email"
          :data="login"
          field="email"
          label="Email"
          class="w-full"
        />
        <Input
          type="password"
          label="Password"
          :data="login"
          field="password"
          class="w-full"
        />
        <Input
          type="checkbox"
          label="Remember me"
          :data="login"
          field="checkbox"
          class="w-full"
        />

        <Button :variant="isFilled ? 'primary' : 'secondary'" class="w-full">
          Login
        </Button>

        <div class="social-login-container">
          <button class="social-login-btn">
            <img src="~/assets/img/facebook.png" alt="Facebook" />
          </button>
          <p class="text-lg font-zen-kurenaido font-semibold">OR</p>
          <button class="social-login-btn">
            <img src="~/assets/img/google.png" alt="Google" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    login: {
      email: "",
      password: "",
      checkbox: false,
    },

    // checkbox: false,
    isFilled: false,
  }),
  methods: {
    //
  },
  computed: {
    //
  },
  mounted() {
    //
  },
  watch: {
    // Check the length of email and password
    login: {
      deep: true,
      handler() {
        this.isFilled =
          this.login.email.length > 0 && this.login.password.length > 0;
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.auth-container {
  @apply w-full min-h-screen  flex flex-col md:flex-row  text-base md:text-lg lg:text-xl;
}

/* NOTE: Form container */
.form-container-wrapper {
  @apply w-full md:w-5/12 min-h-screen bg-white p-6   flex flex-col  box-border justify-center items-center;
}

.form-container-wrapper .form-container {
  @apply container md:w-1/2 bg-white  rounded-lg flex flex-col justify-center items-center text-base;
}

.form-container .logo {
  @apply w-16 h-16 mr-0 md:mr-4 mb-4;
}

.form-container .company-title {
  @apply font-zen-kurenaido text-4xl;
}

.form-container .form-title {
  @apply text-black  p-3  mb-5  py-2 font-dongle text-3xl font-bold text-left w-full border-l-4 border-orange-600;
}

.social-login-container {
  @apply w-full flex justify-evenly items-center mt-6;
}

.social-login-container .social-login-btn {
  @apply rounded-full p-0 border-0 w-10 h-10;
}

/* NOTE: Info container */
.info-container-wrapper {
  @apply w-full md:w-7/12  bg-slate-600   hidden md:flex flex-col p-6 box-border;
}
</style>
