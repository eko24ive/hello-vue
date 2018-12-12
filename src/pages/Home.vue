<template>
    <div>
      <todo-input/>
      <todos-list/>
      <app-footer/>
    </div>
</template>

<script>
  import TodoInput from '../components/TodoInput.vue';
  import TodosList from '../components/TodosList.vue';
  import AppFooter from '../components/AppFooter.vue';

  export default {
    name: 'Home',
    components: {
      TodoInput,
      TodosList,
      AppFooter
    }
  }
</script>