<template>
  <div class="flex-wrap">
    <table-layout @change="executeInsertTable">
      <a-button size="mini" type="text">
        <template #icon>
          <pk-svg-icon name="editor-table" :size="16" />
        </template>
        <span class="info-color" style="padding-top: 2px">
          表格
          <icon-down :size="10" />
        </span>
      </a-button>
    </table-layout>

    <a-button size="mini" type="text" @click="executeImage">
      <template #icon>
        <pk-svg-icon name="editor-image" :size="16" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 图片 </span>
    </a-button>

    <a-button size="mini" type="text" @click="executePageBreak">
      <template #icon>
        <pk-svg-icon name="editor-page-break" :size="16" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 分页符 </span>
    </a-button>

    <a-popover trigger="click">
      <a-button size="mini" type="text">
        <template #icon>
          <pk-svg-icon name="editor-separator" :size="16" />
        </template>
        <span class="info-color" style="padding-top: 2px"> 分割线 <icon-down :size="10" /></span>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
          <div class="separator-line" v-for="l in SEPARATOR_OPTION" :key="l.value" @click="executeSeparator(l.value)">
            <pk-svg-icon :name="`editor-${l.label}`" :size="16" style="width: 110px" />
          </div>
        </div>
      </template>
    </a-popover>
    <a-popover trigger="click">
      <a-button size="mini" type="text">
        <template #icon>
          <pk-svg-icon name="editor-symbol" :size="12" />
        </template>
        <span class="info-color" style="padding-top: 2px"> 特殊符号 <icon-down :size="10" /></span>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU" style="width: 560px" class="symbol-content">
          <a-tabs size="mini">
            <a-tab-pane :key="item.label" :title="item.label" v-for="item in SPECIAL_SYMBOLS">
              <a-button size="mini" type="text" v-for="i in item.value" :key="i" @click="executeInsertText(i)">
                <span class="symbol-text"> {{ i }}</span>
              </a-button>
            </a-tab-pane>
          </a-tabs>
        </div>
      </template>
    </a-popover>
    <!--    <a-button size="mini" type="text" @click="executeInsertArea">-->
    <!--      <template #icon>-->
    <!--        <pk-svg-icon name="editor-area" :size="16" />-->
    <!--      </template>-->
    <!--      <span class="info-color" style="padding-top: 2px"> 区域 </span>-->
    <!--    </a-button>-->
    <a-dropdown @select="executeInsertControl">
      <a-button size="mini" type="text">
        <template #icon>
          <pk-svg-icon name="editor-control" :size="14" />
        </template>
        <span class="info-color" style="padding-top: 2px"> 控件 <icon-down :size="10" /></span>
      </a-button>
      <template #content>
        <a-doption v-for="item in CONTROL_OPTION" :key="item.type" :value="item.type">
          <div class="option_item">
            <pk-svg-icon :name="'editor-' + item.icon" :size="14" />
            <span>{{ item.label }}</span>
          </div>
        </a-doption>
      </template>
    </a-dropdown>
    <a-button size="mini" type="text" @click="innerBarcode">
      <template #icon>
        <pk-svg-icon name="editor-barcode" :size="16" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 条形码 </span>
    </a-button>
    <a-button size="mini" type="text" @click="innerQrcode">
      <template #icon>
        <pk-svg-icon name="editor-qrcode" :size="16" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 二维码 </span>
    </a-button>
    <a-button size="mini" type="text" @click="innerMH">
      <template #icon>
        <pk-svg-icon name="editor-menstrual-history" :size="16" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 月经史 </span>
    </a-button>
    <a-button size="mini" type="text" @click="innerHR">
      <template #icon>
        <pk-svg-icon name="editor-fetal-position" :size="16" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 胎位图 </span>
    </a-button>
    <a-button size="mini" type="text" @click="innerFDI">
      <template #icon>
        <pk-svg-icon name="editor-tooth-position" :size="16" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 牙位图 </span>
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { Register } from "@/views/editor/core/register/Register.ts";
import TableLayout from "@/components/table-layout/index.vue";
import { IconDown } from "@arco-design/web-vue/es/icon";
import { SEPARATOR_OPTION } from "@/views/editor/core/const";
import { EditorComponent, EDITOR_COMPONENT, ControlType, ElementType, DataImageType } from "@panku/canvas-editor";
import SPECIAL_SYMBOLS from "@/views/editor/core/const/special-symbols.ts";
import { CONTROL_OPTION } from "@/views/editor/core/const/concept.ts";
import { nanoid } from "nanoid";

defineOptions({ name: "insert-menu" });

const register = new Register(); // 注册事件总线

