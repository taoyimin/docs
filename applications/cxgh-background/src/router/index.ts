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
    path: '/background',
    name: 'background',
    component: () => import('../views/Background.vue'),
    children: [
      {
        path: 'event',
        children: [
          {
            path: 'table',
            component: () => import('../views/event/EventTable.vue'),
          },
          {
            path: 'form',
            component: () => import('../views/event/EventForm.vue'),
          },
          {
            path: 'form/:id',
            component: () => import('../views/event/EventForm.vue'),
          },
          {
            path: 'descriptions/:id',
            component: () => import('../views/event/EventDescriptions.vue'),
          }
        ]
      }
    ]
  }
]

const beforeEach = (to, from, next) => {
  const userStore = useUserStore()
  const whiteList: string[] = ['login'];
  if (!whiteList.includes(to.name) && !userStore.userInfo?.access_token) {
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
