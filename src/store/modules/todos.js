const state = {
  todos: []
};

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  }
};

const actions = {
  addTodo({ commit }, todo) {
    commit('addTodo', todo);
  }
};

const getters = {
  all(state) {
    return state.todos;
  },
  completed(state) {
    return state.todos.filter(todo => todo.done);
  }
};

export default  {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
