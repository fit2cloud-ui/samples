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
<style lang="scss" scoped>
@import "~@/styles/components/layout/variables.scss";

.sidebar {
  height: 100%;

  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .el-scrollbar {
    height: calc(100% - #{$header-height});

    ::v-deep .el-scrollbar__bar.is-vertical {
      right: 0;
    }

    ::v-deep .el-scrollbar__bar.is-horizontal {
      display: none;
    }
  }

  .scrollbar-wrapper {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .sub-el-icon {
    margin-right: 12px;
    margin-left: -2px;
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100%;

    ::v-deep .el-submenu.is-active {
      border-left: 5px solid ;
    }
  }


  & .nest-menu .el-submenu > .el-submenu__title,
  & .el-submenu .el-menu-item {
    min-width: $sidebar-open-width !important;
    background-color: $submenu-bg-color !important;

    &:hover {
      background-color: $submenu-bg-color-hover !important;
    }
  }

  .el-menu--collapse .el-menu .el-submenu {
    min-width: $sidebar-close-width !important;
  }

  .el-menu--vertical {
    & > .el-menu {
      .sub-el-icon {
        margin-right: 12px;
        margin-left: -2px;
      }
    }

    .nest-menu .el-submenu > .el-submenu__title,
    .el-menu-item {
      &:hover {
        background-color: $menu-bg-color-hover !important;
      }
    }

    > .el-menu--popup {
      max-height: 100vh;
      overflow-y: auto;

      &::-webkit-scrollbar-track-piece {
        background: #d3dce6;
      }

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: #99a9bf;
        border-radius: 20px;
      }
    }
  }

  &.is-collapse {
    .submenu-title-no-dropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;

        .svg-icon {
          margin-left: 20px;
        }

        .sub-el-icon {
          margin-left: 19px;
        }
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0 !important;

        .svg-icon {
          margin-left: 20px;
        }

        .sub-el-icon {
          margin-left: 19px;
        }

        .el-submenu__icon-arrow {
          display: none;
        }
      }
    }

    .el-menu--collapse {
      .el-submenu {
        & > .el-submenu__title {
          & > span {
            height: 0;
            width: 0;
            overflow: hidden;
            visibility: hidden;
            display: inline-block;
          }
        }
      }
    }
  }
}
</style>

