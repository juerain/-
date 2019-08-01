import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header.vue'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Header",component:Header},
    {path:"/",component:index}
  ]
})
