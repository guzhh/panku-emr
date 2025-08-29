import { EditorMode, ListStyle, ListType, PaperDirection } from "@panku/canvas-editor";

// 本地保存数据 KEY
export const SAVE_EDITOR_DATA_KEY = `${window.location.origin}_${import.meta.env.BASE_URL}_SAVE_EDITOR_DATA_KEY`;

export const EDITOR_MODE_LIST: Array<{ mode: EditorMode; name: string }> = [
  // 设计模式（不可删除、只读等配置不控制）
  { mode: EditorMode.DESIGN, name: "设计模式" },
  // 编辑模式（文档可编辑、辅助元素均存在）
  { mode: EditorMode.EDIT, name: "编辑模式" },
  // 清洁模式（隐藏辅助元素）
  // { mode: EditorMode.CLEAN, name: "清洁模式" },
  // 只读模式（文档不可编辑）
  { mode: EditorMode.READONLY, name: "只读模式" },
  // 表单模式（仅控件内可编辑）
  { mode: EditorMode.FORM, name: "表单模式" },
  // 打印模式（文档不可编辑、隐藏辅助元素、选区、未书写控件及边框）
  { mode: EditorMode.PRINT, name: "打印模式" }
];

// 字体列表
export const FONT_OPTIONS = [
  { label: "微软雅黑", value: "Microsoft YaHei" },
  { label: "华文黑体", value: "SimHei" },
  { label: "华文宋体", value: "SimSun" },
  { label: "华文仿宋", value: "FangSong" },
  { label: "华文楷体", value: "KaiTi" },
  // { label: "华文琥珀", value: "琥珀" },
  // { label: "华文隶书", value: "隶书" },
  // { label: "华文新魏", value: "华文新魏" },
  // { label: "华文行楷", value: "华文行楷" },
  // { label: "华文中宋", value: "华文中宋" },
  // { label: "华文彩云", value: "华文彩云" },
  { label: "Arial", value: "Arial" },
  { label: "Tahoma", value: "Tahoma" },
  { label: "Times", value: "Times" },
  { label: "serif", value: "serif" }
];

// 字体大小
export const FONT_SIZE_OPTIONS = [
  { label: "初号", value: 56 },
  { label: "小初", value: 48 },
  { label: "一号", value: 34 },
  { label: "小一", value: 32 },
  { label: "二号", value: 29 },
  { label: "小二", value: 24 },
  { label: "三号", value: 21 },
  { label: "小三", value: 20 },
  { label: "四号", value: 18 },
  { label: "小四", value: 16 },
  { label: "五号", value: 14 },
  { label: "小五", value: 12 },
  { label: "六号", value: 10 },
  { label: "小六", value: 8 },
  { label: "七号", value: 7 },
  { label: "八号", value: 6 }
];

// 下划线样式
export const UNDERLINE_OPTIONS = [
  { label: "line-single", value: "solid" },
  { label: "line-double", value: "double" },
  { label: "line-dash-small-gap", value: "dashed" },
  { label: "line-dot", value: "dotted" },
  { label: "line-wavy", value: "wavy" }
];

// 预设颜色
export const PRESET_COLORS = [
  "#FFFFFF",
  "#00B42A",
  "#3C7EFF",
  "#FF7D00",
  "#F76965",
  "#F7BA1E",
  "#F5319D",
  "#D91AD9",
  "#9FDB1D",
  "#FADC19",
  "#722ED1",
  "#000000",
  "#7BE188",
  "#93BEFF",
  "#FFCF8B",
  "#FBB0A7",
  "#FCE996",
  "#FB9DC7",
  "#F08EE6",
  "#DCF190",
  "#FDFA94",
  "#C396ED"
];

// 标题样式
export const TITLE_OPTIONS = [
  { label: "正文", value: "", fontSize: "16px" },
  { label: "标题1", value: "first", fontSize: "26px" },
  { label: "标题2", value: "second", fontSize: "24px" },
  { label: "标题3", value: "third", fontSize: "22px" },
  { label: "标题4", value: "fourth", fontSize: "20px" },
  { label: "标题5", value: "fifth", fontSize: "18px" },
  { label: "标题6", value: "sixth", fontSize: "16px" }
];

