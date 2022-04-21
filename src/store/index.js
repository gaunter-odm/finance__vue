import { createStore } from "vuex";
import { authPlugin } from "@/store/plugins/auth.plugin";
import { auth } from "@/store/modules/auth.module";
import { loader } from "@/store/modules/loader.module";

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
  modules: { auth, loader },
  plugins: [authPlugin],
});
