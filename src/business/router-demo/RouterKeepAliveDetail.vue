<template>
  <layout-content>
    <template #header>
      详情页
    </template>
    <template #toolbar>
      <el-button @click="back">返回</el-button>
    </template>
    <h4>
      该组件设置了缓存，在输入框内填写加文本，然后点击返回，再重新打开该页面，可以看到输入框的内容还在。
    </h4>
    <h4>
      返回时控制台里看不到destroyed触发，说明组件缓存了，没有销毁
    </h4>
    <el-input v-model="text" style="width: 200px;margin-right: 50px"></el-input>
  </layout-content>
</template>

<script>
import LayoutContent from "@/components/layout/LayoutContent";

export default {
  name: "RouterKeepAliveDetail",
  components: {LayoutContent},
  data() {
    return {
      text: ""
    }
  },
  methods: {
    back() {
      this.$router.push({name: "RouterKeepAlive"})
    }
  },
  destroyed() {
    console.log("RouterKeepAliveDetail destroyed触发")
  }
}
</script>
