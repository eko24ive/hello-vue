<template>
    <div>
      This is home page
      <TodoInput/>
    </div>
</template>

<script>
  import TodoInput from '../components/TodoInput.vue';

  export default {
    name: 'Home',
    components: {
      TodoInput
    }
  }
</script>