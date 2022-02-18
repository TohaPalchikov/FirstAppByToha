
import {createRouter, createWebHistory}  from 'vue-router'

const routes = [
    {
        path: '/accounts',
        component:()=>import('@/components/MainAccounts.vue')
    },
    {
        path: '/aboutUs',
        component:()=>import('@/components/AboutUs.vue')
    },
    {
        path: '/account/:id',
        component:()=>import('@/components/UserPage.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router