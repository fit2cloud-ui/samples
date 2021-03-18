<template>
  <layout-content>
    <template #header>
      路由组件缓存
    </template>
    <h4>
      缓存当前页面的组件，路由设置cache: true
    </h4>
    例子：
    <pre>
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
      }
    </pre>
    <h4>
      该组件没有缓存，在输入框内填写文本，然后打开详情页，再返回该页面，可以看到输入框内容为空。
    </h4>
    <h4>
      打开详情页时可以在控制台里看到destroyed触发，说明组件已销毁，没有缓存
    </h4>
    <el-input v-model="text" style="width: 200px;margin-right: 50px"></el-input>
    <el-button @click="to">打开详情页(已缓存)</el-button>
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "RouterKeepAlive",
  components: {LayoutContent},
  data() {
    return {
      text: "",
      created: false
    }
  },
  methods: {
    to() {
      this.$router.push({name: "RouterKeepAliveDetail"})
    }
  },
  destroyed() {
    console.log("RouterKeepAlive destroyed触发")
  }
}
</script>
