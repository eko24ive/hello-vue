<template>
    <div>
      <todo-input/>
      <TodoList/>
      <app-footer/>
    </div>
</template>

<script>
  import TodoInput from '../components/TodoInput';
  import TodoList from '../components/TodoList';
  import AppFooter from '../components/AppFooter';

  export default {
    name: 'Home',
    components: {
      TodoInput,
      TodoList,
      AppFooter
    }
  }
</script>