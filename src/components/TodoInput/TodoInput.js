import {mapActions} from 'vuex';

export default {
  name: 'TodoInput',
  data() {
    return {
      todo: ''
    }
  },
  methods: {
    ...mapActions('todos', [
      'addTodo',
    ]),
    createTodo(todo) {
      if(todo === '') {
        return;
      }

      this.addTodo(todo);

      this.todo = "";
    }
  }
}