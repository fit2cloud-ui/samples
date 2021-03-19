<template>
  <layout-content>
    <template #header>
      路由与菜单
    </template>
    <h4>
      左侧菜单是根据路由生成的
      <br>
      路由项(例如: 详情页)不想在菜单中显示: hidden: true
      <br>
      菜单国际化: title: "route.router_demo"
      <br>
      详情页关联菜单(高亮显示菜单): activeMenu: "/router-demo/detail"
      <br>
      菜单排序: 一级菜单sort: 1 // 从小到大排序，没有sort的自动按modules目录中文件名顺序排序，并且排在有sort属性的后面
    </h4>
    例子：
    <pre>
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
        ]
      }
    </pre>
    <el-button @click="to">打开详情页</el-button>
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "RouterMenu",
  components: {LayoutContent},
  methods: {
    to() {
      this.$router.push({name: "RouterDetail"})
    }
  }
}
</script>
