export default (app) => {
  const store = app.config.globalProperties.$store;
  const local = localStorage.getItem("theme");
  let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = local && local !== "system" ? local : dark ? "dark" : "light";

  store.commit("setTheme", theme);

  if (!window.matchMedia) return false;

  store.commit("setSupportSystemTheme");

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (
        localStorage.getItem("theme") &&
        localStorage.getItem("theme") !== "system"
      )
        return;

      const theme = dark ? "light" : "dark";
      dark = !dark;

      store.commit("setTheme", theme);
    });
};
