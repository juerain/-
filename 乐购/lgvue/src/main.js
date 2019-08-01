import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Carousel from './components/Carousel'

Vue.config.productionTip = false
Vue.component("carousel",Carousel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
