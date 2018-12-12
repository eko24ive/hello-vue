<template>
  <div>
    <input type="text" v-on:keypress="handleKeypress" placeholder="What needs to be done?">
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'TodoInput',
    methods: {
      ...mapActions('todos', [
        'addTodo',
      ]),
      handleKeypress(e) {
        if(e.keyCode === 13) {
          this.addTodo({
            text: e.target.value,
            done: false
          })
          e.target.value = "";
        }
      }
    }
  }
</script>

<style scoped>
  input {
    width: 100%;
    font-size: 24px;
    padding: 5px;
    border: 0;
    box-shadow: 2px -2px 8px 1px rgba(0, 0, 0, 0.13);
  }
</style>
