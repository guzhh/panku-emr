import type { IControlInfo } from "@/views/editor/interface/Concept.ts";
import { Register } from "@/views/editor/core/register/Register.ts";
import { Message } from "@arco-design/web-vue";
import { editControlValueChange } from "@/views/editor/components/control-setting/edit-control-value-change.tsx";

export function useSettingConceptAttrHook(modelValue: Ref<IControlInfo>) {
  const register = new Register(); // 注册事件总线

  const conceptId = ref<string>(modelValue.value.conceptId as string); // 保存控件id

  const attrChange = <K extends string & keyof IControlInfo>(attr: K, value?: IControlInfo[K]) => {
    nextTick(() => {
      if (attr === "conceptId") {
        modelValue.value["conceptId"] = ((value || modelValue.value["conceptId"]) as string).replace(/\s/g, "");
        if (!modelValue.value["conceptId"]) {
          Message.error("请输入正确的唯一标识");
          return;
        }
      }
      register.emit("executeSetControlProperties", {
        attr,
        value: value || modelValue.value[attr],
        conceptId: conceptId.value
      });
    });
  };

  const valueSetsChange = (value: string) => {
    const data = value
      .split("\n")
      .map(item => {
        const [code, val] = item.split(":");
        return { code, value: val };
      })
      .filter(item => {
        return item.code && item.value;
      });
    nextTick(() => {
      attrChange("valueSets", data);
    });
  };

  // 设置 控件值改变 回调执行函数
  const editValueChange = () => {
    editControlValueChange(modelValue.value.extension.changeMethods || "").then(value => {
      modelValue.value.extension.changeMethods = value || null;
      nextTick(() => attrChange("extension"));
    });
  };

  return { attrChange, valueSetsChange, editValueChange };
}
