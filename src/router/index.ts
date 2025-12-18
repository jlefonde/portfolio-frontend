import { createWebHistory, createRouter } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
  routes,
})

export default router
export { routes }
