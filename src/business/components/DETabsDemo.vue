<template>
  <div class="tabs-demo">
    <h3>无配置状态</h3>
    <dataease-tabs v-model="activeName" type="card">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>
    <h3 style="margin-top:50px">选项卡样式</h3>
    <dataease-tabs v-model="activeName" :font-color="fontColor" :active-color="activeColor"
      :border-color="borderColor" :border-active-color="borderActiveColor" type="card">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>
    <h3 style="margin-top:50px">简洁的标签页</h3>
    <dataease-tabs v-model="activeName" :font-color="fontColor2" :active-color="activeColor2"
      :border-color="borderColor2">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </dataease-tabs>

    <h3 style="margin-top:50px">radioGroup类型标签页</h3>
    <dataease-tabs v-model="activeName" type="card" style-type="radioGroup" :font-color="fontColor"
      :active-color="activeColor3" :border-color="borderColor3"
      :border-active-color="borderActiveColor3">
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
      activeColor: "#f18406",
      borderColor: "#999999",
      borderActiveColor: "#f18406",
      // 简洁的标签页
      fontColor2: "#ffffff",
      activeColor2: "blue",
      borderColor2: "#999999",
      // 特殊的标签页 radioGroup类型
      borderColor3: "#999999",
      activeColor3: "#f18406",
      borderActiveColor3: "#f18406",
    };
  },
};
</script>

<style lang="scss" scoped>
.tabs-demo {
  background: #333333;
  padding: 50px;
  color: #999999;
}
</style>
