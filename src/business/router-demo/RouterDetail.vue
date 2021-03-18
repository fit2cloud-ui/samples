<template>
  <layout-content>
    <template #header>
      详情页
    </template>
    <template #toolbar>
      <el-button @click="back">返回</el-button>
    </template>
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "RouterMenu",
  components: {LayoutContent},
  methods: {
    back() {
      this.$router.push({name: "RouterMenu"})
    }
  }
}
</script>
