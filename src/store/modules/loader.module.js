export const loader = {
  state: () => ({ loader: false }),
  mutations: {
    enableLoader: (state) => (state.loader = true),
    disableLoader: (state) => (state.loader = false),
  },
};
