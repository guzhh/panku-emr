<template>
  <div class="flex-wrap edit-menu">
    <a-button type="text" size="mini" title="复制" @click="executeCopy">
      <template #icon>
        <pk-svg-icon name="editor-copy" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="粘贴" @click="executePaste">
      <template #icon>
        <pk-svg-icon name="editor-paste" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="剪切" @click="executeCut">
      <template #icon>
        <pk-svg-icon name="editor-shear" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="撤销" @click="executeUndo">
      <template #icon>
        <pk-svg-icon name="editor-undo" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="反撤销" @click="executeRedo">
      <template #icon>
        <pk-svg-icon name="editor-redo" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="格式刷" @click="executePainterClick" @dblclick="executePainterDbclick">
      <template #icon>
        <pk-svg-icon name="editor-painter" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="清除格式" @click="executeFormat">
      <template #icon>
        <pk-svg-icon name="editor-format" :size="16" />
      </template>
    </a-button>

    <a-divider direction="vertical" :margin="4" />

    <a-select size="mini" :style="{ width: '100px' }" v-model="fontFamily" @change="handleFontChange">
      <template #label="{ data: { label, value } }">
        <span :style="{ fontFamily: value }">{{ label }}</span>
      </template>
      <a-option
        :key="item.value"
        :value="item.value"
        v-for="item in FONT_OPTIONS"
        v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU"
      >
        <span :style="{ fontFamily: item.value }">{{ item.label }}</span>
      </a-option>
    </a-select>
    <a-select size="mini" :style="{ width: '80px', margin: '0 8px' }" v-model="fontSize" @change="handleFontSizeChange">
      <a-option
        :key="item.value"
        :value="item.value"
        v-for="item in FONT_SIZE_OPTIONS"
        v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU"
      >
        <span>{{ item.label }}</span>
      </a-option>
    </a-select>
    <a-button type="text" size="mini" title="增大字号" @click="executeSizeAdd">
      <template #icon>
        <pk-svg-icon name="editor-size-add" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="减小字号" @click="executeSizeMinus">
      <template #icon>
        <pk-svg-icon name="editor-size-minus" :size="16" />
      </template>
    </a-button>
    <a-button :type="fontBold ? 'secondary' : 'text'" size="mini" title="加粗" @click="executeBold">
      <template #icon>
        <pk-svg-icon name="editor-bold" :size="16" />
      </template>
    </a-button>
    <a-button :type="fontItalic ? 'secondary' : 'text'" size="mini" title="斜体" @click="executeItalic">
      <template #icon>
        <pk-svg-icon name="editor-italic" :size="16" />
      </template>
    </a-button>
    <a-dropdown trigger="hover" @select="handleUnderlineChange">
      <a-button
        @click="handleUnderlineChange()"
        :type="fontUnderline ? 'secondary' : 'text'"
        size="mini"
        title="下划线"
        style="padding: 0 2px"
      >
        <pk-svg-icon name="editor-underline" :size="16" />
        <icon-down :size="10" style="color: #3d4757" />
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
          <a-doption v-for="item in UNDERLINE_OPTIONS" :key="item.value" :value="item.value">
            <pk-svg-icon :name="'editor-' + item.label" :size="16" style="width: 96px" />
          </a-doption>
        </div>
      </template>
    </a-dropdown>
    <a-button :type="fontStrikeout ? 'secondary' : 'text'" size="mini" title="删除线" @click="executeStrikeout">
      <template #icon>
        <pk-svg-icon name="editor-strikeout" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="上标" @click="executeSuperscript">
      <template #icon>
        <pk-svg-icon name="editor-superscript" :size="16" />
      </template>
    </a-button>
    <a-button type="text" size="mini" title="下标" @click="executeSubscript">
      <template #icon>
        <pk-svg-icon name="editor-subscript" :size="16" />
      </template>
    </a-button>
    <a-color-picker
      showPreset
      showHistory
      v-model="fontColor"
      :historyColors="historyColor"
      @change="executeColor"
      @popup-visible-change="addColorHistory"
      v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU"
      :preset-colors="PRESET_COLORS"
    >
      <a-button type="text" size="mini" title="字体颜色">
        <template #icon>
          <div>
            <pk-svg-icon name="editor-color" :size="14" />
            <div style="width: 16px; height: 3px" :style="{ backgroundColor: fontColor }"></div>
          </div>
        </template>
      </a-button>
    </a-color-picker>
    <a-color-picker
      showPreset
      showHistory
      v-model="highlightColor"
      :historyColors="historyColor"
      @change="executeHighlight"
      @popup-visible-change="addColorHistory"
      v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU"
      :preset-colors="PRESET_COLORS"
    >
      <a-button type="text" size="mini" title="突出显示">
        <template #icon>
          <div>
            <pk-svg-icon name="editor-highlight" :size="14" />
            <div style="width: 16px; height: 3px" :style="{ backgroundColor: highlightColor }"></div>
          </div>
        </template>
      </a-button>
    </a-color-picker>

    <a-divider direction="vertical" :margin="4" />

    <a-dropdown :popup-max-height="false" @select="executeTitle">
      <a-button size="mini" type="text" style="padding: 0 2px">
        <template #icon>
          <pk-svg-icon name="editor-title" :size="16" />
        </template>
        <span class="info-color" style="padding-top: 2px">
          {{ titleLabelValue }}
          <icon-down :size="10" style="color: #3d4757" />
        </span>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
          <a-doption v-for="item in TITLE_OPTIONS" :key="item.value" :value="item.value">
            <span :style="{ fontSize: item.fontSize, color: titleValue === item.value ? 'rgb(var(--primary-6))' : undefined }">{{
              item.label
            }}</span>
          </a-doption>
        </div>
      </template>
    </a-dropdown>

    <a-divider direction="vertical" :margin="4" />

    <a-button
      :type="alignActive === RowFlex.LEFT ? 'secondary' : 'text'"
      size="mini"
      title="左对齐"
      @click="executeRowFlex(RowFlex.LEFT)"
    >
      <template #icon>
        <pk-svg-icon name="editor-left" :size="16" />
      </template>
    </a-button>
    <a-button
      :type="alignActive === RowFlex.CENTER ? 'secondary' : 'text'"
      size="mini"
      title="居中对齐"
      @click="executeRowFlex(RowFlex.CENTER)"
    >
      <template #icon>
        <pk-svg-icon name="editor-center" :size="16" />
      </template>
    </a-button>
    <a-button
      :type="alignActive === RowFlex.RIGHT ? 'secondary' : 'text'"
      size="mini"
      title="右对齐"
      @click="executeRowFlex(RowFlex.RIGHT)"
    >
      <template #icon>
        <pk-svg-icon name="editor-right" :size="16" />
      </template>
    </a-button>
    <a-button
      :type="alignActive === RowFlex.ALIGNMENT ? 'secondary' : 'text'"
      size="mini"
      title="两端对齐"
      @click="executeRowFlex(RowFlex.ALIGNMENT)"
    >
      <template #icon>
        <pk-svg-icon name="editor-alignment" :size="16" style="color: #3d4757" />
      </template>
    </a-button>
    <a-button
      :type="alignActive === RowFlex.JUSTIFY ? 'secondary' : 'text'"
      size="mini"
      title="分散对齐"
      @click="executeRowFlex(RowFlex.JUSTIFY)"
    >
      <template #icon>
        <pk-svg-icon name="editor-justify" :size="16" style="color: #3d4757" />
      </template>
    </a-button>

    <a-divider direction="vertical" :margin="4" />

    <a-dropdown @select="executeRowMargin">
      <a-button type="text" size="mini" title="行间距">
        <template #icon>
          <pk-svg-icon name="editor-row-margin" :size="16" />
        </template>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
          <a-doption v-for="item in ROW_MARGIN_OPTIONS" :key="item.value" :value="item.value">
            <span
              :style="{ color: rowMarginValue === item.value ? 'rgb(var(--primary-6))' : undefined }"
              style="display: inline-block; width: 50px"
            >
              {{ item.label }}
            </span>
          </a-doption>
        </div>
      </template>
    </a-dropdown>
    <a-dropdown @select="executeList" trigger="hover">
      <a-button type="text" size="mini" title="列表">
        <template #icon>
          <pk-svg-icon name="editor-list" :size="16" />
        </template>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
          <a-doption value="取消列表">取消列表</a-doption>
          <a-doption v-for="item in LIST_TYPE_OPTIONS" :key="item.value" :value="item">
            <div>
              <span>{{ item.icon }}</span>
              <span style="margin-left: 5px">________</span>
            </div>
          </a-doption>
        </div>
      </template>
    </a-dropdown>

    <a-button type="text" size="mini" title="搜索与替换" @click="searchReplace">
      <template #icon>
        <pk-svg-icon name="editor-search" :size="16" />
      </template>
    </a-button>
  </div>
