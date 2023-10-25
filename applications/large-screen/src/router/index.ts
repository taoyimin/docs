import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const routes = [
  {
    path: '/',
    name: 'blank',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/DemoView.vue')
  },
  {
    path: '/manageDispatch',
    name: 'manageDispatch',
    component: () => import('../views/manageDispatch/IndexView.vue')
  }
]

const beforeEach = (to, from, next) => {
  const userStore = useUserStore()
  const whiteList: string[] = ['login'];
  if (!whiteList.includes(to.name) && !userStore.token) {
    next({ name: 'login' })
  } else {
    next();
  }
}

let router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });
router.beforeEach(beforeEach)

export const buildRouter = () => {
  router = createRouter({ history: createWebHistory(import.meta.env.BASE_URL), routes });
  router.beforeEach(beforeEach)
  return router
}

export default router