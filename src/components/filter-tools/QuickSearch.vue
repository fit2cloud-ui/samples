<template>
  <label>
    <input class="quick-search" :placeholder="placeholder" @input="value"/>
  </label>
</template>

<script>
export default {
  name: "QuickSearch",
  props: {
    placeholder: String
  }
}
</script>

<style lang="scss" scoped>
.quick-search {
  position: relative;
}
</style>
