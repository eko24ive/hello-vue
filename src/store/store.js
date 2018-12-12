import Vue from 'vue'
import Vuex from 'vuex'

import todos from './modules/todos';
import visibilityFilter from './modules/visibilityFilter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todos,
    visibilityFilter
  }
});