import User from "@/helpers/user.helper";

export const authPlugin = (store) => {
  const user = User.Get();
  if (user) store.commit("login", user);

  store.subscribe(({ type, payload }) => {
    switch (type) {
      case "login":
        const { name, role, bearer } = payload;
        User.Set({ name, role, bearer });
        break;

      case "logout":
        User.Clear();
    }
  });
};
