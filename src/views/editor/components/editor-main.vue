<template>
  <div class="editor-center-body pk_page" :id="editorCenterId">
    <div style="position: relative">
      <div class="canvas-editor"></div>
    </div>
    <teleport :to="`#${editorCenterId} .canvas-editor .ce-page-container`" v-if="showModal">
      <div
        :style="{ left: `${position.x}px`, top: `${position.y}px` }"
        class="editor-modal"
        v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU"
        @click.passive.stop
        @dblclick.passive.stop
      >
        <select-modal
          @change="selectChange"
          :is-multi-select="selectControlInfo.isMultiSelect"
          :options="selectControlInfo.options"
          :value="selectControlInfo.value"
          v-if="modalType === ControlType.SELECT"
        ></select-modal>
        <date-modal
          @change="dateChange"
          :value="dateControlInfo.value"
          :format="dateControlInfo.dateFormat"
          v-else-if="modalType === ControlType.DATE"
        />
      </div>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import JSZip from "jszip";
import { jsPDF } from "jspdf";
import { nanoid } from "nanoid";
import Editor, {
  RenderMode,
  EditorMode,
  PageMode,
  type IRangeStyle,
  PaperDirection,
  ElementType,
  ControlType,
  EDITOR_COMPONENT,
  EditorComponent
} from "@panku/canvas-editor";
import { saveFile } from "@/utils/files.ts";
import { Message } from "@arco-design/web-vue";
import { debounce, executeWhenIdle } from "@/utils";
import DateModal from "./control-modal/date-modal.vue";
import SelectModal from "./control-modal/select-modal.vue";
import { SAVE_EDITOR_DATA_KEY } from "@/views/editor/core/const";
import { Register } from "@/views/editor/core/register/Register.ts";
import { getControlElement } from "@/views/editor/core/const/concept.ts";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";
import type { IEditorResult } from "@panku/canvas-editor/dist/src/editor/interface/Editor";
import { useEditorModalHook } from "@/views/editor/core/hooks/use-editor-modal-hook.ts";
import { useConceptSettingHook } from "@/views/editor/core/hooks/use-concept-setting-hook.ts";
import type { IExtension } from "@/views/editor/interface/Concept.ts";
import floatingToolbarPlugin from "@hufe921/canvas-editor-plugin-floating-toolbar";
import { useDataImageHook } from "@/views/editor/core/hooks/use-data-image-hook.ts";
import { useCopyPasteHook } from "@/views/editor/core/hooks/use-copy-paste-hook.ts";
import { useContextMenuHook } from "@/views/editor/core/hooks/use-context-menu-hook.tsx";
import { useConceptLinkageHook } from "@/views/editor/core/hooks/use-concept-linkage-hook.ts";

defineOptions({ name: "editor-main" });

const route = useRoute();
// 创建编辑器容器ID
const editorCenterId = ref(`editor_center_${nanoid()}`);

const register = new Register(); // 注册事件总线

// 弹窗插件
const { modalPlugin, position, showModal, modalType, selectControlInfo, selectChange, dateControlInfo, dateChange } =
  useEditorModalHook();
const { conceptSettingPlugin } = useConceptSettingHook(); // 控件设置插件
const { dataImagePlugin } = useDataImageHook(); // 数据图片插件
const { pastePlugin } = useCopyPasteHook(); // 编辑器辅助粘贴插件
const { contextMenuPlugin } = useContextMenuHook(); // 右键菜单插件
const { conceptLinkagePlugin } = useConceptLinkageHook(); // 控件联动插件

