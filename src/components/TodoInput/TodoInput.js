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