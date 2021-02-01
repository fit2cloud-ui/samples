<template>
  <header class="header-container">
    <div class="header-title">
      <slot name="title">
        <el-button circle :class="['sidebar-toggle-button', icon]" @click="toggle"></el-button>
      </slot>
    </div>
    <div class="header-navbar">
      <slot></slot>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "LayoutHeader",
  methods: {
    toggle() {
      this.$store.dispatch('app/toggleSideBar');
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    icon() {
      return this.sidebar.opened ? "el-icon-s-fold" : "el-icon-s-unfold"
    },
  }
}
</script>

<style lang="scss" scoped>
.sidebar-toggle-button.el-button {
  font-size: 18px;
}

</style>
