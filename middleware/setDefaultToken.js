export default async ({ app, $axios, $auth }) => {
  const cookieRes = app.$cookies.get("auth.user");
  if (!cookieRes) {
    const res = await $axios.get("/default-token");
    $auth.setUserToken(res.data.token);
  }
};
