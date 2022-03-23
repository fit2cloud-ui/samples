<template>
  <div class="tabs-demo">
    <dataease-tabs v-model="activeName" :font-color="fontColor" :active-color="activeColor" type="card">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>
  </div>
</template>

<script>
import DataeaseTabs from "@/components/dataease-tabs";
export default {
  name: "DETabsDemo",
  components: {
    DataeaseTabs,
  },
  props: {},
  data() {
    return {
      activeName: "first",
      fontColor: "#999999",
      activeColor: "#f18406"
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs-demo {
  background: #333333;
  padding: 50px;
}
</style>
