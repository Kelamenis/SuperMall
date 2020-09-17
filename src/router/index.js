import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/profile',
    component: Profile,
  }
]
const router = new Router({
  routes,
  // 默认是hash模式，现在改为history模式
  mode: 'history'
})

export default router