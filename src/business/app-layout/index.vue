<template>
  <layout>
    <template v-slot:header>
      <div class="navbar-item">item 1</div>
      <div class="navbar-item">item 2</div>
      <div class="navbar-item">
        <language-switch/>
      </div>
    </template>
  </layout>
</template>

<script>
import Layout from "@/components/layout";
import LanguageSwitch from "@/components/language-switch";

export default {
  name: "AppLayout",
  components: {LanguageSwitch, Layout}
}
</script>

<style scoped>

</style>
