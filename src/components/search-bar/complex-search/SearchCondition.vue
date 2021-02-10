<template>
  <div class="search-condition">
    <div>{{ condition.label }}</div>
    <div>{{ operator }}</div>
    <div class="condition-value">{{ condition.value }}</div>
    <i class="el-icon-close condition-remove" @click="remove"></i>
  </div>
</template>

<script>
import {ComplexCondition, OPERATORS} from "../model";

export default {
  name: "SearchCondition",
  props: {
    condition: ComplexCondition
  },
  data() {
    return {
      operators: OPERATORS
    }
  },
  computed: {
    operator() {
      for (let key in OPERATORS) {
        if (OPERATORS[key].value === this.condition.operator) {
          return this.$tk(OPERATORS[key].label);
        }
      }
      return ""
    }
  },
  methods: {
    remove(e) {
      this.$emit("remove", e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/mixins.scss";
@import "~@/styles/common/variables.scss";

.search-condition {
  @include flex-row(flex-start, center);
  position: relative;
  box-sizing: border-box;
  min-width: 100px;
  height: 30px;
  padding: 0 10px;
  border-radius: 16px;
  background-color: #E6E6E6;
  color: #424242;
  font-size: 14px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);

  & + .search-condition {
    margin-left: 10px;
  }

  div + div {
    margin-left: 4px;
  }

  .condition-value {
    font-style: italic;
  }

  .condition-remove {
    margin-left: 6px;
    margin-right: -6px;
    cursor: pointer;
    @include click-active-scale(0.9);

    &:hover {
      color: $--color-primary;
    }
  }
}
</style>
