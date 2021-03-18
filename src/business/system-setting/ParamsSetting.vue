<template>
  <div>参数设置
    <el-button @click="cancel">cancel</el-button>
  </div>
</template>

<script>
export default {
  name: "ParamsSetting",
  methods: {
    cancel() {
      this.$router.push({name: "UserManagement"})
    }
  }
}
</script>

<style scoped>

</style>
