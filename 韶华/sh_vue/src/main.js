import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'

Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);

Vue.prototype.axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
