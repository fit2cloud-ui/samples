<template>
  <component :is="condition.component" :condition="condition"></component>
</template>

<script>
import {ComplexCondition} from "@/components/search-bar/model";

export default {
  name: "SearchComponent",
  props: {
    condition: ComplexCondition
  }
}
</script>

<style scoped>

</style>
