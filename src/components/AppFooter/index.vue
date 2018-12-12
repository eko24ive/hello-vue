<template>
  <div class="app-footer" v-if="all.length">
    <div class="items-left">
      {{left}} items left
    </div>
    <div class="filter">
      <button v-for="(filter, i) in filters" :key="i" class="filter-button" @click="setVisibilityFilter(filter)">{{filter}}</button>
    </div>
    <div class="clear-completed">
      <button class="clear-completed-button" :class="{ 'hidden': !showClearButton }" @click="clearCompleted">Clear completed</button>
    </div>
  </div>
</template>

<script src="./AppFooter.js"/>