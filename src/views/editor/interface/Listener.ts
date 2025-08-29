import {
  ControlType,
  EditorMode,
  type IRangeStyle,
  type ListStyle,
  ListType,
  PaperDirection,
  type RowFlex,
  TextDecorationStyle,
  type TitleLevel,
  type IElement
} from "@panku/canvas-editor";
import type { IMargin } from "@panku/canvas-editor/dist/src/editor/interface/Margin";
import type { IInsertAreaOption } from "@panku/canvas-editor/dist/src/editor/interface/Area";
import { type IPageNumber } from "@panku/canvas-editor/dist/src/editor/interface/PageNumber";
import type { IControlInfo } from "@/views/editor/interface/Concept.ts";
import type { IAnnotation } from "@/views/editor/interface/Annotation.ts";
import { type IHeader } from "@panku/canvas-editor/dist/src/editor/interface/Header";
import { type IFooter } from "@panku/canvas-editor/dist/src/editor/interface/Footer";

export interface IEventListener {
  // 编辑器模式发生改变
  editorModeChange: (payload: EditorMode) => void;
  // 设置编辑器模式
  executeMode: (payload: EditorMode) => void;
  // 编辑器页码设置发生变化
  editorPageNumberChange: (payload: IPageNumber) => void;
  // 设置编辑器页码
  setEditorPageNumber: (payload: IPageNumber) => void;
  // 页边距发生改变
  editorMarginChange: (payload: IMargin) => void;
  // 设置页边距
  setEditorMargin: (payload: IMargin) => void;
  // 纸张方向发生改变
  editorPaperDirectionChange: (payload: PaperDirection) => void;
  // 设置纸张方向
  executePaperDirection: (payload: PaperDirection) => void;
  // 纸张发生改变
  editorPaperChange: (payload: { width: number; height: number }) => void;
  // 设置编辑器宽度和高度
  executePaperSize: (payload: { width: number; height: number }) => void;
  // 页眉页脚发生改变
  editorHeaderAndFooterChange: (payload: { header: IHeader; footer: IFooter }) => void;
  // 设置页眉页脚
  setEditorHeaderAndFooter: (payload: { header: IHeader; footer: IFooter }) => void;
  // 设置最佳缩放比例
  setMaxPageScale: () => void;
  // 执行缩放
  executePageScale: (payload: number) => void;
  // 缩放比例改变
  pageScaleChange: (payload: number) => void;
  // 可见页码发生变化
  visiblePageNoListChange: (payload: number[]) => void;
  // 页数发生变化
  pageCountChange: (payload: number) => void;
  // 当前页面改变
  intersectionPageNoChange: (payload: number) => void;
  // 通知字数发生变化
  wordCountChange: (payload: number) => void;
  // 更新批注信息
  updateComment: (payload: { groupIds: string[] }) => void;
  // 添加批注
  addComment: (payload: IAnnotation) => void;
  // 删除批注
  delComment: (payload: { groupId: string }) => void;
  // 创建批注
  createComment: () => void;
  // 编辑器中定位批注
  editorLocationComment: (payload: { groupId: string }) => void;
  // 批注列表定位配置
  locationComment: (payload: { groupIds: string[] }) => void;
  // 光标所在行列发生变化
  rowAndColNoChange: (payload: { row: number; col: number }) => void;

  // region 👉👉👉👉👉 编辑器相关 👈👈👈👈👈
  // 复制
  executeCopy: () => void;
  // 粘贴
  executePaste: () => void;
  // 剪切
  executeCut: () => void;
  // 撤销
  executeUndo: () => void;
  // 反撤销
  executeRedo: () => void;
  /**
   * 格式刷
   * @param {boolean} isDblclick 是否连续格式刷
   */
  executePainter: (isDblclick: boolean) => void;
  // 清除格式
  executeFormat: () => void;

  // 监听字体样式改变
  rangeStyleChange: (payload: Partial<IRangeStyle>) => void;
  // 设置字体
  executeFont: (font: string) => void;
  // 设置字体大小
  executeSize: (size: number) => void;
  // 字体大小增加
  executeSizeAdd: () => void;
  // 字体大小减少
  executeSizeMinus: () => void;
  // 字体加粗
  executeBold: () => void;
  // 字体斜体
  executeItalic: () => void;
  // 设置下划线
  executeUnderline: (style?: TextDecorationStyle) => void;
  // 设置删除线
  executeStrikeout: () => void;
  // 设置上标
  executeSuperscript: () => void;
  // 添加下标
  executeSubscript: () => void;
  // 设置字体颜色
  executeColor: (payload: string | null) => void;
  // 突出显示
  executeHighlight: (payload: string | null) => void;
  // 设置标题
  executeTitle: (payload: TitleLevel | null) => void;
  // 实在行对齐方式
  executeRowFlex: (payload: RowFlex) => void;
  // 设置行间距
  executeRowMargin: (payload: number) => void;
  // 设置列表
  executeList: (payload: { listType: ListType | null; listStyle?: ListStyle }) => void;
  // 搜索
  executeSearch: (payload: string | null) => void;
  // 搜索结果
  searchResultChange: (payload: string) => void;
  // 搜索结果导航上一个
  executeSearchNavigatePre: () => void;
  // 搜索结果导航下一个
  executeSearchNavigateNext: () => void;
  // 替换
  executeReplace: (payload: { oldVal: string; newVal: string }) => void;
  // endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

  // region 👉👉👉👉👉 控件设置相关 👈👈👈👈👈
  // 选中控件
  selectedControl: (payload: IControlInfo | null) => void;
  // 修改控件属性
  executeSetControlProperties: <K extends string & keyof IControlInfo>(payload: {
    attr: K;
    value: IControlInfo[K];
    conceptId: string;
  }) => void;
  // 设置控件值
  executeSetControlValue: (payload: { dataElementCode: string; value: string }) => void;
  // endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

  // 插入表格
  executeInsertTable: (payload: { row: number; col: number }) => void;
  // 插入图片
  executeImage: () => void;
  // 插入分页符
  executePageBreak: () => void;
  // 插入分割线
  executeSeparator: (dashArray: number[]) => void;
  // 插入文字
  executeInsertText: (payload: string) => void;
  // 批量插入元素
  executeInsertElementList: (payload: IElement[]) => void;
  // 插入控件
  executeInsertControl: (payload: ControlType) => void;
  // 插入区域
  executeInsertArea: (payload: IInsertAreaOption) => void;
  // 导出图片
  exportImage: () => void;
  // 导出PDF
  exportPDF: () => void;
  // 打印
  executePrint: () => void;
  // 保存数据
  saveData: () => void;
  // 获取控件值
  getAllControlValue: () => void;
}
