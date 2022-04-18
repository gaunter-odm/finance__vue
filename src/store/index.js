import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "dark",
  },
  getters: {},
  mutations: {
    toggleTheme: (state) =>
      (state.theme = state.theme === "dark" ? "light" : "dark"),
    setTheme: (state, themeName) => (state.theme = themeName),
  },
  actions: {},
  modules: {},
});
