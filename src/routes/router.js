import { createRouter, createWebHistory } from 'vue-router'

import GamePage from '@/pages/GamePage'

const routes = [
  {
    path: '/',
    component: GamePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router