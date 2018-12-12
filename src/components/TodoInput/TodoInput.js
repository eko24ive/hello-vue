import {mapActions} from 'vuex';

export default {
  name: 'TodoInput',
  methods: {
    ...mapActions('todos', [
      'addTodo',
    ]),
    handleKeypress(e) {
      if(e.keyCode === 13) {

        if(e.target.value === '') {
          return;
        }

        this.addTodo({
          text: e.target.value,
          done: false
        })
        e.target.value = "";
      }
    }
  }
}