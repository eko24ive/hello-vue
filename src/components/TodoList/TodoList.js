import {mapGetters} from 'vuex';

import TodoItem from '../TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: {
    ...mapGetters('todos', [
      'all',
      'active',
      'completed'
    ]),
    ...mapGetters('visibilityFilter', [
      'visibilityFilter',
    ]),
    todos: function() {
      switch (this.visibilityFilter) {
        case 'all':
        default:
          return this.all;
        case 'completed':
          return this.completed;
        case 'active':
          return this.active;
      }
    }
  }
}