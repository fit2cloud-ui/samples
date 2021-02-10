<template>
  <div class="complex-search">
    <search-condition v-for="(condition, i) in conditions" :key="i" :condition="condition" @remove="remove(i)"/>
    <search-component :condition="current" v-if="current"></search-component>
    <div class="condition-add" v-if="!current">
      <a @click="add">高级搜索</a>
    </div>
  </div>
</template>

<script>
import SearchCondition from "@/components/search-bar/complex-search/SearchCondition";
import SearchComponent from "@/components/search-bar/complex-search/SearchComponent";
import {ComplexCondition} from "@/components/search-bar/model";

const COMPONENT_FILES = require.context('./components', true, /\.vue$/)
const COMPONENTS = COMPONENT_FILES.keys().reduce((modules, key) => {
  const component = COMPONENT_FILES(key).default
  modules[component.name] = component
  return modules
}, {})

export default {
  name: "ComplexSearch",
  components: {SearchComponent, SearchCondition, ...COMPONENTS},
  props: {
    conditions: Array
  },
  data() {
    return {
      current: undefined,
    }
  },
  methods: {
    add() {
      this.conditions.push(new ComplexCondition({label: "姓名", operator: "like", value: "kun"}))
    },
    remove(index) {
      this.conditions.splice(index, 1);
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/mixins.scss";
@import "~@/styles/common/variables.scss";

.complex-search {
  @include flex-row(flex-start, center);
  width: 100%;
  height: 100%;
  overflow-x: auto;

  .condition-add {
    min-width: 80px;
    padding: 10px;
    color: $--color-primary;
    @include click-active-scale;
  }

  .condition-clean {
    @include flex-row(flex-end, center);
    flex: auto;
    height: 100%;

    .el-button {
      border: none;
      box-shadow: 0 1px 5px rgba(0, 0, 0, .2);
      @include click-active-scale;
    }
  }
}
</style>
