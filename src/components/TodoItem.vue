<template>
  <div class="todo-item">
    <input type="checkbox">
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
    ]),
    handleRemove() {
      this.removeTodo(this.todo.id)
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
