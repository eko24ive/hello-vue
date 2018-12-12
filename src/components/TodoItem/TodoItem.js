import {mapActions} from 'vuex';

export default {
  name: 'TodoItem',
  data() {
    return {
      editing: false,
      editedTodo: ''
    }
  },
  props: {
    todo: {
      type: Object
    }
  },
  methods: {
    ...mapActions('todos', [
      'removeTodo',
      'toggleTodo',
      'editTodo'
    ]),
    setEdting(value) {
      this.editing = value;
    },
    editTodoHandle(e) {
      this.editTodo({
        text: e.target.value,
        id: this.todo.id
      });
      this.editing = false;
    }
  }
}