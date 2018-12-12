<template>
  <div class="app-footer" v-if="all.length">
    <div class="items-left">
      {{left}} items left
    </div>
    <div class="filter">
      <button v-for="filter in filters" v-bind:key="filter" class="filter-button">{{filter}}</button>
    </div>
    <div class="clear-completed">
      <button v-bind:class="{ hidden: !showClearButton }" @click="clearCompleted">Clear completed</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: 'AppFooter',
    data: function () {
      return {
        filters: [
          'all',
          'active',
          'completed'
        ]
      }
    },
    computed: {
      ...mapGetters('todos', [
        'all',
        'active',
        'completed'
      ]),
      left() {
        return this.active.length
      },
      showClearButton() {
        return this.completed.length > 0
      }
    },
    methods: {
      ...mapActions('todos', [
        'clearCompleted'
      ])
    }
  }
</script>

<style scoped>
.app-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.filter-button {
  border: 1px solid rgba(250, 128, 114, 0.39);
  border-radius: 3px;
  background: none;
  margin: 0 5px;
}

button {
  cursor: pointer;
}

.filter-button:hover, .filter-button.active {
  border-color: 1px solid rgba(250, 128, 114);
}

.filter-button:first-child {
  margin-left: 0;
};

.filter-button:last-child {
  margin-right: 0;
};

.clear-completed button {
  margin: 0;
  border: 0;
};

.clear-completed button:hover {
  text-decoration: underline;
};

button.hidden {
  opacity: 0;
}
</style>
