import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

// export default new Router({
//   mode: 'history',
//   routes: [
//     {
//       path: '/',
//       name: 'login',
//       component: () => import('./views/login/page')
//     },
//     {
//       path: '/dashboard',
//       component: Layout,
//       children: [{
//         path: 'dashboard',
//         name: 'Dashboard',
//         component: () => import('@/views/dashboard/index'),
//         meta: { title: 'Dashboard', icon: 'dashboard' }
//       }]
//     }
//   ]
// })

export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'),
        hidden: true
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/index'),
            meta: {title: 'Dashboard', icon: 'el-icon-s-home'}
        }]
    },
    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        name: 'Example',
        meta: {title: 'Example', icon: 'el-icon-s-help'},
        children: [{
            path: 'tree',
            name: 'Tree',
            component: () => import('@/views/tree/index'),
            meta: {title: 'Tree', icon: 'el-icon-s-platform'}
        },
        {
            path: 'form',
            name: 'Form',
            component: () => import('@/views/form/index'),
            meta: {title: 'Form', icon: 'el-icon-s-data'}
        }]
    },
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
