<template>
  <div class="auth-container">
    <AnimationView>
      <div
        class="info-container-wrapper"
        :class="isLogin ? 'login' : 'register'"
      >
        <div class="relative w-full h-full">
          <img
            :src="require(`~/assets/img/auth/${getCoverImg}.png`)"
            class="auth-cover-img"
          />
        </div>
      </div>
    </AnimationView>

    <!-- Register -->
    <div
      class="form-container-wrapper"
      :class="!isLogin ? 'register' : ''"
      v-show="!isLogin"
    >
      <AnimationView>
        <div class="form-container">
          <img
            class="logo"
            src="~/assets/img/logo.png"
            alt="Logo"
            @click="$router.push('/')"
          />
          <h3 class="company-title">Asxox Ecommerce</h3>
          <h2 class="form-title mt-6">
            Register
            <span class="text-xl md:text-2xl float-right"
              >Have you already signed up?
              <a
                class="
                  underline
                  text-blue-600
                  cursor-pointer
                  underline-offset-2
                "
                @click.prevent="handleFormStatus"
                >Login In</a
              ></span
            >
          </h2>
          <AuthErrorMessage v-if="errors['message']">{{
            errors["message"]
          }}</AuthErrorMessage>
          <Input
            :data="register"
            field="name"
            type="text"
            label="Name"
            :error="errors['name'] ? errors['name'][0] : null"
            class="w-full"
          />
          <Input
            type="email"
            :data="register"
            field="email"
            :error="errors['email'] ? errors['email'][0] : null"
            label="Email or Phone"
            class="w-full"
          />
          <Input
            type="password"
            label="Password"
            :data="register"
            field="password"
            :error="errors['password'] ? errors['password'][0] : null"
            class="w-full"
          />
          <Input
            type="password"
            label="Confirm Password"
            :data="register"
            field="retype_password"
            :error="
              errors['retype_password'] ? errors['retype_password'][0] : null
            "
            class="w-full"
            isSubmit
            @submit="userRegister(register)"
          />
          <Input
            type="checkbox"
            label="Accept terms and conditions"
            :data="register"
            field="checkbox"
            class="w-full"
          />

          <p
            class="
              w-full
              text-center text-2xl
              font-dongle
              leading-4
              relative
              -mt-3
            "
          >
            <a href="#" class="text-blue-600 underline">Terms</a>
            <span> & </span>
            <a href="#" class="text-blue-600 underline">Conditions</a>
          </p>

          <Button
            variant="primary"
            class="w-full mt-7"
            :disabled="!isFilledRegister || isSpin"
            @click.native="userRegister(register)"
          >
            <Spinner slot="loader" v-if="isSpin" />
            Register
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
      </AnimationView>
    </div>

    <!-- Login -->
    <div
      class="form-container-wrapper"
      :class="isLogin ? 'login' : ''"
      v-show="isLogin"
    >
      <AnimationView>
        <div class="form-container">
          <img
            class="logo"
            src="~/assets/img/logo.png"
            alt="Logo"
            @click="$router.push('/')"
          />
          <h3 class="company-title">Asxox Ecommerce</h3>
          <h2 class="form-title mt-6">
            Login
            <span class="text-xl md:text-2xl float-right"
              >Are you new member?
              <a
                class="
                  text-blue-600
                  underline
                  cursor-pointer
                  underline-offset-2
                "
                @click.prevent="handleFormStatus"
                >Register here</a
              ></span
            >
          </h2>
          <Input
            type="text"
            :data="login"
            field="email"
            label="Email Or Phone"
            :error="errors['email'] ? errors['email'][0] : null"
            class="w-full"
          />
          <Input
            type="password"
            label="Password"
            :data="login"
            field="password"
            :error="
              (errors['password'] ? errors['password'][0] : null) ||
              (errors['error'] ? errors['error'] : null)
            "
            class="w-full"
            isSubmit
            @submit="userLogin(login, '/')"
          />
          <Input
            type="checkbox"
            label="Remember me"
            :data="login"
            field="checkbox"
            class="w-full"
          />

          <Button
            variant="primary"
            class="w-full"
            :disabled="isSpin"
            @click.native="userLogin(login, '/')"
          >
            <Spinner slot="loader" />
            Login
          </Button>

          <div class="forget-password-button">
            Forget Password?
            <a
              @click="$router.push('/auth/forgot')"
              class="text-blue-600 underline cursor-pointer underline-offset-2"
              >Reset Password</a
            >
          </div>

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
      </AnimationView>
    </div>
  </div>
