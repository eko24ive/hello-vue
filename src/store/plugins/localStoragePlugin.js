export default function localStoragePlugin(store) {
  store.subscribe((mutation, state) => {
    const [module] = mutation.type.split('/');

    switch (module) {
      case 'todos':
        localStorage.setItem('todos',JSON.stringify(state.todos.todos));
        break;
      case 'visibilityFilter':
        localStorage.setItem('visibilityFilter',JSON.stringify(state.visibilityFilter.visibilityFilter));
        break;
      default:
        break;
    }
  })
}