<template>
  <layout>
    <template v-slot:header>
      <div class="navbar-item">item 1</div>
      <div class="navbar-item">item 2</div>
      <div class="navbar-item">item 3</div>
    </template>
  </layout>
</template>

<script>
import Layout from "@/components/layout";

export default {
  name: "AppLayout",
  components: {Layout}
}
</script>

<style scoped>

</style>
