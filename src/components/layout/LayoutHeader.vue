<template>
  <header class="header-container">
    <div class="header-title">
      <slot name="title">
        Dashboard
      </slot>
    </div>
    <div class="header-navbar">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "LayoutHeader"
}
</script>

<style lang="scss" scoped>
@import "~@/styles/components/layout/variables.scss";
@import "~@/styles/common/mixins.scss";

.header-container {
  @include flex-row(flex-start, center);
  height: $header-height;
  padding: 0 $header-padding;

  &:after {
    content: "";
    position: absolute;
    top: $header-height;
    left: $header-padding;
    height: 1px;
    width: calc(100% - #{2 * $header-padding});
    background-color: #D5D5D5;
  }

  .header-title {
    @include flex-row(flex-start, center);
    position: relative;
    height: 100%;
  }

  .header-navbar {
    @include flex-row(flex-end, center);
    flex: auto;
    height: 100%;

    .navbar-item + .navbar-item {
      margin-left: 20px;
    }
  }
}
</style>