// 插入表格
const executeInsertTable = (payload: { row: number; col: number }) => {
  register.emit("executeInsertTable", payload);
};
// 插入图片
const executeImage = () => register.emit("executeImage");
// 插入分页符
const executePageBreak = () => register.emit("executePageBreak");
// 插入分割线
const executeSeparator = (value: string) => {
  let payload: number[] = [];
  const separatorDash = value.split(",").map(Number);
  if (separatorDash && separatorDash.length > 0) {
    const isSingleLine = separatorDash.every(d => d === 0); // 判断是否有为0的值
    if (!isSingleLine) {
      payload = separatorDash;
    }
  }
  register.emit("executeSeparator", payload);
};
// 插入文字
const executeInsertText = (value: string) => register.emit("executeInsertText", value);
// 插入控件
const executeInsertControl = (type: ControlType) => register.emit("executeInsertControl", type);

// // 插入区域
// const executeInsertArea = () => {
//   register.emit("executeInsertArea", {
//     value: [],
//     area: {
//       placeholder: { data: "测试" },
//       mode: AreaMode.EDIT,
//       // top: 100, // 上边距
//       // backgroundColor: "#f55", // 背景色
//       borderColor: "#F9B345", // 边框颜色
//       hide: false, // 是否隐藏
//       deletable: false // 是否可删除
//     },
//     position: LocationPosition.OUTER_AFTER
//   });
// };

// 插入条形码
const innerBarcode = () => {
  register.emit("executeInsertElementList", [
    {
      type: ElementType.DATA_IMAGE,
      conceptId: `data_image_${nanoid().toLowerCase().replace(/-/g, "_")}`, // 控件概念id;
      value: "",
      imageData: { type: DataImageType.BAR_CODE, data: { value: "-" } }
    }
  ]);
};

const innerQrcode = () => {
  register.emit("executeInsertElementList", [
    {
      type: ElementType.DATA_IMAGE,
      conceptId: `data_image_${nanoid().toLowerCase().replace(/-/g, "_")}`, // 控件概念id;
      value: "",
      imageData: { type: DataImageType.QR_CODE, data: { value: "-" } }
    }
  ]);
};

// 插入月经史
const innerMH = () => {
  register.emit("executeInsertElementList", [
    {
      type: ElementType.DATA_IMAGE,
      conceptId: `data_image_${nanoid().toLowerCase().replace(/-/g, "_")}`, // 控件概念id;
      value: "",
      imageData: {
        type: DataImageType.MH,
        data: {
          menarcheAge: 13, // 初潮年龄
          periodDaysMin: 5, // 月经持续最小天数
          periodDaysMax: 7, // 月经持续最大天数
          cycleDaysMin: 28, // 生理周期最小天数
          cycleDaysMax: 30, // 生理周期最大天数
          lastMenstruationDate: new Date().toISOString().split("T")[0], // 末次月经日期
          isMenopause: "N" // 是否闭经
        }
      }
    }
  ]);
};

// 插入牙位图
const innerHR = () => {
  register.emit("executeInsertElementList", [
    {
      type: ElementType.DATA_IMAGE,
      conceptId: `data_image_${nanoid().toLowerCase().replace(/-/g, "_")}`, // 控件概念id;
      value: "",
      imageData: {
        type: DataImageType.HR,
        data: {}
      }
    }
  ]);
};

// 插入牙位图
const innerFDI = () => {
  register.emit("executeInsertElementList", [
    {
      type: ElementType.DATA_IMAGE,
      conceptId: `data_image_${nanoid().toLowerCase().replace(/-/g, "_")}`, // 控件概念id;
      value: "",
      imageData: {
        type: DataImageType.FDI,
        data: {
          "1": [],
          "2": [],
          "3": [],
          "4": []
        }
      }
    }
  ]);
};
</script>

<style scoped lang="less">
.info-color {
  color: @color-text-2;
  padding-top: 3px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

::v-deep(.arco-btn-size-mini) {
  padding: 0 8px;
}

.separator-line {
  padding: 2px 0;

  &:hover {
    background-color: rgba(51, 77, 102, 0.06);
  }
}

.symbol-content {
  .symbol-text {
    display: inline-block;
    width: 40px;
    overflow: hidden;
    color: @color-text-2;
  }
  ::v-deep(.arco-btn-size-mini) {
    padding: 0 2px;
  }
}

.option_item {
  //padding: 6px 8px;
  cursor: pointer;
  //border-radius: 2px;
  display: flex;
  align-items: center;
  //&:hover {
  //  background-color: rgba(51, 77, 102, 0.06);
  //}
  & > span {
    margin-left: 6px;
  }
}
</style>
