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
        @click.native="verfiyMailOrPhone(two_factor_code)"
      >
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
  middleware: "auth",
  mixins: [generalMixins],
  data() {
    return {
      verify: {
        two_factor_code: "",
      },
      isFilledCode: false,
      errors: {},
    };
  },

  methods: {
    verfiyMailOrPhone(two_factor_code) {
      this.errors = this.generalPostApis("/verify", { two_factor_code }, null);
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
