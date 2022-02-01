<template>
  <AuthLayout>
    <div slot="form-title">New Password</div>
    <div class="w-full" slot="form-body">
      <Input
        :data="password_reset"
        field="email_or_phone"
        type="text"
        label="Email Address or Phone"
        :error="errors['email_or_phone'] ? errors['email_or_phone'][0] : null"
        class="w-full"
      />
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
        :disabled="!isFilled"
        @click.native="resetPassword(password_reset)"
      >
        Reset Password
      </Button>
    </div>
  </AuthLayout>
</template>

<script>
import { generalMixins } from "../../mixins/general";
import AuthLayout from "../../layouts/AuthLayout";
export default {
  components: { AuthLayout },
  mixins: [generalMixins],
  data() {
    return {
      password_reset: {
        email_or_phone: "",
        password: "",
        password_confirmation: "",
        token: "asfasdf",
      },
      isFilled: false,
      errors: {},
    };
  },

  methods: {
    // === need to add token to data ===
    async resetPassword(data) {
      const res = await this.generalPostApis("/password/reset", data);
      this.errors = res.error;
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
};
</script>

<style lang="postcss" scoped></style>
