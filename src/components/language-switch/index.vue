<template>
  <el-menu :unique-opened="true"
           class="language-switch"
           text-color="inherit"
           :active-text-color="variables.theme"
           mode="horizontal">
    <el-submenu index="1">
      <template slot="title">
        <font-awesome-icon class="language-icon" :icon="['fas', 'globe']"/>
        <span>{{ languageMap[language] }}</span>
      </template>
      <el-menu-item v-for="(value, key) in languages" :key="key" @click="setLanguage(key)">
        {{ value }}
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import variables from "@/styles/common/variables.scss"

export default {
  name: "LanguageSwitch",
  data() {
    return {
      languageMap: {
        "zh-CN": "简体中文",
        "en-US": "English",
        "zh-TW": "繁體中文",
      }
    };
  },
  computed: {
    variables() {
      return variables
    },
    language() {
      return this.$store.getters.language
    },
    languages() {
      let languages = {}
      for (const language in this.languageMap) {
        if (this.language !== language) {
          languages[language] = this.languageMap[language]
        }
      }
      return languages
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
  &.el-menu {
    background-color: transparent;
    color: inherit;
  }

  .language-icon {
    width: 24px;
  }
}

.el-icon-check {
  color: $--color-primary;
  margin-left: 10px;
}

.align-right {
  float: right;
}

</style>
