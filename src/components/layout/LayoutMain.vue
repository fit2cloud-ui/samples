<template>
  <main class="main-container">
    <slot>
      <main-view/>
    </slot>
  </main>
</template>

<script>
import MainView from "@/components/layout/MainView";

export default {
  name: "LayoutMain",
  components: {MainView}
}
</script>

<style scoped>

</style>