// region 👉👉👉👉👉 编辑器初始化相关操作 👈👈👈👈👈
let instance: Editor | null = null;
const initEditor = () => {
  if (instance) return; // 避免重复初始化，确保编辑器只初始化一次
  // 1. 初始化编辑器
  const container = document.querySelector<HTMLDivElement>(".canvas-editor")!;
  instance = new Editor(
    container,
    { header: [], main: [], footer: [] },
    {
      renderMode: RenderMode.SPEED, // 渲染模式：极速（多个字组合渲染）、兼容（逐字渲染：避免浏览器字体等环境差异）。默认：极速
      mode: (route.query.mode ? route.query.mode : EditorMode.DESIGN) as EditorMode, //  EditorMode.EDIT, // 默认编辑模式
      pageMode: PageMode.PAGING, // 页面模式
      margins: [37, 37, 37, 37], // 页边距
      pageNumber: { format: "{pageNo} / {pageCount}" },
      // watermark: { data: "第一人民医院", size: 160, gap: [50, 50] },
      placeholder: { data: "请输入正文" },
      maskMargin: [0, 0, 0, 0], // 菜单栏高度60，底部工具栏30为遮盖层
      scrollContainerSelector: ".editor-center-body", // 设置滚动区域
      rangeColor: "#8BC7AD", // 选区颜色
      rangeAlpha: 0.3, // 选区透明度
      // 控件信息配置
      control: {
        placeholderColor: "#9c9b9b",
        bracketColor: "#1772F6",
        prefix: "[",
        postfix: "]",
        borderWidth: 1,
        borderColor: "#000000",
        // activeBackgroundColor: "#CAEACE",
        disabledBackgroundColor: "#C7EDCC",
        // existValueBackgroundColor: "#bbd8fc",
        noValueBackgroundColor: "#C7EDCC"
      },
      // 表格信息配置
      table: {
        tdPadding: [0, 0, 0, 0],
        defaultTrMinHeight: 10,
        defaultColMinWidth: 20,
        defaultBorderColor: "#000000"
      },
      // 编辑器区域配置
      zone: {
        tipDisabled: false // 是否禁用区域提示
      },
      // 页眉信息配置
      header: {
        // disabled: true
        top: 0
      },
      // 编辑器模式规则配置
      modeRule: {
        form: {
          controlDeletableDisabled: true // 表单模式下禁用删除控件
        }
      },
      // 光标样式配置
      cursor: {
        width: 3,
        color: "#000000",
        dragWidth: 3,
        dragColor: "#000000",
        dragFloatImageDisabled: false
      },
      // 组相关配置
      group: {
        opacity: 0.2,
        backgroundColor: "#FADC19",
        activeOpacity: 0.4,
        activeBackgroundColor: "#FADC19",
        disabled: false,
        deletable: true
      }
    }
  );

  nextTick(() => {
    publishEditorInfo(); // 发布编辑器信息
    handleContentChange(); // 监听内容变化
  }); // 发布编辑器信息

  // // 监听控件内容发生变化
  // instance.eventBus.on("controlContentChange", payload => {
  //   console.info(
  //     instance!.command.getControlValue({ conceptId: payload.control?.conceptId }),
  //     "🚀 ~ file:editor-main.vue line:147 payload"
  //   );
  // });
  // 发布编辑器缩放比例发生变化
  instance.eventBus.on("pageScaleChange", payload => register.emit("pageScaleChange", payload));
  // 发布可见页码列表发生变化
  instance.eventBus.on("visiblePageNoListChange", payload => register.emit("visiblePageNoListChange", payload));
  // 发布页数发生变化
  instance.eventBus.on("pageSizeChange", payload => register.emit("pageCountChange", payload));
  // 发布当前页码发生变化
  instance.eventBus.on("intersectionPageNoChange", payload => register.emit("intersectionPageNoChange", payload));
  // 编辑器内容发生变化
  instance.eventBus.on("contentChange", debounce(handleContentChange, 200));
  // 编辑器光标选区发生改变
  instance.eventBus.on("rangeStyleChange", debounce(handleRangeStyleChange, 200));
  // 监听保存事件
  instance.eventBus.on("saved", () => register.emit("saveData"));
  instance.use(modalPlugin); // 引入弹窗插件
  instance.use(conceptSettingPlugin); // 引入控件设置插件
  instance.use(dataImagePlugin); // 引入数据图片插件
  instance.use(pastePlugin); // 引入复制粘贴插件
  instance.use(contextMenuPlugin); // 右键菜单插件
  instance.use(conceptLinkagePlugin); // 控件联动插件
  // @ts-expect-error
  instance.use(floatingToolbarPlugin);
};
onMounted(() => initEditor());

