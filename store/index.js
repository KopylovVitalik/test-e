export const state = () => {
  return {
    imagesList: [],
    filterType: "albumView",
    favoritesList: [],
  };
};

export const mutations = {
  SET_IMAGES_LIST: (state, payload) => {
    state.imagesList = payload;
  },
  SET_IMAGES_FILTER_TYPE: (state, payload) => {
    state.filterType = payload;
  },
  HANDLE_FAVORITES_LIST: (state, id) => {
    if (state.favoritesList.find((el) => el === id)) {
      state.favoritesList.splice(state.favoritesList.indexOf(id), 1);
    } else {
      state.favoritesList.push(id);
    }
  },
};
