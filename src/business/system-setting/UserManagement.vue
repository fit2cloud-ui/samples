<template>
  <layout-content>
    <fu-dynamic-table header="动态表格"
                      :data="data"
                      :buttons="buttons"
                      :search-config="searchConfig"
                      :pagination-config="paginationConfig"
                      @search="search">
      <el-table-column label="姓名" min-width="100" prop="name" fix/>
      <el-table-column label="Email" min-width="100" prop="email"/>
      <el-table-column label="角色" min-width="100" prop="roles"/>
      <el-table-column label="语言" min-width="100">
        <template v-slot:default="{row}">
          <el-tag v-if="row.language === 'zh-CN'" type="danger" size="small">中文</el-tag>
          <el-tag v-if="row.language === 'en-US'" size="small">英文</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" :show="false">
        <template v-slot:default="{row}">
          {{ row.createTime | datetimeFormat }}
        </template>
      </el-table-column>
    </fu-dynamic-table>
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";
import {listUsers} from "@/api/user-management"

export default {
  name: "UserManagement",
  components: {LayoutContent},
  data() {
    return {
      buttons: [
        {
          label: "编辑", icon: "el-icon-edit", click: (row) => {
            console.log("编辑:" + row.username)
          }
        }, {
          label: "执行", icon: "el-icon-video-play", click: (row) => {
            console.log("执行:" + row.username)
          }
        }, {
          label: "删除", icon: "el-icon-delete", type: "danger", click: (row) => {
            console.log("删除:" + row.username)
          }, show: true
        }, {
          label: "复制", icon: "el-icon-document-copy", click: (row) => {
            console.log("复制:" + row.username)
          }
        }, {
          label: "定时任务", icon: "el-icon-timer", click: (row) => {
            console.log("定时任务:" + row.username)
          }
        }
      ],
      searchConfig: {
        quickPlaceholder: "按 姓名/邮箱 搜索",
        components: [
          {field: "name", label: "姓名", component: "FuInputComponent", defaultOperator: "eq"},
          {field: "email", label: "Email", component: "FuInputComponent"},
          {
            field: "status",
            label: "状态",
            component: "FuSelectComponent",
            options: [
              {label: "运行中", value: "Running"},
              {label: "成功", value: "Success"},
              {label: "失败", value: "Fail"}
            ],
            multiple: true
          },
          {field: "create_time", label: "创建时间", component: "FuDateTimeComponent"},
        ]
      },
      paginationConfig: {
        currentPage: 1,
        pageSize: 5,
        total: 0,
      },
      data: [],
    }
  },
  methods: {
    search(condition) {
      console.log(condition) // demo只查看搜索条件，没有搜索的实现
      const {currentPage, pageSize} = this.paginationConfig
      listUsers(currentPage, pageSize).then(response => {
        console.log(response)
        this.paginationConfig.total = response.data.length
        this.data = response.data.items
      })
    }
  },
  created() {
    this.search()
  }
}
</script>

<style scoped>

</style>
