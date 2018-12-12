<template>
  <div>
    <input
      type="text"
      class="todo-input"
      v-model="todo"
      placeholder="What needs to be done?"
      @keydown.enter="createTodo(todo)"
    />
  </div>
</template>

<script src="./TodoInput.js"/>