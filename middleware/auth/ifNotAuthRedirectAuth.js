export default ({ app, redirect }) => {
  const cookieRes = app.$cookies.get("auth.loggedIn");
  //   const cookieRes = app.$cookies.get("auth.user", { fromRes: true }); // get from res instead of req
  if (!cookieRes) {
    return redirect("/auth");
  }
};
