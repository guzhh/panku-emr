import { Editor, ControlState, EditorMode, ControlType } from "@panku/canvas-editor";
import { debounce, deepClone } from "@/utils";
import type { IControlInfo } from "@/views/editor/interface/Concept.ts";
import { Register } from "@/views/editor/core/register/Register.ts";
import { Message } from "@arco-design/web-vue";

export function useConceptSettingHook() {
  const register = new Register(); // 注册事件总线

  let instance: Editor | null = null;

  let controlInfo: IControlInfo | null = null;

  const getControlInfo = (conceptId: string) => {
    // 拿到当前激活的控件
    const controlValues = instance!.command.getControlValue({ conceptId })!;
    const data = deepClone(controlValues[0]);
    let valueSets = "";
    // 判断是否是选项类型控件
    if (data.type === ControlType.SELECT || data.type === ControlType.CHECKBOX || data.type === ControlType.RADIO) {
      // 将选项数据转换成以换行符分割的字符串
      valueSets = data
        .valueSets!.map(item => {
          return `${item.code}:${item.value}`;
        })
        .join("\n");
    }
    nextTick(() => {
      controlInfo = { ...deepClone(controlValues[0]), valueSets: valueSets } as IControlInfo; // 保存激活的控件信息
      register.emit("selectedControl", controlInfo);
    });
  };

  const conceptSettingPlugin = (editor: Editor) => {
    instance = editor;

    instance!.eventBus.on(
      "controlChange", // 控件状态改变
      debounce(payload => {
        const { mode } = instance!.command.getOptions();
        if (EditorMode.DESIGN === mode) {
          if (payload.state === ControlState.INACTIVE) {
            controlInfo = null; // 取消控件选中
            register.emit("selectedControl", null);
          } else {
            // 获取选中控件信息
            getControlInfo(payload.control.conceptId!);
          }
        }
      }, 100)
    );

    register.on("executeSetControlProperties", payload => {
      const { conceptId, attr, value } = payload;
      if (attr === "extension") {
        // 设置扩展属性值
        instance!.command.executeSetControlExtension({
          conceptId,
          extension: JSON.parse(JSON.stringify(value))
        });
      } else if (attr === "conceptId") {
        const controlValues = instance!.command.getControlValue({ conceptId: value as string });
        if (controlValues && controlValues.length > 0) {
          Message.error("控件ID已存在");
          return;
        } else {
          instance!.command.executeSetControlProperties({ conceptId, properties: { [attr]: value }, isSubmitHistory: false });
          getControlInfo(value as string); // 控件ID发生修改，重新获取一下控件信息
        }
      } else {
        instance!.command.executeSetControlProperties({ conceptId, properties: { [attr]: value }, isSubmitHistory: false });
      }
    });
  };

  return { conceptSettingPlugin };
}