// 行间距
export const ROW_MARGIN_OPTIONS = [
  { label: "1", value: 1 },
  { label: "1.25", value: 1.25 },
  { label: "1.5", value: 1.5 },
  { label: "1.75", value: 1.75 },
  { label: "2", value: 2 },
  { label: "2.5", value: 2.5 },
  { label: "3", value: 3 }
];

// 列表样式
export const LIST_TYPE_OPTIONS = [
  { label: "有序列表", value: ListStyle.DECIMAL, icon: "1.", listType: ListType.OL },
  { label: "实心圆点列表", value: ListStyle.DISC, icon: "●", listType: ListType.UL },
  { label: "空心圆点列表", value: ListStyle.CIRCLE, icon: "○", listType: ListType.UL },
  { label: "空心方块列表", value: ListStyle.SQUARE, icon: "□", listType: ListType.UL }
];

// 分隔符
export const SEPARATOR_OPTION = [
  { label: "line-single", value: "0,0" },
  { label: "line-dot", value: "1,1" },
  { label: "line-dash-small-gap", value: "3,1" },
  { label: "line-dash-large-gap", value: "4,4" },
  { label: "line-dash-dot", value: "7,3,3,3" },
  { label: "line-dash-dot-dot", value: "6,2,2,2,2,2" }
];

// 页边距
export const PAPER_MARGIN_OPTION = [
  { label: "普通", desc: "上下:2.54cm 左右:3.18cm", value: [100, 120, 100, 120] },
  { label: "窄", desc: "上下:1.27cm 左右:1.27cm", value: [50, 50, 50, 50] },
  { label: "适中", desc: "上下:2.54cm 左右:1.91cm", value: [100, 70, 100, 70] },
  { label: "宽", desc: "上下:2.54cm 左右:5.08cm", value: [100, 200, 100, 200] }
];

// 纸张方向
export const PAPER_DIRECTION_OPTION = [
  { label: "纵向", value: PaperDirection.VERTICAL },
  { label: "横向", value: PaperDirection.HORIZONTAL }
];

// 纸张大小
export const PAPER_SIZE_OPTION = [
  { label: "A4", desc: "大小：21cm × 29.7cm", value: [794, 1123] },
  { label: "A5", desc: "大小：14.8cm × 21cm", value: [560, 794] },
  { label: "B5", desc: "大小：17.6cm × 25cm", value: [665, 945] },
  { label: "B6", desc: "大小：12.5cm × 17.6cm", value: [472, 665] },
  { label: "信纸", desc: "大小：21.6cm × 27.9cm", value: [816, 1056] },
  { label: "法律用纸", desc: "大小：21.6cm × 35.6cm", value: [816, 1344] },
  { label: "报纸", desc: "大小：27.9cm × 43.2cm", value: [1054, 1633] }
  // { label: "A3", desc: "大小：29.7cm × 42cm", value: [mmToPx(297), mmToPx(420)] },
  // { label: "B4", desc: "大小：25cm × 35.3cm", value: [mmToPx(250), mmToPx(353)] },
  // { label: "5号信封", desc: "大小：11cm × 22cm", value: [mmToPx(110), mmToPx(220)] },
  // { label: "6号信封", desc: "大小：11.4cm × 16.2cm", value: [mmToPx(114), mmToPx(162)] },
  // { label: "7号信封", desc: "大小：11.4cm × 22.9cm", value: [mmToPx(114), mmToPx(229)] },
  // { label: "9号信封", desc: "大小：22.9cm *32.4cm", value: [mmToPx(229), mmToPx(324)] },
];

// 页码格式
export const PAGE_NUMBER_FORMAT_OPTION = [
  { label: "1,2,3 ...", value: "{pageNo}" },
  { label: "- 1 -,- 2 -, - 3 -, ...", value: "- {pageNo} -" },
  { label: "— 1 —,— 2 —, — 3 —, ...", value: "— {pageNo} —" },
  { label: "第 1 页", value: "第 {pageNo} 页" },
  { label: "第 1 页 共 x 页", value: "第 {pageNo} 页 共 {pageCount} 页" },
  { label: "1 / x", value: "{pageNo} / {pageCount}" }
];
