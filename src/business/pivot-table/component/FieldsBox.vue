<template>
  <div class="fields">
    <div class="field-area">
      <div class="field-area-title">
        <span>行</span>
      </div>
      <div class="field-area-content" @drop="drop($event, 'row')"
        @dragover.prevent="dragover($event, 'row')" @dragleave.prevent="dragleave">
        <span class="box-wrapper" v-for="(item, index) in rows" :key="index">
          <span class="insert-holder" :class="isMouse('row', index)?'hover': ''"
            @drop="drop($event, 'row', index)" @dragover.prevent="dragover($event, 'row', index)"
            @dragleave.stop="dragleave">{{index}}</span>
          <div draggable="true" @drag.prevent="drag(item)" @dragend.prevent="dragend">
            <div class="field-box dimension">
              <span class="field-box-name">{{item.name}}</span>
            </div>
          </div>
        </span>
        <span class="insert-holder" :class="isMouse('row')?'hover': ''"></span>
      </div>
    </div>
    <div class="reverse-area"><i class="el-icon-sort"></i></div>
    <div class="field-area">
      <div class="field-area-title"><span>列</span></div>
      <div class="field-area-content" @drop="drop($event, 'column')"
        @dragover.prevent="dragover($event, 'column')" @dragleave.prevent="dragleave">
        <span class="box-wrapper" v-for="(item, index) in columns" :key="index">
          <span class="insert-holder" :class="isMouse('column', index)?'hover': ''"
            @drop="drop($event, 'column', index)" @dragover.prevent="dragover($event, 'column', index)"
            @dragleave.stop="dragleave">{{index}}</span>
          <div draggable="true" @dragstart="drag(item)">
            <div class="field-box dimension">
              <span class="field-box-name">{{item.name}}</span>
            </div>
          </div>
        </span>
        <span class="insert-holder" :class="isMouse('column')?'hover': ''"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FieldsBox",
  props: {
    data: Array,
  },
  data() {
    return {
      isMouseID: "",
      isMouseType: "",
      mouseItem: "",
    };
  },
  computed: {
    rows() {
      return this.data?.rows;
    },
    columns() {
      return this.data?.columns;
    },
  },
  methods: {
    dragend() {
      this.mouseItem = ""
    },
    drag(item) {
      this.mouseItem = item;
    },
    drop(e, type, index) {
      e.stopPropagation();
      this.$emit("drop", { type, index, item: this.mouseItem });
      this.isMouseID = "";
      this.isMouseType = "";
    },
    dragover(e, type, index) {
      e.stopPropagation();
      this.isMouseID = index;
      this.isMouseType = type;
    },
    dragleave() {
      this.isMouseID = "";
      this.isMouseType = "";
    },
    isMouse(type, index) {
      return this.isMouseID === index && this.isMouseType === type;
    },
  },
};
</script>

<style scoped lang="scss">
.fields {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 100%;
  background-color: #3e4760;
  color: #ffffff;
  .field-area {
    display: flex;
    align-items: center;
    background-color: rgba(196, 211, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: auto;
    flex: 1 0 0;
  }
  .field-area-title {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0 5px;
    margin: 5px 0;
  }
  .field-area-content {
    flex: 1 0 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .box-wrapper {
      display: flex;
      height: 20px;
    }
    .field-box {
      padding: 0 5px;
      font-size: 12px;
      height: 20px;
      width: auto;
      display: flex;
      align-items: center;
      cursor: pointer;
      &.dimension {
        border: 1px solid #468cff;
        background-color: rgba(70, 140, 255, 0.1);
      }
    }
    .insert-holder {
      width: 4px;
      height: 20px;
      padding: 0 3px;
      background-color: #fff;
      background-clip: content-box;
      display: block;
      opacity: 0;
      &.hover {
        animation: 1s linear 0.1s infinite running blink;
      }
    }
  }
  .reverse-area {
    transform: rotate(90deg);
    margin: 0 5px;
  }
}
@keyframes blink {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
