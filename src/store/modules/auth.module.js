export const auth = {
  state: () => ({
    user: {
      name: null,
      role: null,
      bearer: null,
    },
  }),

  getters: {
    token: (state) => state.user.bearer,
  },
  mutations: {
    login: (state, data) => {
      state.user.role = data.role;
      state.user.name = data.name;
      state.user.bearer = data.bearer;
    },

    logout: (state) => {
      state.user.role = null;
      state.user.name = null;
      state.user.bearer = null;
    },
  },
};
