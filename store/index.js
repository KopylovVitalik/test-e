export const state = () => {
  return {
    favoritesListIds: [],
    modalOpen: false,
  };
};

export const mutations = {
  HANDLE_FAVORITES_LIST: (state, id) => {
    if (state.favoritesListIds.find((el) => el === id)) {
      state.favoritesListIds.splice(state.favoritesListIds.indexOf(id), 1);
    } else {
      state.favoritesListIds.push(id);
    }
    localStorage.setItem(
      "favoritesListIds",
      JSON.stringify(state.favoritesListIds)
    );
  },
  INIT_FAVORITES_LIST: (state, list) => {
    state.favoritesListIds = list || [];
  },
  CHANGE_MODAL_STATE: (state, payload) => {
    state.modalOpen = payload;
  },
};
