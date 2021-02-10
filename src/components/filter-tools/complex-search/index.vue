<template>
  <div class="complex-search">
    <div class="result">

    </div>
    <div class="condition">

    </div>
    <div class="condition">

    </div>
  </div>
</template>

<script>
export default {
  name: "ComplexSearch"
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/mixins.scss";
@import "~@/styles/common/variables.scss";

.complex-search {
  @include flex-row(flex-start, center);
  width: 100%;
  height: 100%;
}
</style>
