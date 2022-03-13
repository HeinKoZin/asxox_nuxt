<template>
  <AuthLayout>
    <div slot="form-title">New Password</div>
    <div class="w-full" slot="form-body">
      <AuthErrorMessage v-if="errors['error']">{{
        errors["error"]
      }}</AuthErrorMessage>
      <!-- <Input
        :data="password_reset"
        field="email_or_phone"
        type="text"
        label="Email Address or Phone"
        :error="errors['email_or_phone'] ? errors['email_or_phone'][0] : null"
        class="w-full"
      /> -->
      <Input
        :data="password_reset"
        field="password"
        type="password"
        label="New Password"
        :error="errors['password'] ? errors['password'][0] : null"
        class="w-full"
      />
      <Input
        :data="password_reset"
        field="password_confirmation"
        type="password"
        label="Confirm Password"
        class="w-full"
        :error="errors['password'] ? errors['password'][0] : null"
      />
      <Button
        variant="primary"
        class="w-full mt-8"
        :disabled="!isFilled || isSpin"
        @click.native="resetPassword(password_reset)"
      >
        <Spinner slot="loader" v-if="isSpin" />
        Reset Password
      </Button>
    </div>
  </AuthLayout>
</template>

<script>
import { generalMixins } from "@/mixins/general";
import AuthLayout from "@/layouts/AuthLayout";
export default {
  components: { AuthLayout },
  mixins: [generalMixins],
  data() {
    return {
      password_reset: {
        email_or_phone: this.$auth.$storage.getLocalStorage("forgot_mail"),
        password: "",
        password_confirmation: "",
        token: this.$auth.$storage.getLocalStorage("token"),
      },
      isFilled: false,
      errors: {},
      isSpin: false,
    };
  },

  methods: {
    // === need to add token to data ===
    async resetPassword(data) {
      this.isSpin = true;
      const res = await this.generalPostApis("/password/reset", data);
      if (res.success) {
        this.$toast.open({
          message: "Password was successfully changed!",
          type: "success",
          position: "top-right",
          duration: 5000,
        });
        this.$auth.$storage.removeLocalStorage("forgot_mail");
        this.$router.push("/auth/");
      } else this.errors = res.errors || res.data;
      this.isSpin = false;
    },
    errorsReset() {
      this.errors = {};
    },
  },
  watch: {
    password_reset: {
      deep: true,
      handler() {
        this.isFilled =
          this.password_reset.email_or_phone.length > 0 &&
          this.password_reset.password.length > 0 &&
          this.password_reset.password_confirmation.length > 0;
      },
    },
  },
  mounted() {
    if (this.$auth.$storage.getLocalStorage("loggedIn")) {
      this.$router.push("/");
    }
  },
};
</script>

<style lang="postcss" scoped></style>
