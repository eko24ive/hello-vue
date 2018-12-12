<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-on:keypress="handleKeypress"
    />
  </div>
</template>

<script src="./TodoInput.js"/>