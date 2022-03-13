export const authMixins = {
  methods: {
    ifAuthRedirectHome() {
      if (this.$auth.$storage.getLocalStorage("loggedIn")) {
        this.$router.push("/");
      }
    },
    ifNotAuthRedirectAuth() {
      if (!this.$auth.$storage.getLocalStorage("loggedIn")) {
        this.$router.push("/auth");
      }
    },
  },
};
