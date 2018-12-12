<template>
  <div class="todo-item">
    <input type="checkbox" v-model="todo.done" @click="toggleTodo(todo.id)">
    <div class="todo-text-input-wrapper" @dblclick="setEdting(true)">
      <span class="text" v-if="!editing" :class="{ 'strikethrough': todo.done }">
        {{todo.text}}
      </span>
      <input
        type="text"
        class="todo-edit"
        v-if="editing"
        :value="todo.text"
        @keyup.enter="editTodoHandle"
        @keyup.esc="setEdting(false)"
      />
    </div>
    <button @click="removeTodo(todo.id)">x</button>
  </div>
</template>

<script src="./TodoItem.js"/>