<template>
  <layout-content>
    <dynamic-table>
      <filter-tools></filter-tools>
    </dynamic-table>
  </layout-content>
</template>

<script>
import DynamicTable from "@/components/dynamic-table";
import FilterTools from "@/components/filter-tools";
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "UserManagement",
  components: {LayoutContent, FilterTools, DynamicTable}
}
</script>

<style scoped>

</style>
