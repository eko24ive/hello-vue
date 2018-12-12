const state = {
  todos: []
};

const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  },
  removeTodo(state, id) {
    const todoIndex = state.todos.findIndex(todo => todo.id === id);

    state.todos = [...state.todos.slice(0, todoIndex), ...state.todos.slice(todoIndex + 1)]
  }
};

const actions = {
  addTodo({ state, commit }, todo) {
    commit('addTodo', {
      ...todo,
      id: state.todos.length
    });
  },
  removeTodo({ commit }, id) {
    commit('removeTodo', id)
  }
};

const getters = {
  all(state) {
    return state.todos;
  },
  active(state) {
    return state.todos.filter(todo => !todo.done);
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
