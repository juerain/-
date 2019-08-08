import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import NotFound from './views/NotFound'
import ProCenter from './views/ProCenter'
import Book from './views/Book'
import Video from './views/Video'
import Register from './views/Register'
import Login from './views/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/products",component:ProCenter},
    {path:"/book",component:Book},
    {path:"/video",component:Video},
    {path:"/details/:lid",component:Details,props:true},
    {path:"*",component:NotFound},
    {path:"/register",component:Register},
    {path:"/login",component:Login},
  ]
})
