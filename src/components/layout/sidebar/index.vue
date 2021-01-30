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

@mixin menu-item {
  line-height: $menu-height;
  height: $menu-height;
  margin: 4px 10px;
  padding-left: 10px !important;
  border-radius: 4px;
  color: $menu-color !important;
  background-color: $menu-bg-color !important;
}

@mixin submenu-item {
  line-height: $submenu-height;
  height: $submenu-height;
  margin: 4px 10px;
  padding-left: 10px !important;
  border-radius: 4px;
  color: $menu-color !important;
  background-color: $menu-bg-color !important;
}

@mixin active {
  color: $menu-active-color !important;
  background-color: $menu-active-bg-color !important;
}

.sidebar {
  height: 100%;

  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .el-scrollbar {
    box-sizing: border-box;
    padding: 10px 0;
    height: calc(100% - #{$header-height});

    ::v-deep {
      .el-scrollbar__bar {
        &.is-vertical {
          right: 0;
        }

        &.is-horizontal {
          display: none;
        }
      }

      .scrollbar-wrapper {
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
      }
    }
  }

  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }


  .el-menu {
    border: none;
    height: 100%;
    width: 100%;

    ::v-deep {
      .submenu-title-no-dropdown {
        @include menu-item;

        &.is-active {
          @include active
        }
      }

      .el-submenu {
        .el-submenu__title {
          @include menu-item;

          &:hover {
            background-color: $menu-bg-color-hover !important;
          }
        }

        &.is-active {
          .el-submenu__title {
            @include active
          }
        }

        .el-menu-item {
          @include submenu-item;

          &:hover {
            background-color: $menu-bg-color-hover !important;
          }

          &.is-active {
            @include active
          }
        }
      }

      span {
        padding-left: 30px;
      }

      .sub-el-icon {
        margin-right: 10px;

        + span {
          padding-left: 0;
        }
      }
    }

    &.el-menu--collapse ::v-deep {
      .el-tooltip {
        padding: 0 !important;
        text-align: center;
        line-height: $menu-height;
      }

      .el-submenu {
        position: relative;

        &:hover {
          background-color: $menu-bg-color-hover !important;
        }
      }

      .el-submenu__title:hover {
        background-color: transparent !important;
      }

      .submenu-title-no-dropdown, .el-submenu__title {
        span {
          display: none;
        }

        .sub-el-icon {
          margin: 0;
        }

        .el-submenu__icon-arrow {
          display: none;
        }

        .el-tooltip {
          text-align: center;
        }
      }
    }
  }
}

</style>

<style lang="scss">
@import "~@/styles/components/layout/variables.scss";

.sidebar-popper {
  & > .el-menu {
    display: block;
    background-color: $sidebar-bg-color !important;

    .sub-el-icon {
      margin-right: 12px;
      margin-left: -2px;
    }
  }

  .nest-menu .el-submenu > .el-submenu__title, .el-menu-item {
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
</style>
