<template>
  <el-card>
    <h2>切换admin、editor、readonly用户看到不同的内容</h2>
    <br/>
    <div class="permission-block admin" v-permission="['admin']">
      只有admin角色能看到, 指令设置：v-permission="['admin']"
    </div>
    <div class="permission-block editor" v-permission="['editor']">
      只有editor角色能看到, 指令设置：v-permission="['editor']"
    </div>
    <div class="permission-block">
      所有都能看到
    </div>
  </el-card>
</template>

<script>
export default {
  name: "PermissionDemo"
}
</script>

<style lang="scss" scoped>
@import "~@/styles/common/variables.scss";

.permission-block {
  width: 100%;
  height: 40px;
  line-height: 40px;

  &.admin {
    color: $--color-primary;
  }

  &.editor {
    color: $--color-warning;
  }
}
</style>
