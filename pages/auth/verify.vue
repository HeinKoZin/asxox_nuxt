<template>
  <AuthLayout>
    <div slot="form-title">Verify</div>
    <div class="w-full" slot="form-body">
      <AuthErrorMessage v-if="errors['error']">{{
        errors["error"]
      }}</AuthErrorMessage>
      <Input
        :data="verify"
        field="two_factor_code"
        type="text"
        label="Verification Code"
        :error="errors['two_factor_code'] ? errors['two_factor_code'][0] : null"
        class="w-full"
        isSubmit
        @submit="verifyMailOrPhone(verify.two_factor_code)"
      />
      <Button
        variant="primary"
        class="w-full mt-8"
        :disabled="!isFilledCode"
        @click.native="verifyMailOrPhone(verify.two_factor_code)"
      >
        <Spinner slot="loader" v-if="isSpin" />
        Verify
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
  // middleware: ["auth/authenticated"],
  data() {
    return {
      verify: {
        two_factor_code: "",
      },
      isFilledCode: false,
      errors: {},
      isSpin: false,
      isVerified: false,
    };
  },

  methods: {
    async verifyMailOrPhone(two_factor_code) {
      this.errorsReset();
      this.isSpin = true;
      const verify = this.$auth.$storage.getLocalStorage("verify");
      this.$auth.$storage.setLocalStorage("token", two_factor_code);
      if (verify.type === "reset") {
        const link = verify.path + two_factor_code;
        const res = await this.generalGetApis(link, null);
        if (res.data?.success) {
          this.toast("Successfully Verified", "success");
          this.isVerified = true;
          this.$router.push({
            name: "auth-new-password",
          });
        } else this.filterErrors(res);
      } else if (verify.type === "register") {
        const link = verify.path;
        const res = await this.generalPostApis(link, {
          two_factor_code,
        });
        if (res.success) {
          this.toast("Successfully Verified", "success");
          this.$router.push("/");
        } else this.filterErrors(res);
      } else if (verify.type === "login") {
        const link = verify.path;
        const res = await this.generalPostApis(link, {
          two_factor_code,
          email_or_phone: verify.email_or_phone,
        });
        if (res.success) {
          this.toast("Successfully Verified", "success");
          this.$auth.setUserToken(res.data.token);
          this.$auth.$storage.setUniversal("user", res.data.user_info);
          this.$auth.$storage.setUniversal("loggedIn", "true");
          this.$router.push("/");
        } else this.filterErrors(res);
      }
      this.isSpin = false;
    },
    errorsReset() {
      this.errors = {};
    },
    filterErrors(res) {
      if (res?.errors) this.errors = res.errors;
      else if (res.data?.data?.error) this.errors = res.data.data;
      else if (res.data?.error) this.errors = res.data;
    },
  },

  watch: {
    verify: {
      handler(newValue) {
        const { two_factor_code } = newValue;
        if (two_factor_code) this.isFilledCode = true;
        else this.isFilledCode = false;
      },
      deep: true,
    },
  },
};
</script>
