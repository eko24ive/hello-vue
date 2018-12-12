<template>
    <div>
      <todo-input/>
      <todos-list/>
    </div>
</template>

<script>
  import TodoInput from '../components/TodoInput.vue';
  import TodosList from '../components/TodosList.vue';

  export default {
    name: 'Home',
    components: {
      TodoInput,
      TodosList
    }
  }
</script>