import { dataObserve, debounce } from "@/utils";
import { Editor, EditorMode, ControlType, LocationPosition } from "@panku/canvas-editor";
import type { IControlContentChangeResult } from "@panku/canvas-editor/dist/src/editor/interface/Control";
import type { IControlInfo } from "@/views/editor/interface/Concept.ts";
import type { IControl } from "@panku/canvas-editor/dist/src/editor/interface/Control";

// 控件联动插件
export function useConceptLinkageHook() {
  let instance: Editor | null = null;

  const executionMethod = async (payload: IControlContentChangeResult) => {
    const editorOptions = instance!.command.getOptions(); // 获取编辑器配置项
    // 如果是设计模式,不走联动事件
    if (editorOptions.mode === EditorMode.DESIGN) {
      return;
    }
    const { control, controlId } = payload;
    // 获取数据变更回调函数
    const changeMethods = (control as IControlInfo).extension!.changeMethods as string;
    if (changeMethods) {
      // 对配置的回调事件进行解码
      const jsCode = decodeURIComponent(changeMethods);
      const controlList = instance!.command.getControlList(); // 获取当前最新的所有控件
      const controlObj = {} as Record<string, IControlInfo>;
      for (const item of controlList) {
        const name = item.control!.conceptId || "test";
        // 由于控件的显示文本可能被分段设置为不同的格式，所以需要进行提取，去除格式
        controlObj[name] = {
          ...item.control,
          value: (() => {
            const { type, value, code } = item.control!;
            if (type === ControlType.TEXT || type === ControlType.DATE || type === ControlType.NUMBER) {
              return value!.reduce((str, v) => str + v.value, "");
            } else if (type === ControlType.SELECT || type === ControlType.CHECKBOX || type === ControlType.RADIO) {
              return code;
            }
            return "";
          })()
        } as IControlInfo;
      }
      // 保存数据修改记录，实际存储了修改了哪些控件及控件的那些属性
      const changeMap: Map<string, Set<keyof IControlInfo>> = new Map();
      // 对控件数据的修改进行监听
      const allElementsProps = dataObserve(controlObj, "", path => {
        const keyNameAll = path.split(".");
        if (!changeMap.get(keyNameAll[0])) {
          changeMap.set(keyNameAll[0], new Set());
        }
        changeMap.get(keyNameAll[0])?.add(keyNameAll[1] as keyof IControlInfo);
      });
      // 执行联动函数
      try {
        const AsyncFunc = new Function(
          "controlMap",
          `return (async (controlMap) => {
              ${jsCode}
              })(controlMap);
          `
        );
        await AsyncFunc(allElementsProps);
      } catch (e) {
        console.error("联动函数执行错误", e);
        return;
      }
      try {
        const controlProperties: Map<string, Partial<Omit<IControl, "value">>> = new Map(); // 控件属性集合
        const controlValues: Map<string, string | null> = new Map(); // 控件值集合
        changeMap.forEach((controlSet: Set<keyof IControlInfo>, conceptId) => {
          controlSet.forEach(key => {
            if (key !== "value") {
              if (!controlProperties.has(conceptId)) {
                controlProperties.set(conceptId, {});
              }
              const props = controlProperties.get(conceptId)!;
              (props as Record<keyof IControlInfo, any>)[key] = controlObj[conceptId][key];
            } else {
              // 获取控件值
              if (controlObj[conceptId].value) {
                controlValues.set(conceptId, controlObj[conceptId].value);
              } else {
                controlValues.set(conceptId, null);
              }
            }
          });
        });

        // 批量设置控件属性
        if (controlProperties.size > 0) {
          instance!.command.executeSetControlPropertiesList(
            Array.from(controlProperties.keys()).map(key => {
              return {
                properties: controlProperties.get(key) || {}, // 防止 undefined
                conceptId: key,
                isSubmitHistory: false
              };
            })
          );
        }
        if (controlValues.size > 0) {
          // 批量设置控件值
          instance!.command.executeSetControlValueList(
            Array.from(controlValues.keys()).map(key => {
              return {
                value: controlValues.get(key) as string,
                conceptId: key,
                isSubmitHistory: false
              };
            })
          );
        }
        if (controlProperties.size > 0 || controlValues.size > 0) {
          instance!.command.executeLocationControl(controlId, { position: LocationPosition.AFTER });
        }
      } catch (e) {
        console.error("设置联动数据发生错误", e);
      }
    }
  };

  // 控件联动插件
  const conceptLinkagePlugin = (editor: Editor) => {
    instance = editor;

    instance.eventBus.on(
      "controlContentChange",
      debounce(async payload => {
        executionMethod(payload);
      }, 500)
    );
  };

  return {
    conceptLinkagePlugin
  };
}
