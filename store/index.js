export const state = () => {
  return {
    imagesList: [],
    filterType: "albumView",
  };
};

export const mutations = {
  SET_IMAGES_LIST: (state, payload) => {
    state.imagesList = payload;
  },
  SET_IMAGES_FILTER_TYPE: (state, payload) => {
    state.filterType = payload;
  },
};
