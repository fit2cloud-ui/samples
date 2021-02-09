<template>
  <div class="app-container">
    <dynamic-table>
      <template #header>
        <filter-tools></filter-tools>
      </template>
    </dynamic-table>
  </div>
</template>

<script>
import DynamicTable from "@/components/dynamic-table";
import FilterTools from "@/components/filter-tools";

export default {
  name: "UserManagement",
  components: {FilterTools, DynamicTable}
}
</script>

<style scoped>

</style>
