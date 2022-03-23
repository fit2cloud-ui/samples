<template>
  <el-tabs :class="['de-tabs',...tabClassName]" :style="tabStyle" v-on="$listeners" v-bind="$attrs">
    <slot></slot>
  </el-tabs>
</template>

<script>
export default {
  name: "DataeaseTabs",
  props: {
    fontColor: String,
    activeColor: String,
    // borderColor: String,
    // borderActiveColor: String,
  },
  computed: {
    tabStyle() {
      return {
        "--font-color": this.fontColor,
        "--active-color": this.activeColor,
      };
    },
    tabClassName() {
      const classes = [
        this.fontColor && "fontColor",
        this.activeColor && "activeColor",
        this.noBorder && "noBorder",
      ];
      return classes;
    },
  },
  data() {
    return {
      noBorder: false,
    };
  },
  created() {
    console.log(this.$attrs);
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
  &.noBorder {
  }
}
</style>
