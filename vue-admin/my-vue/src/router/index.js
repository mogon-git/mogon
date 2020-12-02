import Vue from 'vue'
import Router from 'vue-router'


const Home = () => import('@/components/Home');
const Head = () => import('@/components/Head');
const List = () => import('@/components/List');
const Shop = () => import('@/components/Shop');
const Detail = () => import('@/components/Detail');
const Sigle = () => import('@/components/Sigle');
const Login = () => import('@/components/Login');
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Head',
      name: 'Head',
      component: Head
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Sigle/:id',
      name: 'Sigle',
      component: Sigle
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
