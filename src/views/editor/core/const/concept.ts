import { nanoid } from "nanoid";
import { ControlType, type IElement, ElementType } from "@panku/canvas-editor";
import type { IExtension } from "@/views/editor/interface/Concept.ts";

export type ICustomControlElement = IElement & {
  control: {
    // 扩展字段
    extension: IExtension;
  };
};

const getDefaultOption = (): ICustomControlElement => {
  return {
    type: ElementType.CONTROL,
    value: "",
    control: {
      conceptId: `concept_${nanoid().toLowerCase().replace(/-/g, "_")}`, // 控件概念id
      type: ControlType.TEXT,
      value: null,
      extension: {
        dataElementCode: null,
        changeMethods: null
      }
    },
    controlId: `control_${nanoid().toLowerCase().replace(/-/g, "_")}` // 控件id
  };
};

/**
 * 获取默认的文本控件配置
 */
export const getTextOption = () => {
  const option = getDefaultOption();
  option.control.type = ControlType.TEXT;
  option.control!.placeholder = "请输入";
  return option;
};

/**
 * 获取默认的下拉框控件配置
 */
export const getSelectOption = () => {
  const option = getDefaultOption();
  option.control.type = ControlType.SELECT;
  option.control.isMultiSelect = false; // 是否多选
  option.control!.placeholder = "请选择";
  option.control!.isCustomPopup = true; // 是否自定义弹窗
  // option.control!.disabled = true; // 禁用
  option.control!.valueSets = [
    { value: "选项1", code: "1" },
    { value: "选项2", code: "2" }
  ];
  return option;
};

/**
 * 获取默认的日期控件配置
 */
export const getDateOption = () => {
  const option = getDefaultOption();
  option.control.type = ControlType.DATE;
  option.control!.placeholder = "请选择";
  option.control!.isCustomPopup = true; // 是否自定义弹窗
  // option.control!.disabled = true; // 禁用
  option.control!.dateFormat = "yyyy-MM-dd hh:mm:ss";
  return option;
};

/**
 * 获取默认的复选框控件配置
 */
export const getCheckboxOption = () => {
  const option = getDefaultOption();
  option.control.type = ControlType.CHECKBOX;
  option.control!.placeholder = "请选择";
  option.control!.valueSets = [
    { value: "复选框1", code: "1" },
    { value: "复选框2", code: "2" }
  ];
  return option;
};

/**
 * 获取默认的单选控件配置
 */
export const getRadioOption = () => {
  const option = getDefaultOption();
  option.control.type = ControlType.RADIO;
  option.control!.placeholder = "请选择";
  option.control!.valueSets = [
    { value: "单选框1", code: "1" },
    { value: "单选框2", code: "2" }
  ];
  return option;
};

/**+
 * 获取默认的控件配置
 * @param type
 */
export const getControlElement = (type: ControlType): ICustomControlElement | null => {
  if (type === ControlType.CHECKBOX) return getCheckboxOption();
  if (type === ControlType.RADIO) return getRadioOption();
  if (type === ControlType.SELECT) return getSelectOption();
  if (type === ControlType.TEXT) return getTextOption();
  if (type === ControlType.DATE) return getDateOption();
  return null;
};

// 可选的控件
export const CONTROL_OPTION: { type: ControlType; label: string; icon: string }[] = [
  { type: ControlType.TEXT, label: "文本控件", icon: "text" },
  { type: ControlType.SELECT, label: "下拉控件", icon: "select" },
  { type: ControlType.DATE, label: "日期控件", icon: "date" },
  { type: ControlType.CHECKBOX, label: "多选控件", icon: "checkbox" },
  { type: ControlType.RADIO, label: "单选控件", icon: "radio" }
];
