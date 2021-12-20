<template>
  <div class="x-column">
    <div class="axis-cell align-left"
      :class="{'total':(item.type==='total'),'no-top-border':item.top===0}"
      v-for="(item, index) in dataList" :key="index" :style="getCellStyle(item)">
      <span>{{item.value}}</span>
      <slide-handle :style="getSlideStyle(item)" @drop.stop="drop($event)"
        @dragover.stop="dragover($event)" @dragleave.stop="dragleave($event)" />
    </div>

    <drag-line v-for="(item, index) in line" :key="index" :style="getLineStyle(item)" />

  </div>
</template>

<script>
import DragLine from "./DragLine.vue";
import SlideHandle from "./SlideHandle.vue";
export default {
  name: "RightColumn",
  props: {
    dataList: Array,
  },
  components: {
    SlideHandle,
    DragLine,
  },
  data() {
    return {
      line: [
        { width: 4, height: 84, top: 0, left: 0 },
        { width: 710, height: 4, top: 0, left: 0 },
        { width: 710, height: 4, top: 84, left: 0 },
        { width: 710, height: 4, top: 28, left: 0 },
      ],
    };
  },
  methods: {
    getCellStyle(item) {
      return `width: ${item.width}px; height: ${item.height}px; top: ${item.top}px; left: ${item.left}px;`;
    },
    getSlideStyle(item) {
      return `width: 4px; height: ${item.height}px; top: 0px; left: ${
        item.width - 4
      }px; cursor: col-resize;`;
    },
    getLineStyle(item) {
      return `width: ${item.width}px; height: ${item.height}px; top: ${item.top}px; left: ${item.left}px;`;
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

<style lang="scss">
.x-column {
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  .axis-cell {
    position: absolute;
    border-left: 1px solid #d4d6d9;
    border-top: 1px solid #d4d6d9;
    z-index: 2;
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgba(33, 83, 212, 0.08);
    padding: 0 5px;
    box-sizing: border-box;
    // &.total {
    //   font-weight: 700;
    //   background-color: #f9f9f9;
    // }
  }
  .no-left-border {
    border-left: none;
  }
  .no-top-border {
    border-top: none;
  }
}
</style>
