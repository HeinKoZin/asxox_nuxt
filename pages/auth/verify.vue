<template>
  <AuthLayout>
    <div slot="form-title">Verify</div>
    <div class="w-full" slot="form-body">
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
        @click.native="verfiyMailOrPhone(verify.two_factor_code)"
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
  // middleware: "auth",
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
    async verfiyMailOrPhone(two_factor_code) {
      this.isSpin = true;
      const res = await this.generalPostApis("/verify", { two_factor_code });
      console.log(res);
      if (res.errors) {
        this.errors = res.errors;
      } else if (res.data.error) {
        this.errors = res.data.error;
      } else {
        this.isSpin = false;
        this.$router.push("/auth/verify");
      }
      this.isSpin = false;
    },
    errorsReset() {
      this.errors = {};
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
};
</script>

<style lang="postcss" scoped></style>
