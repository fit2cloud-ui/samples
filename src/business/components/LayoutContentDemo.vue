<template>
  <layout-content>
    <template #header>
      Header
    </template>
    <template #toolbar>
      Toolbar
    </template>
    Content
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "LayoutContentDemo",
  components: {LayoutContent},
}
</script>
