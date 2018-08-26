import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import App from './App.vue'
import Home from './components/Home.vue'

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})


new Vue({
  el: '#app',
  router,
  render(h) {
    return h(App)
  }
})