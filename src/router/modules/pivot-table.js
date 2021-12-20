import Layout from "@/business/app-layout/horizontal-layout";

const PivotTable = {
  path: '/pivot-table',
  component: Layout,
  name: 'PivotTable',

  children: [{
      path: '/pivot-table',
      component: () => import('@/business/pivot-table'),
      name: 'PivotTable',
      meta: {
        title: 'PivotTable',
        icon: 'el-icon-data-analysis'
      },
    },
  ]
}
export default PivotTable
