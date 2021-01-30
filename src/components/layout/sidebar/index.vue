<template>
  <div class="sidebar">
    <logo :collapse="collapse"/>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="collapse"
        :collapse-transition="false"
        :unique-opened="false"
        :background-color="variables.menuBgColor"
        :text-color="variables.menuColor"
        :active-text-color="variables.menuActiveColor"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/components/layout/variables.scss'
import Logo from "@/components/layout/sidebar/Logo";

export default {
  name: "Sidebar",
  components: {Logo, SidebarItem},
  props: {
    collapse: Boolean
  },
  computed: {
    ...mapGetters([
      'permission_routes',
    ]),
    activeMenu() {
      const route = this.$route
      const {meta, path} = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
  }
}
</script>
