<template>
  <el-container direction="vertical" class="layout-container">
    <layout-header>
    </layout-header>
    <el-container>
      <layout-sidebar/>
      <layout-main/>
    </el-container>
  </el-container>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutSidebar from "@/components/layout/LayoutSidebar";
import LayoutMain from "@/components/layout/LayoutMain";

export default {
  name: "Layout",
  components: {LayoutMain, LayoutSidebar, LayoutHeader},
  data() {
    return {
      collapse: false
    }
  }
}
</script>
