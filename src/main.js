import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
Vue.config.productionTip = false;

import App from './App.vue';
import Home from './pages/Home.vue';

import store from './store/store';

const routes = [
  { path: '/', component: Home },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  store,
  router,
  created() {
    this.$store.dispatch('fetchLocalStorage')
  }
})
.$mount('#app')
