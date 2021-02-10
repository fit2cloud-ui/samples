<template>
  <div class="quick-search">
    <i class="el-icon-search"></i>
    <label>
      <input :placeholder="placeholder" v-model="value" @blur="blur" @keydown="keydown"/>
    </label>
    <i class="el-icon-close clear-button" @mousedown.prevent="clear" v-if="value"/>
  </div>
</template>

<script>
export default {
  name: "QuickSearch",
  props: {
    placeholder: String
  },
  data() {
    return {
      value: ""
    }
  },
  methods: {
    blur() {
      this.$emit("exec", this.value)
    },
    keydown(e) {
      if (e.keyCode === 13) {
        this.$emit("exec", this.value)
      }
    },
    clear(e) {
      // 用mousedown代替click事件，避免触发blur
      if (e.button === 0) {
        this.value = ""
        this.$emit("exec", this.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/mixins.scss";
@import "~@/styles/common/variables.scss";

.quick-search {
  @include flex-row(flex-start, center);
  height: 100%;

  input {
    border: none;
    position: relative;
    font-size: 14px;
    padding: 10px;
    min-width: 120px;
    max-width: 200px;
    width: 200px;
    box-sizing: border-box;
    color: $--button-default-font-color;

    &::placeholder {
      color: $--input-placeholder-color;
    }
  }

  .clear-button {
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: $--color-primary;
    }

    &:active {
      transform: scale(0.9);
    }
  }
}
</style>
