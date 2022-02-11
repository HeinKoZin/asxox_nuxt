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

    async generalDeleteApis(apiLink, data) {
      try {
        const res = await this.$axios.delete(apiLink, data);
        return res;
      } catch (error) {
        return error.response;
      }
    },

    // === toast ===
    toast(message, type) {
      this.$toast.open({
        message,
        type,
        position: "top-right",
        duration: 4000,
      });
    },

    // === check authenticated ===
    checkAuthenticated(type = null) {
      if (!this.$auth.$storage.getLocalStorage("loggedIn")) {
        if (type) this.$router.push("/auth");
        return false;
      }
      return true;
    },
  },
};
