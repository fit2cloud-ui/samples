<template>
  <layout-content header="复合表格">
    <complex-table @select="select" :data="data" :columns="columns"
                   :search-config="searchConfig"
                   :pagination-config="paginationConfig" @search="search">
      <template #toolbar>
        <el-button @click="create">创建</el-button>
        <el-button>删除</el-button>
      </template>
      <el-table-column type="selection" fix/>
      <el-table-column label="ID" min-width="100" prop="id" fix/>
      <el-table-column label="姓名(可编辑)" min-width="100" prop="name" fix>
        <template v-slot:default="{row}">
          <fu-input-rw-switch v-model="row.name" size="mini"/>
        </template>
      </el-table-column>
      <el-table-column label="Email" min-width="100" prop="email"/>
      <el-table-column label="角色" min-width="100" prop="roles"/>
      <el-table-column label="语言(可编辑)" min-width="100">
        <template v-slot:default="{row}">
          <fu-select-rw-switch v-model="row.language" size="mini">
            <template #read>
              <el-tag disable-transitions v-if="row.language === 'zh-CN'" type="danger">中文</el-tag>
              <el-tag disable-transitions v-else>English</el-tag>
            </template>
            <el-option key="zh-CN" label="中文" value="zh-CN"/>
            <el-option key="en-US" label="English" value="en-US"/>
          </fu-select-rw-switch>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" :show="false">
        <template v-slot:default="{row}">
          {{ row.createTime | datetimeFormat }}
        </template>
      </el-table-column>

      <fu-table-operations :buttons="buttons" label="操作" fix/>
    </complex-table>
  </layout-content>
</template>

<script>
import {listUsers} from "@/api/user-management"
import ComplexTable from "@/components/complex-table";
import {hasPermissions} from "@/utils/permisstion"
import LayoutContent from "@/components/layout/LayoutContent";

const buttonClick = function (row) {
  console.log(this.label + ": " + row.id)
}

export default {
  name: "ComplexTableDemo",
  components: {LayoutContent, ComplexTable},
  data() {
    return {
      columns: [],
      buttons: [
        {
          label: "编辑", icon: "el-icon-edit", click: this.edit
        }, {
          label: "执行", icon: "el-icon-video-play", click: buttonClick
        }, {
          label: "删除", icon: "el-icon-delete", type: "danger", click: buttonClick
        }, {
          label: "删除(权限)", icon: "el-icon-delete", type: "danger", click: buttonClick,
          show: hasPermissions('admin') // 必须有admin权限才能看到
        }, {
          label: "复制", icon: "el-icon-document-copy", click: buttonClick
        }, {
          label: "定时任务", icon: "el-icon-timer", click: buttonClick
        }
      ],
      searchConfig: {
        quickPlaceholder: "按 姓名/邮箱 搜索",
        components: [
          {field: "name", label: "姓名", component: "FuComplexInput", defaultOperator: "eq"},
          {field: "email", label: "Email", component: "FuComplexInput"},
          {field: "age", label: "年龄", component: "FuComplexInputNumber"},
          {
            field: "status",
            label: "状态(可多选)",
            component: "FuComplexMixSelect",
            options: [
              {label: "运行中", value: "Running"},
              {label: "成功", value: "Success"},
              {label: "失败", value: "Fail"}
            ],
            multiple: true
          },
          {field: "create_time", label: "创建时间", component: "FuComplexDateTime"},
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
    create() {
      this.$router.push({name: "CreateFormDemo"})
    },
    select(selection) {
      console.log(selection)
    },
    edit(row) {
      console.log("编辑: ", row)
    },
    search(condition) {
      console.log(condition) // demo只查看搜索条件，没有搜索的实现
      const {currentPage, pageSize} = this.paginationConfig
      listUsers(currentPage, pageSize).then(response => {
        this.data = response.data.items
        this.paginationConfig.total = response.data.total
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
