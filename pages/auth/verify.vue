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
import { generalMixins } from "../../mixins/general";
import AuthLayout from "../../layouts/AuthLayout";
export default {
  components: { AuthLayout },
  mixins: [generalMixins],
  data() {
    return {
      verify: {
        two_factor_code: "",
      },
      isFilledCode: false,
      errors: {},
      isSpin: false,
    };
  },

  methods: {
    async verifyMailOrPhone(two_factor_code) {
      this.errorsReset();
      this.isSpin = true;
      if (this.$route.params.type === "reset") {
        const link = this.$route.params.path + two_factor_code;
        const res = await this.generalGetApis(link, null);
        this.filterErrors(res);
        if (res.success)
          this.$router.push({
            name: "auth-new-password",
            params: { token: two_factor_code },
          });
      } else {
        const link = this.$route.params.path;
        const res = await this.generalPostApis(link, {
          two_factor_code,
        });
        this.filterErrors(res);
        if (res.success) this.$router.push("/");
      }
      this.isSpin = false;
    },
    errorsReset() {
      this.errors = {};
    },
    filterErrors(res) {
      if (res.errors) {
        this.errors = res.errors;
      } else if (res.data.error) {
        this.errors = res.data;
      }
    },
  },

  watch: {
    verify: {
      handler(newValue) {
        const { two_factor_code } = newValue;
        if (two_factor_code) {
          this.isFilledCode = true;
        } else {
          this.isFilledCode = false;
        }
      },
      deep: true,
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="postcss" scoped></style>
