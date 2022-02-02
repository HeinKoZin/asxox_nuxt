<template>
  <AuthLayout>
    <div slot="form-title">Forget your password?</div>
    <div class="w-full" slot="form-body">
      <AuthErrorMessage v-if="errors['error']">{{
        errors["error"]
      }}</AuthErrorMessage>
      <Input
        :data="forgot"
        field="email_or_phone"
        type="text"
        label="Enter email or phone number"
        :error="errors['email_or_phone'] ? errors['email_or_phone'][0] : null"
        class="w-full"
      />
      <Button
        variant="primary"
        class="w-full mt-8"
        :disabled="!isFilledEmail"
        @click.native="forgetPasswordVerifyAndSendCode(forgot.email_or_phone)"
      >
        <Spinner slot="loader" v-if="isSpin" />
        Submit
      </Button>
    </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from "../../layouts/AuthLayout.vue";
import { generalMixins } from "../../mixins/general";
export default {
  components: { AuthLayout },
  mixins: [generalMixins],
  data() {
    return {
      forgot: {
        email_or_phone: "",
      },
      isFilledEmail: false,
      errors: {},
      isSpin: false,
    };
  },

  methods: {
    // === email phone search ===
    async forgetPasswordVerifyAndSendCode(email_or_phone) {
      this.isSpin = true;
      this.errorsReset();
      const res = await this.generalPostApis("/password/create", {
        email_or_phone,
      });

      this.errors = res ? (res.errors ? res.errors : res.data) : null;
      this.isSpin = false;
      if (!this.errors) {
        this.$router.push({
          name: "auth-verify",
          params: { path: "password/find/", type: "reset" },
        });
      }
    },
    errorsReset() {
      this.errors = {};
    },
  },

  watch: {
    forgot: {
      handler(newValue) {
        const { email_or_phone } = newValue;
        if (email_or_phone) {
          this.isFilledEmail = true;
        } else {
          this.isFilledEmail = false;
        }
      },
      deep: true,
    },
  },
};
</script>

<style lang="postcss" scoped></style>
