import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/HomeView.vue'
import addNew from '@/views/addNew.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/addnew',
    name: 'addnew',
    component: addNew
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
