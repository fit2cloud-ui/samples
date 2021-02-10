<template>
  <div class="filter-tools">
    <div class="filter-content">
      <quick-search placeholder="根据姓名、邮箱搜索" @exec="exec" v-if="showQuickSearch"/>
      <complex-search @exec="exec" :conditions="conditions" v-if="useComplexSearch"/>
    </div>
    <div class="filter-buttons">
      <el-button circle icon="el-icon-close" size="medium" @click="clean" v-if="conditions.length > 0"></el-button>
      <slot name="buttons">
        <el-button circle icon="el-icon-more" size="medium"></el-button>
        <el-button circle icon="el-icon-refresh" size="medium"></el-button>
      </slot>
    </div>
  </div>
</template>

<script>
import QuickSearch from "@/components/search-bar/quick-search";
import ComplexSearch from "@/components/search-bar/complex-search";
import {ComplexCondition, Condition} from "@/components/search-bar/model";

export default {
  name: "SearchBar",
  components: {ComplexSearch, QuickSearch},
  props: {
    useQuickSearch: {
      type: Boolean,
      default: true
    },
    useComplexSearch: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      condition: Condition,
      conditions: [
        new ComplexCondition({label: "姓名", operator: "like", value: "kun"})
      ]
    }
  },
  methods: {
    clean() {
      this.conditions = [];
    },
    exec(value) {
      console.log(value)
    }
  },
  computed: {
    showQuickSearch() {
      return this.useQuickSearch && this.conditions.length === 0;
    },
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
    overflow-x: auto;
  }

  .filter-buttons {
    @include flex-row(flex-end, center);
    flex: auto;
    height: 100%;
    margin-left: 10px;

    .el-button {
      border: none;
      box-shadow: 0 1px 5px rgba(0, 0, 0, .2);
      @include click-active-scale(0.9)
    }
  }
}
</style>
