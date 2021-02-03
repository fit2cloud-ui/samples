<template>
  <el-menu :unique-opened="true"
           :default-active="language"
           class="language-switch"
           text-color="inherit"
           mode="horizontal">
    <el-submenu index="1" popper-class="language-switch-popper">
      <template slot="title">
        <font-awesome-icon class="language-icon" :icon="['fas', 'globe']"/>
        <span>{{ languageMap[language] }}</span>
      </template>
      <el-menu-item v-for="(value, key) in languageMap" :key="key" :index="key" @click="setLanguage(key)">
        <span>{{ value }}</span>
        <i class="el-icon-check" v-if="key === language"/>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>

export default {
  name: "LanguageSwitch",
  data() {
    return {
      languageMap: {
        "zh-CN": "中文(简体)",
        "en-US": "English",
      }
    };
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  methods: {
    setLanguage(lang) {
      this.$setLang(lang)
      this.$store.dispatch('user/setLanguage', lang)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/variables.scss";

.language-switch {
  width: 150px;

  &.el-menu {
    background-color: transparent;
    color: inherit;

    &.el-menu--horizontal {
      border: none;
    }

    ::v-deep .el-submenu__title {
      border: none;
      height: 40px;
      line-height: 40px;
    }
  }

  .language-icon {
    width: 24px;
    margin-left: 10px;
  }
}

.language-switch-popper {
  .el-menu-item {
    &.is-active {
      color: $--color-primary;
    }

    &:hover {
      background-color: #D5D5D5;
    }
  }

  .el-icon-check {
    margin-left: 10px;
    color: $--color-primary;
  }
}
</style>
