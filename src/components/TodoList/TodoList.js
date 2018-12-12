import {mapGetters} from 'vuex';

import TodoItem from '../TodoItem';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  data: function (){
    return {}
  },
  computed: {
    ...mapGetters('todos', {
      todos: 'all'
    })
  }
}