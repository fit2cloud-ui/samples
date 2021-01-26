<template>
  <transition name="el-fade-in">
    <router-view :key="key"/>
  </transition>
</template>

<script>
export default {
  name: "MainView",
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>

</style>
