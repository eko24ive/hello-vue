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
  },
  toggleTodo(state, id) {
    state.todos = state.todos.map(todo => {
      if (todo.id === id) {
        const {done, ...rest} = todo;

        return {
          done: !done,
          ...rest
        };
      }

      return todo;
    })
  },
  clearCompleted(state) {
    state.todos = state.todos.filter(todo => !todo.done)
  },
  editTodo(state, {text, id}) {
    state.todos = state.todos.map(todo => {
      if(todo.id === id) {
        const {done, id} = todo;

        return {
          text,
          done,
          id,
        }
      }

      return todo;
    })
  }
};

const actions = {
  addTodo({ state, commit }, todo) {
    if(todo !== '') {
      commit('addTodo', {
        text: todo,
        done: false,
        id: state.todos.length
      });
    }

  },
  removeTodo({ commit }, id) {
    commit('removeTodo', id)
  },
  toggleTodo({ commit }, id) {
    commit('toggleTodo', id)
  },
  clearCompleted({commit}) {
    commit('clearCompleted')
  },
  editTodo({commit}, {text, id}) {
    commit('editTodo', {text, id});
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
