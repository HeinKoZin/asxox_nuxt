export default async ({ app, $axios, $auth }) => {
  const cookieRes = app.$cookies.get("auth.loggedIn");

  if (!cookieRes) {
    const res = await $axios.post("/default-token", { email: 'default@asxox.com.mm', password: 'Default@#Ecommerce' });
    $auth.setUserToken(res.data.token);
  }
};
