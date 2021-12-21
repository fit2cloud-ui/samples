<template>
  <div class="y-column">
    <div class="axis-cell align-left"
      :class="{'total':(item.type==='total'),'no-left-border':item.left===0}"
      v-for="(item, index) in dataList" :key="index" :style="getCellStyle(item)">
      <span>{{item.value}}</span>
    </div>
    <drag-line v-for="(item, index) in line" :key="index" :style="getLineStyle(item)" />

  </div>
</template>

<script>
import DragLine from "./DragLine.vue";
export default {
  name: "LeftRow",
  props: {
    dataList: Array,
  },
  components: {
    DragLine,
  },
  data() {
    return {
      line: [
        { width: 4, height: 224, top: 0, left: 0 },
        { width: 159, height: 4, top: 0, left: 0 },
        { width: 159, height: 4, top: 224, left: 0 },
        { width: 4, height: 224, top: 0, left: 155 },
        { width: 4, height: 224, top: 0, left: 51},
        { width: 51, height: 4, top: 220, left: 0 },
        { width: 107, height: 4, top: 194, left: 51},
      ],
    };
  },
  methods: {
    getCellStyle(item) {
      return `width: ${item.width}px; height: ${item.height}px; top: ${item.top}px; left: ${item.left}px;`;
    },
    getLineStyle(item) {
      return `width: ${item.width}px; height: ${item.height}px; top: ${item.top}px; left: ${item.left}px;`;
    },
  },
};
</script>

<style lang="scss">
.y-column {
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
    padding: 0 5px;
    box-sizing: border-box;
    &.total {
      font-weight: 700;
      background-color: #f9f9f9;
    }
  }
  .no-left-border {
    border-left: none;
  }
}
</style>
