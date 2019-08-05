import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"



import Family from "./components/family/home.vue"
import photo from "./components/family/common/photo.vue"







Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/Family',component:Family},
    {path:'/photo',component:photo},
  ]
})
