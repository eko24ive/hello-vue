import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'AppFooter',
  data() {
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
    ]),
    ...mapActions('visibilityFilter', [
      'setVisibilityFilter'
    ])
  }
}