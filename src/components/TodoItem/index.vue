<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.done" v-on:click="handleCheckbox">
    <div class="todo-text">
      {{todo.text}}
    </div>
    <button v-on:click="handleRemove">x</button>
  </div>
</template>

<script src="./TodoItem.js"/>