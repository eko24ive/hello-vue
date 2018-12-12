import {mapActions} from 'vuex';

export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    ...mapActions('todos', [
      'removeTodo',
      'toggleTodo',
    ]),
    handleRemove() {
      this.removeTodo(this.todo.id)
    },
    handleCheckbox() {
      this.toggleTodo(this.todo.id);
    }
  }
}