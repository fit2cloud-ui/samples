<template>
  <layout-content>
    <iframe src="https://router.vuejs.org/zh/guide"></iframe>
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "RouterDocs",
  components: {LayoutContent}
}
</script>

<style scoped>
iframe {
  border: none;
  width: 100%;
  height: 100%;
}
</style>
