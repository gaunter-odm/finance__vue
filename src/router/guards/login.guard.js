import User from "@/helpers/user.helper";

export const loginGuard = (to, from, next) => {
  const name = from.name ?? "Home";
  if (User.loggedIn()) return next({ name });

  return next();
};
