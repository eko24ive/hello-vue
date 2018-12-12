const state = {
  visibilityFilter: 'all'
};

const mutations = {
  setVisibilityFilter(state, filter) {
    state.visibilityFilter = filter
  },
};

const actions = {
  setVisibilityFilter({ commit }, filter) {
    commit('setVisibilityFilter', filter);
  }
};

const getters = {
  visibilityFilter(state) {
    return state.visibilityFilter;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
