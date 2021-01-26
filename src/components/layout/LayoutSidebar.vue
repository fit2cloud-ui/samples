<template>
  <aside :class="['sidebar-container', {'is-collapse': collapse}]">
  </aside>
</template>

<script>
export default {
  name: "LayoutSidebar",
  data() {
    return {
      collapse: false
    }
  }
}
</script>

<style scoped>

</style>