</template>

<script>
import { generalMixins } from "@/mixins/general";
export default {
  mixins: [generalMixins],
  middleware: ["auth/authenticated"],
  data: () => ({
    login: {
      email: "",
      password: "",
      checkbox: false,
    },
    register: {
      name: "",
      email: "",
      password: "",
      retype_password: "",
      checkbox: false,
    },
    isLogin: true,
    isFilledLogin: false,
    isFilledRegister: false,
    isSpin: false,
    errors: {},
  }),
  methods: {
    // ့handle form status
    handleFormStatus() {
      this.isLogin = !this.isLogin;
      this.errorsReset();
    },
    // === login ===
    async userLogin(data, link) {
      this.isSpin = true;
      try {
        this.errorsReset();
        let res = await this.$auth.loginWith("local", {
          data,
        });
        if (res.data.success) {
          if (link) {
            this.toast("Successfully Logged in!", "success");
            this.$router.push("/");
          }
          this.$auth.setUserToken(res.data.data.token);
          this.$auth.$storage.setUniversal("user", res.data.data.user_info);
          this.$auth.$storage.setUniversal("loggedIn", "true");
        }
      } catch (err) {
        this.errors = err.response.data.data;
      }
      this.isSpin = false;
    },
    // === register ===
    async userRegister(data) {
      this.isSpin = true;
      try {
        this.errorsReset();
        const res = await this.generalPostApis("/register", data);
        if (res.success) {
          this.userLogin(data, null);
          this.$router.push({
            name: "auth-verify",
          });
          this.$auth.$storage.setLocalStorage("verify", {
            path: "/verify",
            type: "register",
          });
        } else this.errors = res.data || res;
      } catch (err) {
        this.errors = err.response.data.data;
      }
      this.isSpin = false;
    },
    errorsReset() {
      this.errors = {};
    },
  },
  computed: {
    //
    getCoverImg() {
      return this.isLogin ? "login" : "signup";
    },
  },
  watch: {
    // Check the length of email and password
    login: {
      deep: true,
      handler() {
        this.isFilledLogin =
          this.login.email.length > 0 && this.login.password.length > 0;
      },
    },
    register: {
      deep: true,
      handler() {
        this.isFilledRegister =
          this.register.name.length > 0 &&
          this.register.email.length > 0 &&
          this.register.password.length > 0 &&
          this.register.retype_password.length > 0 &&
          this.register.checkbox;
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.auth-container {
  @apply w-full min-h-screen   flex flex-col md:flex-row  text-base md:text-lg lg:text-xl;
}

.animation-area {
  @apply overflow-hidden w-full flex justify-center items-center;
}

/* NOTE: Form container */
.form-container-wrapper {
  @apply w-full md:w-5/12 min-h-screen bg-slate-100 p-6 hidden flex-col  box-border justify-center items-center -z-10 absolute;
}

.form-container-wrapper .form-container {
  @apply container md:w-3/5   rounded-lg flex flex-col justify-center items-center text-base animate-slideUp;
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

.form-container-wrapper.login {
  @apply right-0 z-50 flex;
}

.form-container-wrapper.register {
  @apply left-0 z-50 flex;
}

/* NOTE: Info container */
.info-container-wrapper {
  @apply w-full md:w-7/12 h-full  bg-slate-600   hidden md:flex flex-col  box-border absolute z-40;
}

.info-container-wrapper.login {
  @apply animate-loginSlideUp left-0;
}

.info-container-wrapper.register {
  @apply animate-registerSlideUp right-0;
}
.input-error-message {
  @apply text-red-600 w-full text-left text-sm font-sans font-semibold;
}

.auth-cover-img {
  @apply w-full h-full object-cover absolute;
}

.forget-password-button {
  @apply text-sm font-sans font-semibold py-2 mt-2;
}
</style>
