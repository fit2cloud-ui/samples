<template>
  <el-menu :unique-opened="true" menu-trigger="click"
           :default-active="language"
           class="header-menu"
           text-color="inherit"
           mode="horizontal">
    <el-submenu index="1" popper-class="header-menu-popper">
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
      this.$store.dispatch('user/setLanguage', lang).then(() => {
        // do something
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/variables.scss";

.header-menu {
  .language-icon {
    width: 24px;
    margin-left: 10px;
  }
}

.header-menu-popper {
  .el-icon-check {
    margin-left: 10px;
    color: $--color-primary;
  }
}
</style>
