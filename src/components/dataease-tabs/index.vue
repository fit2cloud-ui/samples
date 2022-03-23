<template>
  <el-tabs :class="['de-tabs',...tabClassName]" v-on="$listeners" v-bind="$attrs">
    <slot></slot>

  </el-tabs>
</template>

<script>
export default {
  name: "DataeaseTabs",
  props: {
    fontColor: String,
    activeColor: String,
  },
  watch: {
    fontColor: {
      immediate: true,
      handler(val) {
        this.changeStyle("--font-color", val);
      },
    },
    activeColor: {
      immediate: true,
      handler(val) {
        this.changeStyle("--active-color", val);
      },
    },
  },
  computed: {
    tabClassName() {
      const classes = [
        this.fontColor && "fontColor",
        this.activeColor && "activeColor",
      ];
      return classes;
    },
  },
  created() {},
  methods: {
    changeStyle(name, val) {
      let root = document.querySelector(":root");
      root.style.setProperty(name, val);
    },
  },
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
}
</style>
