
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/views/index.vue')
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/login.vue')
    },
    {
        path: '/mouse',
        name: 'Mouse',
        meta: {
            title: '鼠标',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/views/vueUse.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router