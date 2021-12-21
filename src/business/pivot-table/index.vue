<template>
  <layout-content>
    <div class="pivot-table">
      <div class="fields-panel-grid">
        <fields-box :data="leftHeaderList" @drop="drop" />
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
        <!--
        <div class="table">

          <div class="table-header-border table-right-border"
            :style="`top: 0px; left: ${leftHeaderList.columns.size.width}px; height: 1290px;`">
          </div>
          <div class="table-header-border table-bottom-border"
            :style="`left: 0px; top: ${leftHeaderList.columns.size.height}px; width: 2055px;`">
          </div>
          <div class="table-tr" :style="`height:${leftHeaderList.columns.size.height}px;`">
            <div class="table-column"
              :style="`width:${leftHeaderList.columns.size.width}px; z-index: 3;`">
              <left-top :columns="leftHeaderList.columns.data" :rows="leftHeaderList.rows.data"
                :style="`height:${leftHeaderList.columns.size.height}px; width:${leftHeaderList.columns.size.width}px; left: 0px; top: 0px;`" />
            </div>
            <div class="table-column">
              <right-column :dataList="rightHeaderList.data"
                :style="`height:${rightHeaderList.size.height}px; width:${rightHeaderList.size.width}px;`" />
            </div>
          </div>
          <div class="table-tr">
            <div class="table-column" :style="`height:${leftHeaderList.rows.size.height}px;`">
              <left-column :dataList="leftHeaderList.rows.value"
                :style="`width:${leftHeaderList.rows.size.width}px;`" />
            </div>
            <div class="table-column">
              <div class="value-cell  align-right"
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
                style="left: 54px; top: 64px; width: 93px; height: 32px; line-height: 32px;"></div>
            </div>
          </div>
        </div>
      -->
      </div>
    </div>
  </layout-content>

</template>

<script>
import FieldsBox from "./component/FieldsBox.vue";
// import RightColumn from "./component/RightColumn.vue";
// import LeftColumn from "./component/LeftColumn.vue";
// import LeftTop from "./component/LeftTop.vue";
import LayoutContent from "@/components/layout/LayoutContent";
export default {
  name: "PivotTable",
  components: {
    LayoutContent,
    // LeftTop,
    // LeftColumn,
    // RightColumn,
    FieldsBox,
  },
  data() {
    return {
      // 左侧
      listTree: [
        {
          name: "Accessories",
          length: 11,
          children: [
            {
              name: "Accessories - 总计",
              length: 13,
              total: true,
            },
            {
              name: "red",
              length: 3,
            },
            {
              name: "yellow",
              length: 6,
            },
            {
              name: "white",
              length: 5,
            },
            {
              name: "green",
              length: 5,
            },
          ],
        },
        {
          name: "Bikes",
          length: 5,
          children: [
            {
              name: "Bikes - 总计",
              length: 12,
              total: true,
            },
            {
              name: "white",
              length: 5,
            },
            {
              name: "red",
              length: 3,
            },
            {
              name: "green",
              length: 5,
            },
            {
              name: "yellow",
              length: 6,
            },
            {
              name: "blue",
              length: 4,
            },
            {
              name: "purple",
              length: 6,
            },
          ],
        },
        {
          name: "Clothing",
          length: 8,
          children: [
            {
              name: "Clothing - 总计",
              length: 15,
              total: true,
            },
            {
              name: "yellow",
              length: 6,
            },
            {
              name: "blue",
              length: 4,
            },
            {
              name: "white",
              length: 5,
            },
            {
              name: "purple",
              length: 6,
            },
            {
              name: "red",
              length: 3,
            },
            {
              name: "green",
              length: 5,
            },
          ],
        },
        {
          name: "Components",
          length: 10,
          children: [
            {
              name: "Components - 总计",
              length: 18,
              total: true,
            },
            {
              name: "red",
              length: 3,
            },
            {
              name: "green",
              length: 5,
            },
            {
              name: "blue",
              length: 4,
            },
            {
              name: "white",
              length: 5,
            },
          ],
        },
        {
          name: "Cars",
          length: 4,
          children: [
            {
              name: "Cars - 总计",
              length: 12,
              total: true,
            },
            {
              name: "green",
              length: 5,
            },
            {
              name: "white",
              length: 5,
            },
            {
              name: "red",
              length: 3,
            },
            {
              name: "blue",
              length: 4,
            },
          ],
        },
      ],
      // 表格
      leftHeaderList: {
        rows: [
          { name: "Accessories", length: 11 },
          { name: "Cars", length: 4 },
        ],
        columns: [
          {
            name: "Components",
            length: 10,
            children: [
              {
                name: "Components - 总计",
                length: 18,
                total: true,
              },
              {
                name: "red",
                length: 3,
              },
              {
                name: "green",
                length: 5,
              },
              {
                name: "blue",
                length: 4,
              },
              {
                name: "white",
                length: 5,
              },
            ],
          },
          {
            name: "Bikes",
            length: 5,
            children: [
              {
                name: "Bikes - 总计",
                length: 12,
                total: true,
              },
              {
                name: "white",
                length: 5,
              },
              {
                name: "red",
                length: 3,
              },
              {
                name: "green",
                length: 5,
              },
              {
                name: "yellow",
                length: 6,
              },
              {
                name: "blue",
                length: 4,
              },
              {
                name: "purple",
                length: 6,
              },
            ],
          },
        ],
      },
      rightHeaderList: {
        data: [
          {
            pValue: "Business_Type",
            value: "Specialty Bike Shop",
            width: 564,
            height: 28,
            left: 0,
            top: 0,
          },
          {
            pValue: "Destination",
            value: "Business_Type - 总计",
            width: 147,
            height: 84,
            left: 564,
            top: 0,
            type: "total",
          },
          {
            pValue: "Destination",
            value: "Australia",
            width: 65,
            height: 56,
            left: 0,
            top: 28,
          },
          {
            pValue: "Destination",
            value: "Canada",
            width: 58,
            height: 56,
            left: 65,
            top: 28,
          },
          {
            pValue: "Destination",
            value: "France",
            width: 52,
            height: 56,
            left: 123,
            top: 28,
          },
          {
            pValue: "Destination",
            value: "Germany",
            width: 65,
            height: 56,
            left: 175,
            top: 28,
          },
          {
            pValue: "Destination",
            value: "United Kingdom",
            width: 107,
            height: 56,
            left: 240,
            top: 28,
          },
          {
            pValue: "Destination",
            value: "United States",
            width: 90,
            height: 56,
            left: 347,
            top: 28,
          },
          {
            pValue: "Destination",
            value: "Destination - 总计",
            width: 127,
            height: 56,
            left: 437,
            top: 28,
            type: "total",
          },
        ],
        size: { width: 711, height: 85 },
      },
      valueList: [],
      unitHeight: 28,
      // 拖拽
      isMouseItem: "",

      // 左侧tree操作
      showList: [],
    };
  },
  mounted() {},
  methods: {
    drop({ type, index, item }) {
      console.log(type, index, item);
    },
    dragend() {
      this.isMouseItem = ""
    },
    drag(item) {
      this.isMouseItem = item
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
  .canvas-panel-grid {
    display: flex;
  }
  .tree {
    width: 150px;
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