</template>

<script setup lang="tsx">
import { Notification, Input, InputGroup, Button, ButtonGroup, Message } from "@arco-design/web-vue";
import { Register } from "@/views/editor/core/register/Register.ts";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";
import {
  FONT_OPTIONS,
  FONT_SIZE_OPTIONS,
  LIST_TYPE_OPTIONS,
  PRESET_COLORS,
  ROW_MARGIN_OPTIONS,
  TITLE_OPTIONS,
  UNDERLINE_OPTIONS
} from "@/views/editor/core/const";
import { EditorComponent, EDITOR_COMPONENT, TextDecorationStyle, TitleLevel, RowFlex } from "@panku/canvas-editor";
import { IconDown, IconLeft, IconRight } from "@arco-design/web-vue/es/icon";
import { ListType } from "@panku/canvas-editor/dist/src/editor/dataset/enum/List";

defineOptions({ name: "edit-menu" });

const register = new Register(); // 注册事件总线
// region 👉👉👉👉👉 剪切板相关操作 👈👈👈👈👈
const executeCopy = () => register.emit("executeCopy"); // 复制
const executePaste = () => register.emit("executePaste"); // 粘贴
const executeCut = () => register.emit("executeCut"); // 剪切
const executeUndo = () => register.emit("executeUndo"); // 撤销
const executeRedo = () => register.emit("executeRedo"); // 反撤销
const executeFormat = () => register.emit("executeFormat"); // 清除格式
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 格式刷操作 👈👈👈👈👈
let isFirstClick = true;
let painterTimeout: ReturnType<typeof setTimeout>;
// 单次格式刷
const executePainterClick = () => {
  if (isFirstClick) {
    isFirstClick = false;
    painterTimeout = setTimeout(() => {
      isFirstClick = true;
      register.emit("executePainter", false);
    }, 300);
  }
};
// 连续格式刷
const executePainterDbclick = () => {
  isFirstClick = true;
  window.clearTimeout(painterTimeout);
  register.emit("executePainter", true);
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 字体相关 👈👈👈👈👈
const fontFamily = ref(FONT_OPTIONS[0].value); // 字体样式
const handleFontChange = (value: string) => register.emit("executeFont", value);
const fontSize = ref(FONT_SIZE_OPTIONS[9].value); // 字体大小
const handleFontSizeChange = (value: number) => register.emit("executeSize", value);
const executeSizeAdd = () => register.emit("executeSizeAdd"); // 增大字号
const executeSizeMinus = () => register.emit("executeSizeMinus"); // 减小字号
const fontBold = ref(false); // 字体是否加粗
const executeBold = () => register.emit("executeBold"); // 加粗
const fontItalic = ref(false); // 字体是否斜体
const executeItalic = () => register.emit("executeItalic"); // 斜体
const fontUnderline = ref(false); // 文字下划线
const handleUnderlineChange = (value?: string) => register.emit("executeUnderline", value as TextDecorationStyle);
const fontStrikeout = ref(false); // 删除线
const executeStrikeout = () => register.emit("executeStrikeout");
const executeSuperscript = () => register.emit("executeSuperscript"); // 上标
const executeSubscript = () => register.emit("executeSubscript"); // 下标
const fontColor = ref("#000000"); // 字体颜色
const executeColor = (value: string) => {
  if (value === "#000000") register.emit("executeColor", null);
  register.emit("executeColor", value);
};
const highlightColor = ref("#FADC19"); // 高亮颜色
const executeHighlight = (value: string) => {
  // 设置高亮
  if (value === "#FFFFFF") register.emit("executeHighlight", null);
  register.emit("executeHighlight", value);
};
const historyColor = ref(["#165DFF"]); // 历史颜色记录
// 添加历史颜色
const addColorHistory = (visible: boolean, color: string) => {
  if (!visible) {
    const index = historyColor.value.indexOf(color);
    if (index !== -1) {
      historyColor.value.splice(index, 1);
    }
    historyColor.value.unshift(color);
    if (historyColor.value.length > 22) {
      historyColor.value.pop();
    }
  }
};
// 监听选区发生变化
useListenerHook("rangeStyleChange", payload => {
  fontFamily.value = payload.font ?? FONT_OPTIONS[0].value; // 字体
  fontSize.value = payload.size ?? FONT_SIZE_OPTIONS[9].value; // 字体大小
  fontBold.value = payload.bold ?? false; // 字体是否加粗
  fontItalic.value = payload.italic ?? false; // 字体是否斜体
  fontUnderline.value = payload.underline ?? false; // 添加下划线
  fontStrikeout.value = payload.strikeout ?? false; // 添加删除线
  // fontColor.value = payload.color ?? "#000000"; // 字体颜色
  // highlightColor.value = payload.highlight ?? "#ff0"; // 高亮颜色
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 标题相关操作 👈👈👈👈👈
const titleValue = ref(TITLE_OPTIONS[0].value);
const titleLabelValue = ref(TITLE_OPTIONS[0].label);
// 设置标题
const executeTitle = (value: TitleLevel | "") => register.emit("executeTitle", value || null);
useListenerHook("rangeStyleChange", payload => {
  titleValue.value = payload.level ?? "";
  titleLabelValue.value = TITLE_OPTIONS.find(item => item.value === payload.level)?.label || TITLE_OPTIONS[0].label;
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 对齐方式、行间距 👈👈👈👈👈
const alignActive = ref<RowFlex>(RowFlex.LEFT); // 对齐方式
const executeRowFlex = (value: RowFlex) => register.emit("executeRowFlex", value);
const rowMarginValue = ref(ROW_MARGIN_OPTIONS[0].value); // 行间距
const executeRowMargin = (number: number) => register.emit("executeRowMargin", number);
const listTypeValue = ref<ListType | null>(null); // 列表样式
const executeList = (value: (typeof LIST_TYPE_OPTIONS)[0] | "取消列表") => {
  if (value === "取消列表") register.emit("executeList", { listType: null });
  else register.emit("executeList", { listType: value.listType, listStyle: value.value });
};
useListenerHook("rangeStyleChange", payload => {
  alignActive.value = payload.rowFlex ?? RowFlex.LEFT; // 文字对齐方式
  rowMarginValue.value = payload.rowMargin ?? ROW_MARGIN_OPTIONS[0].value; // 行间距
  listTypeValue.value = payload.listType ?? null; // 列表样式
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 搜索与替换 👈👈👈👈👈
let closeNotification: ReturnType<typeof Notification.info> | null = null;
const searchInfo = reactive({
  searchText: "", // 搜索文本
  searchResult: "0/0", // 搜索结果
  replaceText: "" // 替换文本
});
const searchReplace = () => {
  if (closeNotification) return;
  closeNotification = Notification.info({
    title: "搜索与替换",
    showIcon: false,
    closable: true,
    content: () => (
      <div style={{ paddingTop: "10px" }} {...{ [EDITOR_COMPONENT]: EditorComponent.MENU }}>
        <InputGroup>
          <Input
            size="small"
            style={{ width: "170px" }}
            placeholder="请输入搜索文本"
            v-model={searchInfo.searchText}
            onInput={(value: string) => register.emit("executeSearch", value || null)}
            onPressEnter={() => register.emit("executeSearch", searchInfo.searchText || null)}
          />
          <ButtonGroup>
            <Button size="small" type="dashed" disabled={true}>
              <div style={{ width: "50px" }}>{searchInfo.searchResult}</div>
            </Button>
            <Button size="small" type="dashed" onClick={() => register.emit("executeSearchNavigatePre")}>
              {{ icon: () => <IconLeft /> }}
            </Button>
            <Button size="small" type="dashed" onClick={() => register.emit("executeSearchNavigateNext")}>
              {{ icon: () => <IconRight /> }}
            </Button>
          </ButtonGroup>
        </InputGroup>
        <InputGroup style={{ marginTop: "10px" }}>
          <Input style={{ width: "245px" }} size="small" placeholder="请输入替换文本" v-model={searchInfo.replaceText} />
          <Button
            size="small"
            type="outline"
            status="warning"
            onClick={() => {
              if (searchInfo.replaceText) {
                register.emit("executeReplace", { oldVal: searchInfo.searchText, newVal: searchInfo.replaceText });
              } else {
                Message.warning("请输入替换文本");
              }
            }}
          >
            替换
          </Button>
        </InputGroup>
      </div>
    ),
    duration: 0,
    onClose: () => {
      closeNotification = null;
      searchInfo.searchText = "";
      searchInfo.replaceText = "";
      searchInfo.searchResult = "0/0";
    }
  });
};
useListenerHook("searchResultChange", payload => {
  console.info(payload, "🚀 ~ file:edit-menu.vue line:466 payload");
  searchInfo.searchResult = payload; // 搜索结果
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
</script>

<style scoped lang="less">
.edit-menu {
  .info-color {
    color: @color-text-2;
    padding-top: 3px;
  }

  ::v-deep(.arco-btn-size-mini) {
    padding: 0 10px;
    margin-left: 2px;
    margin-right: 2px;
  }
}
</style>
