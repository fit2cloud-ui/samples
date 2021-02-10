<template>
  <layout-content>
    <dynamic-table>
      <search-bar/>
    </dynamic-table>
  </layout-content>
</template>

<script>
import DynamicTable from "@/components/dynamic-table";
import SearchBar from "@/components/search-bar";
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "UserManagement",
  components: {LayoutContent, SearchBar, DynamicTable}
}
</script>

<style scoped>

</style>
