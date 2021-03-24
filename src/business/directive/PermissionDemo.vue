<template>
  <layout-content>
    <view-card label-width="200px" header="v-has-permissions" icon="el-icon-success" type="success">
      <label-value label="v-has-permissions">有任意一项权限时显示</label-value>
      <label-value label="v-has-permissions.and">有所有权限时显示</label-value>
    </view-card>

    <view-card label-width="200px" header="v-lack-permissions" icon="el-icon-error" type="danger"
               style="margin-top: 20px">
      <label-value label="v-lack-permissions">没有任意一项权限时显示</label-value>
      <label-value label="v-lack-permissions.and">没有所有权限时显示</label-value>
    </view-card>

    <view-card label-width="300px" header="有权示例" icon="el-icon-info" style="margin-top: 20px">
      <label-value>切换用户 admin、editor、readonly 检查权限判断</label-value>

      <label-value label="当前用户权限">{{ roles }}</label-value>

      <label-value label="需要 admin 角色才能看到右侧内容">
        <div v-has-permissions="['admin']">
          v-has-permissions="['admin']"
        </div>
      </label-value>

      <label-value label="需要 admin 或 editor 角色才能看到右侧内容">
        <div v-has-permissions="['admin', 'editor']">
          v-has-permissions="['admin', 'editor']"
        </div>
      </label-value>

      <label-value label="需要 admin 和 editor 角色才能看到右侧内容">
        <div v-has-permissions.and="['admin', 'editor']">
          v-has-permissions.and="['admin', 'editor']"
        </div>
      </label-value>

    </view-card>

    <view-card label-width="300px" header="无权示例" icon="el-icon-info" style="margin-top: 20px">
      <label-value>切换用户 admin、editor、readonly 检查权限判断</label-value>

      <label-value label="当前用户权限">{{ roles }}</label-value>

      <label-value label="没有 readonly 角色才能看到右侧内容">
        <div v-lack-permissions="['readonly']">
          v-lack-permissions="['readonly']"
        </div>
      </label-value>

      <label-value label="没有 editor 或 readonly 角色才能看到右侧内容">
        <div v-lack-permissions="['editor', 'readonly']">
          v-lack-permissions="['editor', 'readonly']"
        </div>
      </label-value>

      <label-value label="没有 editor 和 readonly 角色才能看到右侧内容">
        <div v-lack-permissions.and="['editor', 'readonly']">
          v-lack-permissions.and="['editor', 'readonly']"
        </div>
      </label-value>

    </view-card>
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";
import ViewCard from "@/components/view-card";
import LabelValue from "@/components/view-card/label-value";
import {mapGetters} from "vuex";

export default {
  name: "PermissionDemo",
  components: {LabelValue, ViewCard, LayoutContent},
  computed: {
    ...mapGetters([
      "roles",
    ]),
  }
}
</script>

<style lang="scss" scoped>
.permission-block {
  width: 100%;
  height: 40px;
  line-height: 40px;

  &.admin {
    color: #2D61A2;
  }

  &.admin-editor {
    color: mix(#2D61A2, #FFBA00)
  }

  &.editor {
    color: #FFBA00;
  }
}
</style>
