export const generalMixins = {
  methods: {
    // === general apis ===
    async generalPostApis(apiLink, data) {
      try {
        const res = await this.$axios.post(apiLink, data);
      } catch (error) {
        return error.response.data;
      }
    },
  },
};
