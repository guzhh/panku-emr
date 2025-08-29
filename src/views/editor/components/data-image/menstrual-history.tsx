import { DataImageType } from "@panku/canvas-editor";
import { type IDataImageMap } from "@panku/canvas-editor/dist/src/editor/interface/DataImage";
import MenstrualHistoryEditor from "./menstrual-history.vue";
import { ref } from "vue";
import { Modal } from "@arco-design/web-vue";

export const openMenstrualHistorySettings = (value: IDataImageMap[DataImageType.MH]) => {
  return new Promise<IDataImageMap[DataImageType.MH]>(resolve => {
    const menstrualData = ref<IDataImageMap[DataImageType.MH]>(JSON.parse(JSON.stringify(value || {})));
    Modal.open({
      width: "640px",
      title: `月经史编辑器`,
      titleAlign: "start",
      maskClosable: false,
      escToClose: false,
      draggable: true,
      modalClass: "editor-component",
      content: () => (
        <MenstrualHistoryEditor modelValue={menstrualData.value} onUpdate:modelValue={val => (menstrualData.value = val)} />
      ),
      onBeforeOk: async () => {
        resolve(JSON.parse(JSON.stringify(menstrualData.value)));
      }
    });
  });
};
