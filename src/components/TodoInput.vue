<template>
  <div>
    <input type="text" v-on:keypress="handleKeypress">
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';

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