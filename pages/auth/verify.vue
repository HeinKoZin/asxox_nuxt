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
  middleware: "auth",
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
      console.log(this.$route);
      let link = "";
      let res = {};
      this.isSpin = true;
      if (this.$route.params.type === "reset") {
        link = this.$route.params.path + two_factor_code;

        res = await this.generalGetApis(link, null);
      } else {
        link = this.$route.params.path;
        res = await this.generalPostApis(link, {
          two_factor_code,
        });
      }
      if (res && res.errors) {
        this.errors = res.errors;
      } else if (res && res.data && res.data.error) {
        this.errors = res.data;
      } else {
        this.isSpin = false;
        this.$router.push("/");
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
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style lang="postcss" scoped></style>
