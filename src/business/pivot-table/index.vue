<template>
  <layout-content>
    <div class="pivot-table">
      <div class="fields-panel-grid">
        <fields-box :data="pivotTableData" @drop="drop" />
      </div>
      <div class="canvas-panel-grid">
        <div class="tree">
          <div class="tree-node" v-for="(item,index) in listTree" :key="index">
            <div><i class="tree-icon el-icon-caret-right" :class="isShow(index)?'icon-show':''"
                @click="treeClick(index)"></i><span draggable="true" @dragstart="drag(item)"
                @dragend.prevent="dragend">{{item.name}}</span></div>
            <el-collapse-transition>

              <div class="tree-child-node" v-show="isShow(index)"
                v-if="item.children&&item.children.length>0">
                <div v-for="(child,i) in item.children" :key="i" draggable="true"
                  @dragstart="drag(child)" @dragend.prevent="dragend">{{child.name}}</div>
              </div>
            </el-collapse-transition>
          </div>
        </div>

        <div class="table">
          <!-- <div class="table-header-border table-right-border"
            :style="`top: 0px; left: ${leftHeaderList.columns.size.width}px; height: 1290px;`">
          </div>
          <div class="table-header-border table-bottom-border"
            :style="`left: 0px; top: ${leftHeaderList.columns.size.height}px; width: 2055px;`">
          </div> -->
          <div class="table-tr">
            <div class="table-column"
              :style="`width: ${totalWidth(rowsData)}px; z-index: 3;height:${totalHeight(pivotTableData.columns, perHeight)}px;`">
              <left-top :columns="pivotTableData.columns" :rows="rowsData" :perHeight="perHeight"
                :style="`height: ${totalHeight(pivotTableData.columns, perHeight)}px; width: ${totalWidth(rowsData)}px; left: 0px; top: 0px;`" />
            </div>
            <!-- :style="`height:${rightHeaderList.size.height}px; width:${rightHeaderList.size.width}px;`"  -->
            <div class="table-column">
              <!-- <right-column :dataList="rowsData"
                /> -->
            </div>
          </div>
          <div class="table-tr">
            <!-- <div class="table-column" :style="`height:${leftHeaderList.rows.size.height}px;`">
              <left-row :dataList="leftHeaderList.rows.value"
                :style="`width:${leftHeaderList.rows.size.width}px;`" />
            </div> -->
            <!-- <div class="table-column"> -->
            <!-- <div class="value-cell  align-right"
                style="left: 0px; top: 0px; width: 27px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right"
                style="left: 27px; top: 0px; width: 27px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right total-cell"
                style="left: 54px; top: 0px; width: 93px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right"
                style="left: 0px; top: 32px; width: 27px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right"
                style="left: 27px; top: 32px; width: 27px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right total-cell"
                style="left: 54px; top: 32px; width: 93px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right total-cell"
                style="left: 0px; top: 64px; width: 27px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right total-cell"
                style="left: 27px; top: 64px; width: 27px; height: 32px; line-height: 32px;"></div>
              <div class="value-cell  align-right total-cell"
                style="left: 54px; top: 64px; width: 93px; height: 32px; line-height: 32px;"></div> -->
            <!-- </div>
          </div> -->
          </div>

        </div>
      </div>
    </div>
  </layout-content>

</template>

<script>
import { getMaxWidth, getSum, getTextWidth } from "./utils";
import { pivotTableData, listTree } from "./data";
import FieldsBox from "./component/FieldsBox.vue";
// import RightColumn from "./component/RightColumn.vue";
// import LeftRow from "./component/LeftRow.vue";
import LeftTop from "./component/LeftTop.vue";
import LayoutContent from "@/components/layout/LayoutContent";
export default {
  name: "PivotTable",
  components: {
    LayoutContent,
    LeftTop,
    // LeftRow,
    // RightColumn,
    FieldsBox,
  },
  data() {
    return {
      // 左侧
      listTree: listTree,
      // 表格
      pivotTableData: pivotTableData,
      perHeight: 28,
      // 拖拽
      isMouseItem: "",

      // 左侧tree操作
      showList: [],
    };
  },
  mounted() {},
  computed: {
    rowsData() {
      const rows = pivotTableData.rows;
      rows.forEach((item) => {
        item.MaxWidth = getMaxWidth(this.getNumArray(item.children, "length"));
      });
      return rows;
    },
  },
  methods: {
    drop({ type, index, item }) {
      console.log(type, index, item);
    },
    dragend() {
      this.isMouseItem = "";
    },
    drag(item) {
      this.isMouseItem = item;
    },
    totalHeight(list, add) {
      const sum = list.length * this.perHeight + (add || 0);
      return sum;
    },
    totalWidth(list) {
      const sum = getSum(this.getNumArray(list, "MaxWidth"));
      return getTextWidth(sum);
    },
    getNumArray(list, name) {
      let arr = [];
      list.forEach((item) => {
        arr.push(item[name]);
      });
      return arr;
    },
    // tree操作
    treeClick(index) {
      if (this.showList.indexOf(index) < 0) {
        this.showList.push(index);
      } else {
        this.showList.splice(this.showList.indexOf(index), 1);
      }
    },
    isShow(index) {
      return this.showList.indexOf(index) >= 0;
    },
  },
};
</script>

<style scoped lang="scss">
.pivot-table {
  min-width: 1100px;
  font-size: 12px;
  .fields-panel-grid {
    margin-bottom: 15px;
  }

  .tree {
    width: 150px;
    display: inline-block;
    .tree-node {
      line-height: 25px;
    }
    .tree-child-node {
      margin-left: 15px;
    }
    .tree-icon {
      transition: all 0.25s;
    }
    .icon-show {
      transform: rotate(90deg);
    }
  }
  .table {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: content-box;
    border: 1px solid #d4d6d9;
    display: inline-block;
    vertical-align: top;
    .table-tr {
      display: flex;
    }
    .table-column {
      position: relative;
    }

    .value-cell {
      position: absolute;
      display: inline-block;
      z-index: 2;
      cursor: pointer;
      padding-right: 5px;
      padding-left: 5px;
      border-left: 1px solid #d4d6d9;
      border-top: 1px solid #d4d6d9;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      background-color: #fff;
    }
    .table-header-border {
      width: 1px;
      height: 1px;
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      background-color: #9ea2a9;
      z-index: 4;
      pointer-events: none;
    }
  }
}
</style>
