import Layout from "@/business/app-layout/horizontal-layout";

const ComponentsSetting = {
  sort: 2,
  path: "/components",
  component: Layout,
  name: "Components",
  meta: {
    title: "route.components",
    icon: "el-icon-s-grid",
    roles: ["admin"]
  },
  children: [
    // {
    //   path: "layout-content",
    //   component: () => import("@/business/components/layout-content"),
    //   name: "LayoutContent",
    //   meta: {
    //     title: "route.layout-content",
    //   }
    // },
    {
      path: "complex-table",
      component: () => import("@/business/components/complex-table"),
      name: "ComplexTable",
      meta: {
        title: "route.complex_table",
      }
    },
  ]
}
export default ComponentsSetting
