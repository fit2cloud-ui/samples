<template>
  <div class="left-top-container">
    <div class="table-header-col align-left" :class="index===0&&'no-top-border'"
      v-for="(item, index) in columns" :key="index" :style="`height: ${perHeight}px`">
      <span>{{item.name}}</span>
      <slide-handle :style="getSlideStyle()" @drop.stop="drop($event)"
        @dragover.stop="dragover($event)" @dragleave.stop="dragleave($event)" />
    </div>
    <div class="table-header-row-wrap">
      <div class="table-header-row align-left" :class="index===0&&'no-left-border'"
        v-for="(item, index) in rows" :key="index"
        :style="`height: ${perHeight}px; width: ${getRow(item.MaxWidth)}px`">

        {{item.width}}
        <span>{{item.name}}</span>
        <slide-handle :style="getSlideStyle()" @drop.stop="drop($event)"
          @dragover.stop="dragover($event)" @dragleave.stop="dragleave($event)" />

      </div>
    </div>
  </div>
</template>

<script>
import { getTextWidth } from "./../utils";
import SlideHandle from "./SlideHandle.vue";
export default {
  name: "LeftTop",
  props: {
    columns: Array,
    rows: Array,
    perHeight: {
      type: Number,
      default: 28,
    },
  },
  components: {
    SlideHandle,
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},

  methods: {
    getRow(width){
      return getTextWidth(width)
    },
    getSlideStyle() {
      return `width:4px;height: ${this.perHeight}px; top: 0; right: 0px;`;
    },

    drop(val) {
      this.$emit("drop", val);
    },
    dragover(val) {
      this.$emit("dragover", val);
    },
    dragleave(val) {
      this.$emit("dragleave", val);
    },
  },
};
</script>

<style scoped lang="scss">
.left-top-container {
  position: absolute;
  background-color: rgba(33, 83, 212, 0.08);
  .table-header-col,
  .table-header-row {
    border-top: 1px solid #d4d6d9;
    box-sizing: border-box;
    padding: 0 5px;
  }
  .table-header-col,
  .table-header-row,
  .table-header-row-wrap {
    font-weight: 700;
    display: flex;
    align-items: center;
    white-space: nowrap;
    position: relative;
  }
  .table-header-row {
    border-left: 1px solid #d4d6d9;
  }
  .no-left-border {
    border-left: none;
  }
  .no-top-border {
    border-top: none;
  }
}
</style>
