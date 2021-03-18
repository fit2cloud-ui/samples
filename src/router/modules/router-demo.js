import Layout from "@/business/app-layout/horizontal-layout";

export default {
  sort: 1,
  path: "/router-demo",
  component: Layout,
  name: "RouterDemo",
  meta: {
    title: "route.router_demo",
    icon: "el-icon-share"
  },
  children: [
    {
      path: "docs",
      component: () => import("@/business/router-demo/RouterDocs"),
      name: "RouterDocs",
      meta: {
        title: "官方文档",
      }
    },
    {
      path: "menu",
      component: () => import("@/business/router-demo/RouterMenu"),
      name: "RouterMenu",
      meta: {
        title: "route.router_menu",
      }
    },
    {
      path: "detail",
      component: () => import("@/business/router-demo/RouterDetail"),
      name: "RouterDetail",
      hidden: true,
      meta: {
        activeMenu: "/router-demo/menu"
      }
    },
    {
      path: "keep-alive",
      component: () => import("@/business/router-demo/RouterKeepAlive"),
      name: "RouterKeepAlive",
      meta: {
        title: "route.router_keep_alive",
      }
    },
    {
      path: "keep-alive-detail",
      component: () => import("@/business/router-demo/RouterKeepAliveDetail"),
      name: "RouterKeepAliveDetail", // cache: true时，必须保证name与component中的name一致
      hidden: true,
      meta: {
        cache: true,
        activeMenu: "/router-demo/menu"
      }
    },
  ]
}
