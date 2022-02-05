export const generalMixins = {
  methods: {
    // === general apis ===
    async generalPostApis(apiLink, data) {
      try {
        const res = await this.$axios.post(apiLink, data);
        return res.data;
      } catch (error) {
        return error.response.data;
      }
    },
    async generalGetApis(apiLink, data) {
      try {
        const res = await this.$axios.get(apiLink, data);
        return res;
      } catch (error) {
        return error.response;
      }
    },
  },
};
