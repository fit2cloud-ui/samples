import Vue from "vue"
import Router from "vue-router"

// 加载modules中的路由
const modules = require.context("./modules", true, /\.js$/)

// 修复路由变更后报错的问题
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(Router)

import Layout from "@/business/app-layout/horizontal-layout"

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/components/redirect")
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/business/login"),
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/business/dashboard"),
        name: "Dashboard",
        meta: {title: "Dashboard", icon: "el-icon-s-marketing", affix: true}
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: 'el-icon-s-opportunity'
    },
    children: [
      {
        path: 'error1',
        component: () => import('@/business/error-page/error1'),
        name: 'error1',
        meta: { title: 'error1', noCache: true }
      },
      {
        path: 'error2',
        component: () => import('@/business/error-page/error2'),
        name: 'error2',
        meta: { title: 'error2', noCache: true }
      },
      {
        path: 'error3',
        component: () => import('@/business/error-page/error3'),
        name: 'error3',
        meta: { title: 'error3', noCache: true }
      },
      {
        path: 'error4',
        component: () => import('@/business/error-page/error4'),
        name: 'error4',
        meta: { title: 'error4', noCache: true }
      }
    ]
  },
]

/**
 * 用户登录后根据角色加载的路由
 */
export const rolesRoutes = [
  // 先按sort排序
  ...modules.keys().map(key => modules(key).default).sort((r1, r2) => {
    r1.sort ??= Number.MAX_VALUE
    r2.sort ??= Number.MAX_VALUE
    return r1.sort - r2.sort
  }),
  {path: "*", redirect: "/", hidden: true}
]

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
