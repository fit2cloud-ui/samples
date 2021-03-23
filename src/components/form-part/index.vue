<template>
  <div class="form-part">
    <h3 class="form-part__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </h3>
    <div class="form-part__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormPart",
  props: {
    header: String
  }
}
</script>

<style lang="scss">
@import "~@/styles/common/variables.scss";

.form-part {
  padding: 10px;

  & + &:before {
    content: "";
    display: block;
    width: 100%;
    margin: 20px 0;
    border-top: 1px dashed $--border-color-base;
  }

  .form-part__header {
    position: relative;
    line-height: 2;
    font-size: 16px;

    &:before {
      content: "";
      position: absolute;
      left: -10px;
      top: 4px;
      bottom: 4px;
      border-radius: $--border-radius-base;
      border-left: 4px solid $--color-primary;
    }
  }

  .form-part__body {
    padding: 10px 0;
  }
}


</style>
