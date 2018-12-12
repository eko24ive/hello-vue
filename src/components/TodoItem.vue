<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.done" v-on:click="handleCheckbox">
    <div class="todo-text">
      {{todo.text}}
    </div>
    <button v-on:click="handleRemove">x</button>
  </div>
</template>

<script>
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


</script>

<style scoped>
  .todo-item {
    display: flex;
    justify-content: space-between;
  }

  .todo-text {
    flex: 1;
  }
</style>
