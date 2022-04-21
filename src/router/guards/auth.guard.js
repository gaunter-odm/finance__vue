import User from "@/helpers/user.helper";

export const authGuard = (to, from, next) => {
  const isRole = User.isRole(to.meta.roles);
  const isAuth = User.loggedIn();
  if (isRole && isAuth) return next();
  else return next({ name: "Login" });
};
