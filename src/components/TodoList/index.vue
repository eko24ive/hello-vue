<template>
  <div class="todo-list">
    <div v-for="todo in todos" v-bind:key="todo.id">
      <todo-item :todo="todo"/>
    </div>
  </div>
</template>

<script src="./TodoList.js" />