// 发布编辑器信息
const publishEditorInfo = () => {
  executeWhenIdle(() => {
    const editorOptions = instance!.command.getOptions(); // 获取编辑器配置项
    register.emit("editorModeChange", editorOptions.mode); // 发布编辑器模式发生变化
    register.emit("editorMarginChange", editorOptions.margins); // 发布编辑器边距发生变化
    register.emit("editorPaperDirectionChange", editorOptions.paperDirection); // 发布编辑器纸张方向发生变化
    register.emit("editorPageNumberChange", editorOptions.pageNumber); // 发布编辑器页码信息发生变化
    // 获取页眉页脚信息
    register.emit("editorHeaderAndFooterChange", { header: editorOptions.header, footer: editorOptions.footer });
    // 获取纸张信息
    register.emit("editorPaperChange", { width: editorOptions.width, height: editorOptions.height });
    register.emit("rangeStyleChange", {
      font: editorOptions.defaultFont, // 默认字体
      size: editorOptions.defaultSize, // 默认字体大小
      color: editorOptions.defaultColor // 默认字体颜色
    });
  });
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 编辑器内容发生变化后要实现的函数 👈👈👈👈👈
const handleContentChange = async () => {
  // 获取字数
  const wordCount = await instance!.command.getWordCount();
  register.emit("wordCountChange", wordCount || 0);
  // TODO: 获取目录
  // TODO: 获取批注
  // const groupIds = await instance!.command.getGroupIds();
  // register.emit("updateComment", { groupIds });
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 选区样式发生改变 👈👈👈👈👈
const handleRangeStyleChange = (payload: IRangeStyle) => {
  // 行列信息
  const rangeContext = instance!.command.getRangeContext();
  if (rangeContext) {
    register.emit("rowAndColNoChange", {
      row: rangeContext.startRowNo + 1,
      col: rangeContext.startColNo + 1
    });
  }
  // 对外发布当前选区信息
  register.emit("rangeStyleChange", payload);
  // 定位当前选中的配置
  register.emit("locationComment", { groupIds: payload.groupIds || [] });
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 编辑器缩放相关操作 👈👈👈👈👈
// 设置编辑器缩放
const [executePageScale] = useListenerHook("executePageScale", (value: number) => instance!.command.executePageScale(value));
// 设置最佳缩放比例
useListenerHook("setMaxPageScale", () => {
  const { width, scrollContainerSelector } = instance!.command.getOptions();
  const { clientWidth } = scrollContainerSelector
    ? document.querySelector(scrollContainerSelector) || document.documentElement
    : document.documentElement;
  executePageScale(Number(((clientWidth - 40) / width).toFixed(2)));
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 剪切板相关操作 👈👈👈👈👈
useListenerHook("executeCopy", () => instance!.command.executeCopy()); // 复制
useListenerHook("executePaste", () => instance!.command.executePaste()); // 粘贴
useListenerHook("executeCut", () => instance!.command.executeCut()); // 剪切
useListenerHook("executeUndo", () => instance!.command.executeUndo()); // 撤销
useListenerHook("executeRedo", () => instance!.command.executeRedo()); // 反撤销
useListenerHook("executePainter", isDblclick => instance!.command.executePainter({ isDblclick: isDblclick })); // 格式刷
useListenerHook("executeFormat", () => instance!.command.executeFormat()); // 清除格式
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 字体相关操作 👈👈👈👈👈
useListenerHook("executeFont", fontName => instance!.command.executeFont(fontName)); // 设置字体
useListenerHook("executeSize", size => instance!.command.executeSize(size)); // 设置字体大小
useListenerHook("executeSizeAdd", () => instance!.command.executeSizeAdd()); // 字体大小增加
useListenerHook("executeSizeMinus", () => instance!.command.executeSizeMinus()); // 字体大小减少
useListenerHook("executeBold", () => instance!.command.executeBold()); // 字体加粗
useListenerHook("executeItalic", () => instance!.command.executeItalic()); // 字体斜体
useListenerHook("executeUnderline", style => {
  // 设置下划线
  if (style) instance!.command.executeUnderline({ style });
  else instance!.command.executeUnderline();
});
useListenerHook("executeStrikeout", () => instance!.command.executeStrikeout()); // 添加删除线
useListenerHook("executeSuperscript", () => instance!.command.executeSuperscript()); // 上标
useListenerHook("executeSubscript", () => instance!.command.executeSubscript()); // 添加下标
useListenerHook("executeColor", color => instance!.command.executeColor(color)); // 设置字体颜色
useListenerHook("executeHighlight", color => instance!.command.executeHighlight(color)); // 设置突出显示
useListenerHook("executeTitle", value => instance!.command.executeTitle(value)); // 设置选区标题
useListenerHook("executeRowFlex", value => instance!.command.executeRowFlex(value)); // 设置行对齐方式
useListenerHook("executeRowMargin", value => instance!.command.executeRowMargin(value)); // 设置行间距
useListenerHook("executeList", payload => {
  // 添加列表
  if (payload.listType) instance!.command.executeList(payload.listType, payload.listStyle);
  else instance!.command.executeList(null);
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 搜索相关 👈👈👈👈👈
// 设置搜索结果
const setSearchResult = () => {
  const result = instance!.command.getSearchNavigateInfo(); // 拿到搜索结果
  if (result) {
    const { index, count } = result;
    register.emit("searchResultChange", `${index}/${count}`);
  } else {
    register.emit("searchResultChange", `0/0`);
  }
};

// 搜索
const [executeSearch] = useListenerHook("executeSearch", val => {
  instance!.command.executeSearch(val);
  setSearchResult();
});
useListenerHook("executeSearchNavigatePre", () => {
  instance!.command.executeSearchNavigatePre();
  setSearchResult();
});
useListenerHook("executeSearchNavigateNext", () => {
  instance!.command.executeSearchNavigateNext();
  setSearchResult();
});
// 替换
useListenerHook("executeReplace", ({ oldVal, newVal }) => {
  instance!.command.executeReplace(newVal);
  executeSearch(oldVal || null); // 替换完成后重新搜索
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 插入相关操作 👈👈👈👈👈
// 插入表格
useListenerHook("executeInsertTable", ({ row, col }) => {
  instance!.command.executeInsertTable(row, col);
});
// 插入图片
useListenerHook("executeImage", () => {
  // instance!.command.executeImage();
  const imageFileDom = document.createElement("input");
  imageFileDom.type = "file";
  imageFileDom.accept = ".png, .jpg, .jpeg, .svg, .gif";
  imageFileDom.onchange = () => {
    const file = imageFileDom.files![0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      // 计算宽高
      const image = new Image();
      const value = fileReader.result as string;
      image.src = value;
      image.onload = () => {
        instance!.command.executeImage({
          value,
          width: image.width,
          height: image.height
        });
        imageFileDom.remove();
      };
    };
  };
  imageFileDom.click();
});
// 插入分页符
useListenerHook("executePageBreak", () => instance!.command.executePageBreak());
// 插入分割符
useListenerHook("executeSeparator", value => instance!.command.executeSeparator(value));
// 插入文本
useListenerHook("executeInsertText", value => {
  instance!.command.executeInsertElementList(
    [
      {
        type: ElementType.TEXT,
        value: value
      }
    ],
    { isSubmitHistory: true }
  );
});
// 插入元素
useListenerHook("executeInsertElementList", payload => {
  instance!.command.executeInsertElementList(payload, { isSubmitHistory: true });
});
// 插入区域
useListenerHook("executeInsertArea", payload => {
  instance!.command.executeInsertArea(payload);
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 控件相关 👈👈👈👈👈
// 插入控件
useListenerHook("executeInsertControl", type => {
  const controlObj = getControlElement(type);
  if (controlObj) {
    instance!.command.executeInsertControl(controlObj);
  }
});
useListenerHook("executeSetControlValue", payload => {
  console.info(payload, "🚀 ~ file:editor-main.vue line:384 payload");
  const controlList = instance!.command.getControlList();
  const controls = controlList.filter(
    item => (item.control?.extension as IExtension).dataElementCode === payload.dataElementCode
  );
  const setControlValue = controls.map(item => {
    return { conceptId: item.control!.conceptId, value: payload.value };
  });
  // 为控件设置值
  instance!.command.executeSetControlValueList(setControlValue);
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 页面相关 👈👈👈👈👈
// 编辑器模式
useListenerHook("executeMode", value => {
  instance!.command.executeMode(value); // 设置编辑器模式
  executeWhenIdle(() => publishEditorInfo());
});
// 页边距
useListenerHook("setEditorMargin", value => {
  instance!.command.executeSetPaperMargin(value); // 设置页面边距
  executeWhenIdle(() => publishEditorInfo()); // 发布编辑器信息
});
// 纸张大小
useListenerHook("executePaperSize", value => {
  instance!.command.executePaperSize(value.width, value.height);
  executeWhenIdle(() => publishEditorInfo()); // 发布编辑器信息
});
// 纸张方向
useListenerHook("executePaperDirection", value => {
  instance!.command.executePaperDirection(value);
  executeWhenIdle(() => publishEditorInfo()); // 发布编辑器信息
});
// 页码配置
useListenerHook("setEditorPageNumber", value => {
  const options = instance!.command.getOptions(); // 获取编辑器配置项
  instance!.command.executeUpdateOptions({ ...options, pageNumber: { ...options.pageNumber, ...value } });
  executeWhenIdle(() => publishEditorInfo()); // 发布编辑器信息
});
// 页眉页脚配置
useListenerHook("setEditorHeaderAndFooter", value => {
  const options = instance!.command.getOptions(); // 获取编辑器配置项
  instance!.command.executeUpdateOptions({
    ...options,
    header: { ...options.header, ...value.header },
    footer: { ...options.footer, ...value.footer }
  });
  executeWhenIdle(() => publishEditorInfo()); // 发布编辑器信息
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 文件相关操作 👈👈👈👈👈
// 导出图片
useListenerHook("exportImage", async () => {
  const base64StringList = await instance!.command.getImage({ mode: EditorMode.PRINT, pixelRatio: 3 });
  // 创建 ZIP 实例
  const zip = new JSZip();
  base64StringList.forEach((item, index) => {
    const base64Data = item.split(",")[1];
    zip.file(`第${index + 1}页.png`, base64Data, { base64: true });
  });
  const blob = await zip.generateAsync({ type: "blob" });
  saveFile(URL.createObjectURL(blob), "病历图片.zip");
});
useListenerHook("exportPDF", async () => {
  const base64StringList = await instance!.command.getImage({ mode: EditorMode.PRINT, pixelRatio: 3 });
  const editorOption = instance!.command.getOptions(); // 获取编辑器配置信息
  // 方向=>l(横向) /p(纵向)
  const paperDirection = editorOption.paperDirection === PaperDirection.VERTICAL ? "p" : "l";
  const recordPdf = new jsPDF(paperDirection, "px", [editorOption.width, editorOption.height]);
  for (let i = 0; i < base64StringList.length; i++) {
    recordPdf.addImage(base64StringList[i], "PNG", 0, 0, editorOption.width, editorOption.height);
    recordPdf.addPage([editorOption.width, editorOption.height]);
  }
  // 删除最后一页留白
  recordPdf.deletePage(recordPdf.getNumberOfPages());
  recordPdf.save("病历PDF.pdf");
});
// 打印文档
useListenerHook("executePrint", () => instance!.command.executePrint());
// 保存数据
useListenerHook("saveData", () => {
  const editorData = instance!.command.getValue({ extraPickAttrs: ["controlId", "conceptId", "id"] });
  localStorage.setItem(SAVE_EDITOR_DATA_KEY, JSON.stringify(editorData));
  Message.success("数据保存成功");
});
// 获取所有控件数据
useListenerHook("getAllControlValue", () => {
  const eleData: { [key: string]: string } = {};
  const controlList = instance!.command.getControlList();
  for (const item of controlList) {
    const value = instance!.command.getControlValue({ conceptId: item.control?.conceptId })![0];
    if (value && typeof value.extension === "object" && value.extension !== null) {
      const ext = value.extension as IExtension;
      const dataElementCode = ext.dataElementCode ?? "";
      eleData[dataElementCode] = value.value ?? "";
    }
  }
  alert(JSON.stringify(eleData, null, 2));
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 批注相关 👈👈👈👈👈
// 删除批注
useListenerHook("delComment", ({ groupId }) => {
  instance!.command.executeDeleteGroup(groupId);
});
// 定位批注
useListenerHook("editorLocationComment", ({ groupId }) => {
  instance!.command.executeLocationGroup(groupId);
});
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 更新内容与选项 👈👈👈👈👈
const updateContentAndOptions = (payload: Partial<Omit<IEditorResult, "version">>) => {
  initEditor(); // 首先舒适化编辑器
  const editorOptions = instance!.command.getOptions(); // 获取编辑器配置项
  const { options, data } = payload;
  // delete options.mode;
  instance!.command.executePageScaleRecovery(); // 恢复页面缩放比例
  if (data) instance!.command.executeSetValue(data); // 设置数据
  if (options) {
    // @ts-expect-error
    instance!.command.executeUpdateOptions({ ...options, mode: editorOptions.mode });
    instance!.command.executePaperSize(options.width!, options.height!); // 设置纸张大小
    instance!.command.executePaperDirection(options.paperDirection!); // 设置纸张方向
  }
  // 发布编辑器信息
  executeWhenIdle(() => publishEditorInfo());
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

defineExpose({ updateContentAndOptions });
</script>

<style scoped lang="less">
.editor-center-body {
  .canvas-editor {
    position: relative;
    min-width: min-content;

    :deep(> div) {
      margin: 10px auto 30px;
    }
  }

  .editor-modal {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    position: absolute;
    z-index: 9999;
    width: max-content;
    background-color: #ffffff;
  }
}
</style>
