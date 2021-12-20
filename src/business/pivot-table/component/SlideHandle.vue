<template>
  <div class="slide-handle" :class="isMouse?'mouse':''" @drop.stop="drop($event)"
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
.slide-handle {
  position: absolute;
  z-index: 4;
  background-color: transparent;
  cursor: col-resize;
  &.mouse {
    background: #333333;
  }
}
</style>
