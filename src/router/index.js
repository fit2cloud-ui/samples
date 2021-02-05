import Vue from 'vue'
import Router from 'vue-router'

// 修复路由变更后报错的问题
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

import AppLayout from '@/business/app-layout/horizontal-layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: AppLayout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/components/redirect')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/business/login'),
    hidden: true
  },
  {
    path: '/',
    component: AppLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/business/dashboard'),
        name: 'Dashboard',
        meta: {title: 'Dashboard', icon: 'el-icon-s-marketing', affix: true}
      }
    ]
  },
  {
    path: '/example',
    component: AppLayout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'el-icon-s-help'
    },
    children: [
      {
        path: 'create',
        component: () => import('@/business/dashboard'),
        name: 'CreateArticle',
        meta: {title: 'Create Article', icon: 'el-icon-s-help'}
      },
      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/business/dashboard'),
        name: 'EditArticle',
        meta: {title: 'Edit Article', noCache: true, activeMenu: '/example/list'},
        hidden: true
      },
      {
        path: 'list',
        component: () => import('@/business/dashboard'),
        name: 'ArticleList',
        meta: {title: 'Article List'}
      }
    ]
  },
]

export const asyncRoutes = []

const createRouter = () => new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
