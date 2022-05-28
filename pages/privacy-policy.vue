<template>
  <div class="px-2 py-5 sm:px-0">
    <p v-if="$fetchState.pending">Loading...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else v-html="privacyPolicy"></div>
  </div>
</template>

<script>
export default {
  layout: "MainLayout",

  data() {
    return {
      data: null,
    };
  },

  computed: {
    privacyPolicy() {
      return this.data?.privacypolicy;
    },
  },

  methods: {
    async getPrivacyAndPolicy() {
      const res = await this.$axios.get("website-info");
      this.data = res.data.data;
    },
  },

  async fetch() {
    // await this.getCategories();
    await this.getPrivacyAndPolicy();
  },
};
</script>

<style lang="scss" scoped></style>
