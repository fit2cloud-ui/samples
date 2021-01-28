<template>
  <main class="main-container">
    <transition name="el-fade-in" mode="out-in">
      <keep-alive>
        <router-view :key="key"/>
      </keep-alive>
    </transition>
  </main>
</template>

<script>
export default {
  name: "LayoutMain",
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
@import "~@/styles/components/layout/variables.scss";

.main-container {
  display: block;
  flex: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: $tb-padding $lr-padding;
}
</style>
