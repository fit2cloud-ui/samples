<template>
  <div class="drag-line-container " :class="isMouse?'highlight':''" @drop.stop="drop($event)"
    @dragover.stop="dragover($event)" @dragleave.stop="dragleave($event)">
  </div>
</template>

<script>
export default {
  name: "SlideHandle",
  props: {
    columns: Array,
    rows: Array,
    metric: Array,
  },
  data() {
    return {
      isMouse: false,
    };
  },
  methods: {
    drop(val) {
      this.$emit("drop", val);
    },
    dragover(clone) {
      this.isMouse = true;
      this.$emit("dragover", clone);
    },
    dragleave(clone) {
      this.isMouse = false;
      this.$emit("dragleave", clone);
    },
  },
};
</script>

<style scoped lang="scss">
.drag-line-container {
  position: absolute;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  &.highlight {
    background-color: #0a1531 !important;
  }
}
</style>
