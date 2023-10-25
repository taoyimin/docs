import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'

// 判断当前嵌套路由的from路由是否在parent路由下，如果不是则替换to路由的parent路径
function redictRouter(to, from) {
  if (!from.matched.some(record => record.path.includes(to.meta.parent)) && to.matched.some(record => record.path.includes(to.meta.parent))) {
    return { path: to.path.replace(to.meta.parent, '') }
  }
}

// 需要暴露给主应用的嵌套路由
const backgroundRoutes = [
  {
    path: "totilet-list",
    component: () => import("../views/TotiletList.vue"),
    beforeEnter: redictRouter,
    meta: { parent: '/background' }
  },
  {
    path: "totilet-add",
    component: () => import("../views/TotiletAdd.vue"),
    beforeEnter: redictRouter,
    meta: { parent: '/background' }
  },
  {
    path: "totilet-update",
    component: () => import("../views/TotiletUpdate.vue"),
    beforeEnter: redictRouter,
    meta: { parent: '/background' }
  },
]

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
    path: '/',
    children: backgroundRoutes
  },
  {
    path: '/background',
    name: 'background',
    component: () => import('../views/Background.vue'),
    children: backgroundRoutes
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