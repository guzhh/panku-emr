import type { IGetControlValueResult } from "@panku/canvas-editor/dist/src/editor/interface/Control";
import type { IValueSet } from "@panku/canvas-editor/dist/src/editor/interface/Control";

export type IExtension = {
  // businessCode: null | string; // 业务编码
  dataElementCode: null | string; // 数据元素编码
  changeMethods: null | string; // 数据变更回调函数
};

export type IControlInfo = Omit<IGetControlValueResult extends Array<infer U> ? U : never, "valueSets" | "extension"> & {
  valueSets?: string | IValueSet[];
  extension: IExtension;
};
