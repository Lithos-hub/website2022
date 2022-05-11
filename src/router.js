import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'Index',
        component: () => import('./views/Index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./views/About.vue'),
    },
    {
        path: '/cv',
        name: 'CV',
        component: () => import('./views/CV.vue'),
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('./views/Portfolio.vue'),
    },
]

const router = createRouter({
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
    history: createWebHistory(),
})

export default router;