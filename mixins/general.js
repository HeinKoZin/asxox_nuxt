export const generalMixins = {
  methods: {
    // === general apis ===
    async generalPostApis(apiLink, data, redirectLink) {
      try {
        const res = await this.$axios.post(apiLink, data);

        if (redirectLink) this.$router.push(redirectLink);
      } catch (error) {
        return error.response.data.errors;
      }
    },
  },
};
