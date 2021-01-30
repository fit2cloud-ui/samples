<template>
  <aside :class="['sidebar-container', {'is-collapse': collapse}]">
    <sidebar :collapse="collapse"/>
    <div class="collapse-button" @click="toggle">
      <i class="el-icon-caret-left"></i>
    </div>
  </aside>
</template>

<script>
import Sidebar from "@/components/layout/sidebar";

const getCollapseStatus = () => {
  return localStorage.getItem("App-Collapse") === "true";
}

const setCollapseStatus = status => {
  return localStorage.setItem("App-Collapse", status);
}

export default {
  name: "LayoutSidebar",
  components: {Sidebar},
  data() {
    return {
      collapse: getCollapseStatus()
    }
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse;
      setCollapseStatus(this.collapse);
    }
  }
}
</script>
