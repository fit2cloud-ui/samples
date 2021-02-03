<template>
  <layout>
    <template v-slot:header>
      <navbar-item>
        <language-switch/>
      </navbar-item>
    </template>
  </layout>
</template>

<script>
import Layout from "@/components/layout";
import LanguageSwitch from "@/components/language-switch";
import NavbarItem from "@/components/layout/NavbarItem";

export default {
  name: "AppLayout",
  components: {NavbarItem, LanguageSwitch, Layout}
}
</script>
