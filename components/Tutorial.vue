<template>
  <div>
    <div class="login">Login</div>
    <div>
      <label>Email</label>
      <input type="text" v-model="login.email" />
    </div>
    <div>
      <label>Password</label>
      <input type="text" v-model="login.password" />
    </div>
    <div>
      <label for="">Remember Me</label>
      <input type="checkbox" name="" v-model="remember_me" id="" />
    </div>
    <div>
      <button @click="userLogin(login)">Submit</button>
    </div>
    <div>
      <button @click="logout">Log Out</button>
      <button @click="refresh">Refresh Token</button>
      <a href="https://asxox.com.mm/oauth/google"
        ><button>Login With Google</button></a
      >
    </div>
    <div>{{ $auth.$storage.getLocalStorage("user") }}</div>
    <div>
      <div class="register">Register</div>
      <div>
        <label>User Name</label>
        <input type="text" v-model="register.name" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" v-model="register.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="register.password" />
      </div>
      <div>
        <label>Retype Password</label>
        <input type="text" v-model="register.retype_password" />
      </div>
      <div>
        <label for="">Accept Terms</label>
        <input type="checkbox" name="" v-model="register.accept_terms" id="" />
      </div>
      <button @click="verfiyMailOrPhone(124555)">Verify</button>
      <button @click="userRegister(register)">Register</button>
    </div>
    <div>
      <div>
        <label>Mail Or Phone</label>
        <input type="text" v-model="forget.mailOrPhone" />
      </div>
      <button @click="verfiyMailOrPhone(124555)">Verify</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { generalMixins } from "../mixins/general";
export default {
  mixins: [generalMixins],
  computed: {
    ...mapGetters(["loggedInUser"]),
  },
  data() {
    return {
      login: {
        email: "yeyintko.mkn@gmail.com",
        password: "testadmin",
      },
      register: {
        name: "test",
        email: Math.random().toString(36).substring(2, 7) + "@gmail.com",
        password: "testing123",
        retype_password: "testing123",
        accept_terms: false,
      },
      forget: {
        mailOrPhone: "",
      },
      remember_me: true,
    };
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout();

        // === delete data from cookie, localStorage, vuex ===
        this.$auth.$storage.removeUniversal("loggedIn");
        this.$auth.$storage.removeUniversal("user");
      } catch (err) {
        console.log(err);
      }
    },
    async refresh() {
      try {
        await this.$auth.refreshTokens();
      } catch (err) {
        console.log(err);
      }
    },
    async userLogin(data) {
      console.log(data);
      try {
        let res = await this.$auth.loginWith("local", {
          data,
        });
        console.log(res);
        // === set user token ===
        this.$auth.setUserToken(res.data.data.token);

        // === set data to cookie, localStorage, vuex ===
        this.$auth.$storage.setUniversal("user", res.data.data.user_info);
        this.$auth.$storage.setUniversal("loggedIn", true);
      } catch (err) {
        console.log(err);
      }
    },
    userRegister(data) {
      try {
        // === register first ===
        this.generalPostApis("/register", data, null);

        // === then login ===
        this.userLogin(data);
      } catch (err) {
        console.log(err);
      }
    },

    verfiyMailOrPhone(two_factor_code, redirectLink) {
      this.generalPostApis("/verify", { two_factor_code }, redirectLink);
    },

    forgetPasswordVerifyAndSendCode(mailOrPhone) {
      this.generalPostApis("/password/create", { mailOrPhone }, redirectLink);
    },

    // === need to add token to data ===
    resetPassword(data, redirectLink) {
      this.generalPostApis("/password/reset", data, redirectLink);
    },
  },
};
</script>