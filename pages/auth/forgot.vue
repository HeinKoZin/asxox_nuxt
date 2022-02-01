<template>
  <div class="w-full">
    <Input
      :data="forgot"
      field="emailOrPassword"
      type="text"
      label="Enter email or phone number"
      class="w-full"
    />
    <Button variant="primary" class="w-full mt-8" :disabled="!isFilledEmail">
      Submit
    </Button>
  </div>
</template>

<script>
export default {
  layout: "AuthLayout",
  data() {
    return {
      forgot: {
        emailOrPassword: "",
      },
      isFilledEmail: false,
      errors: {},
    };
  },

  methods: {},

  watch: {
    forgot: {
      handler(newValue) {
        const { emailOrPassword } = newValue;
        if (emailOrPassword) {
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
