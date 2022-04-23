export const theme = {
  state: () => ({ value: null, supportSystemTheme: false }),
  getters: {
    systemTheme: () => {
      return window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    },
  },
  mutations: {
    setTheme: (state, value) => (state.value = value),
    setSupportSystemTheme: (state) => (state.supportSystemTheme = true),
  },

  actions: {
    setTheme: ({ commit, getters }, data) => {
      localStorage.setItem("theme", data);
      const theme = data === "system" ? getters.systemTheme : data;
      commit("setTheme", theme);
    },
  },
};
