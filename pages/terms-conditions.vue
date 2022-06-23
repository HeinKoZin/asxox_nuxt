<template>
  <div class="px-2 py-5 sm:px-0">
    <h2 class="py-2 mb-4 text-3xl font-bold">Terms & Conditions</h2>
    <p v-if="$fetchState.pending">Loading...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else v-html="termCondition"></div>
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
    termCondition() {
      return this.data?.termcondition;
    },
  },

  methods: {
    async getWebInfo() {
      const res = await this.$axios.get("website-info");
      this.data = res.data.data;
    },
  },

  async fetch() {
    // await this.getCategories();
    await this.getWebInfo();
  },
};
</script>

<style lang="scss" scoped></style>
