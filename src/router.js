import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

const Home = () => import('./views/Home.vue')
const Goods = () => import('./views/Goods.vue')
const About = () => import('./views/About.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/goods', name: 'Goods', component: Goods },
    { path: '/about', name: 'about', component: About }
  ]
})
