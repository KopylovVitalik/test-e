export const state = () => {
  return {
    favoritesList: [],
  };
};

export const mutations = {
  HANDLE_FAVORITES_LIST: (state, id) => {
    if (state.favoritesList.find((el) => el === id)) {
      state.favoritesList.splice(state.favoritesList.indexOf(id), 1);
    } else {
      state.favoritesList.push(id);
    }
    localStorage.setItem("favoritesList", JSON.stringify(state.favoritesList));
  },
  INIT_FAVORITES_LIST: (state, list) => {
    state.favoritesList = list || [];
  },
};
