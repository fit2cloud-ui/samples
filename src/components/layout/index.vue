<template>
  <el-container class="layout-container">
    <slot>
      <layout-sidebar/>
      <el-container class="right-container" direction="vertical">
        <layout-header>
          <slot name="header">

          </slot>
        </layout-header>
        <layout-main/>
      </el-container>
    </slot>
  </el-container>
</template>

<script>
import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutSidebar from "@/components/layout/LayoutSidebar";
import LayoutMain from "@/components/layout/LayoutMain";

export default {
  name: "Layout",
  components: {LayoutMain, LayoutSidebar, LayoutHeader}
}
</script>

<style lang="scss" scoped>
@import "~@/styles/components/layout/variables.scss";

.layout-container {
  min-width: 1024px;
  height: 100%;
  background-color: $layout-bg-color;

  .right-container {
    position: relative;
  }
}
</style>
