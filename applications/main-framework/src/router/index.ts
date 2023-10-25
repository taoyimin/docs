import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: "/micro-framework",
          name: "micro-framework",
          component: () => import("../views/MicroFrameWork.vue")
        },
        {
          path: "/excrement-resource/:path",
          name: "excrement-resource",
          component: () => import("../views/ExcrementResource.vue")
        },
        {
          path: "/excrement-main",
          component: () => import("../views/ExcrementMain.vue")
        }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const whiteList: string[] = ['login'];
  if (!whiteList.includes(to.name) && !userStore.token) {
    next({ name: 'login' })
  } else {
    next();
  }
});

export default router
