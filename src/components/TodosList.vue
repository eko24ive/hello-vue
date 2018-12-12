<template>
  <div class="todo-list">
    <div v-for="todo in todos" v-bind:key="todo.id">
      <todo-item :todo="todo"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import TodoItem from './TodoItem';

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
</script>

<style scoped>
  .todo-list {
    margin-top: 15px;
  }
</style>
