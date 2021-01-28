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

<style lang="scss" scoped>
@import "~@/styles/components/layout/variables.scss";
@import "~@/styles/common/mixins.scss";

.sidebar-container {
  position: relative;
  transition: width 0.28s;
  width: $sidebar-open-width;
  background-color: $sidebar-bg-color;
  background-image: $sidebar-bg-gradient;

  .collapse-button {
    @include flex-row(center, center);
    z-index: 99;
    position: absolute;
    top: calc(50% - 10px);
    right: -10px;
    height: 40px;
    width: 10px;
    box-sizing: border-box;
    color: #F4F4F5;
    background-color: $sidebar-bg-color;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: $menu-bg-color-hover;
    }
  }

  &.is-collapse {
    width: $sidebar-close-width;

    .collapse-button i {
      transform: rotate(180deg);
    }
  }
}
</style>
