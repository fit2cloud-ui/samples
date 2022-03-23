<template>
  <el-tabs :class="['de-tabs',...tabClassName]" :style="tabStyle" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </el-tabs>
</template>

<script>
export default {
  name: "DataeaseTabs",
  props: {
    /* 颜色可以单词，如red；也可以是颜色值 */
    // 字体颜色
    fontColor: String,
    // 激活字体颜色
    activeColor: String,
    // 边框颜色 如果是none就无边框 如果是none Card类型激活的下滑线也消失
    borderColor: String,
    // 激活边框颜色 目前只针对card类型
    borderActiveColor: String,
  },
  computed: {
    tabStyle() {
      return {
        "--font-color": this.fontColor,
        "--active-color": this.activeColor,
        "--border-color": this.borderColor,
        "--border-active-color": this.borderActiveColor,
      };
    },
    tabClassName() {
      const classes = [
        this.fontColor && "fontColor",
        this.activeColor && "activeColor",
        this.noBorder ? "noBorder" : this.borderColor && "borderColor",
        this.borderActiveColor && "borderActiveColor",
      ];
      return classes;
    },
    noBorder() {
      return this.borderColor === "none";
    },
    noBorderActive() {
      return this.borderActiveColor === "none";
    },
  },
  data() {
    return {};
  },
  created() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/common/variables";
.de-tabs {
  &.fontColor {
    ::v-deep.el-tabs__item {
      color: var(--font-color);
      &.is-active {
        color: $--color-primary;
      }
      &:hover {
        color: $--color-primary;
      }
    }
  }
  &.activeColor {
    ::v-deep.el-tabs__item {
      &.is-active {
        color: var(--active-color);
      }
      &:hover {
        color: var(--active-color);
      }
    }
    ::v-deep.el-tabs__active-bar {
      background-color: var(--active-color);
    }
  }
  // card样式的边框
  &.noBorder.el-tabs--card {
    ::v-deep > .el-tabs__header {
      border-bottom: none;
      .el-tabs__nav {
        border: none;
      }
      .el-tabs__item {
        border-left: none;
      }
      .el-tabs__item.is-active {
        border-bottom: none;
      }
    }
  }
  &.borderActiveColor.el-tabs--card {
    ::v-deep > .el-tabs__header .el-tabs__item.is-active {
      border-bottom-color: var(--border-active-color);
    }
  }
  &.borderColor.el-tabs--card {
    ::v-deep > .el-tabs__header {
      border-bottom-color: var(--border-color);
      .el-tabs__nav {
        border-color: var(--border-color);
      }
      .el-tabs__item {
        border-left-color: var(--border-color);
      }
    }
  }

  // 简洁样式的边框
  &.noBorder {
    ::v-deep .el-tabs__nav-wrap::after {
      background: none;
    }
  }
  &.borderColor {
    ::v-deep .el-tabs__nav-wrap::after {
      background: var(--border-color);
    }
  }
}
</style>
