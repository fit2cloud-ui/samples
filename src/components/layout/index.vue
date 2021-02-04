<template>
  <el-container class="layout-container">
    <slot>
      <layout-sidebar/>
      <layout-main>
        <layout-header>
          <slot name="header"></slot>
        </layout-header>
        <layout-view/>
      </layout-main>
    </slot>
  </el-container>
</template>

<script>
import LayoutSidebar from "@/components/layout/LayoutSidebar";
import LayoutMain from "@/components/layout/LayoutMain";
import LayoutHeader from "@/components/layout/LayoutHeader";
import LayoutView from "@/components/layout/LayoutView";

export default {
  name: "Layout",
  components: {LayoutView, LayoutHeader, LayoutMain, LayoutSidebar},
}
</script>
