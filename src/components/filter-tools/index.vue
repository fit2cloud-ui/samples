<template>
  <div class="filter-tools">
    <div class="filter-content">
      <quick-search placeholder="根据 ID/名称 搜索" @exec="exec"/>
      <complex-search @exec="exec"/>
    </div>
    <div class="filter-buttons">
      <el-button circle icon="el-icon-close" size="medium"></el-button>
      <slot name="buttons">
        <el-button circle icon="el-icon-more" size="medium"></el-button>
        <el-button circle icon="el-icon-refresh" size="medium"></el-button>
      </slot>
    </div>
  </div>
</template>

<script>
import QuickSearch from "@/components/filter-tools/QuickSearch";
import ComplexSearch from "@/components/filter-tools/complex-search";

export default {
  name: "FilterTools",
  components: {ComplexSearch, QuickSearch},
  methods: {
    exec(value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/mixins.scss";

.filter-tools {
  @include flex-row(flex-start, center);
  position: relative;
  width: 100%;
  height: 48px;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: #D5D5D5;
  }

  .filter-content {
    @include flex-row(flex-start, center);
    width: 100%;
    height: 100%;
  }

  .filter-buttons {
    @include flex-row(flex-end, center);
    flex: auto;
    height: 100%;

    .el-button {
      border: none;
      box-shadow: 0 1px 5px rgba(0, 0, 0, .2);

      &:active {
        transform: scale(0.95);
      }
    }
  }
}
</style>
