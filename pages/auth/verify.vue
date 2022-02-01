<template>
  <div class="w-full">
    <Input
      :data="verify"
      field="code"
      type="text"
      label="Verification Code"
      class="w-full"
    />
    <Button
      variant="primary"
      class="w-full mt-8"
      :disabled="!isFilledCode"
      @click.prevent="handleSubmit"
    >
      Verify
    </Button>
  </div>
</template>

<script>
export default {
  layout: "AuthLayout",
  data() {
    return {
      verify: {
        code: "",
      },
      isFilledCode: false,
      errors: {},
    };
  },

  methods: {
    handleSubmit() {
      const { verify } = this;
      const { code } = verify;
      if (code) {
        this.$store.dispatch("auth/verify", verify);
      }
    },
  },

  watch: {
    verify: {
      handler(newValue) {
        const { code } = newValue;
        if (code) {
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
