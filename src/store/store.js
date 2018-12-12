import Vue from 'vue'
import Vuex from 'vuex'

import localStoragePlugin from './plugins/localStoragePlugin';

import todos from './modules/todos';
import visibilityFilter from './modules/visibilityFilter';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    fetchLocalStorage(state) {
        if (localStorage.getItem('todos') !== null) {
          state.todos.todos = JSON.parse(localStorage.getItem('todos'));
        }

        if (localStorage.getItem('visibilityFilter') !== null) {
          state.visibilityFilter.visibilityFilter = JSON.parse(localStorage.getItem('visibilityFilter'));
        }
    }
  },
  actions: {
    fetchLocalStorage({commit}) {
      commit('fetchLocalStorage');
    }
  },
  modules: {
    todos,
    visibilityFilter
  },
  plugins: [
    localStoragePlugin
  ]
});