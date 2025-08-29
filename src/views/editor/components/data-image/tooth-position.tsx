import { Modal } from "@arco-design/web-vue";
import { DataImageType } from "@panku/canvas-editor";
import { type IDataImageMap } from "@panku/canvas-editor/dist/src/editor/interface/DataImage";
import ToothPositionEditor from "./ToothPositionEditor.vue";

export const openToothPositionSettings = (value: IDataImageMap[DataImageType.FDI]) => {
  return new Promise<IDataImageMap[DataImageType.FDI]>(resolve => {
    const codeJson = ref<IDataImageMap[DataImageType.FDI]>(JSON.parse(JSON.stringify(value)));
    Modal.open({
      width: "760px",
      title: `牙位图编辑器`,
      titleAlign: "start",
      maskClosable: false,
      escToClose: false,
      draggable: true,
      modalClass: "editor-component",
      content: () => <ToothPositionEditor modelValue={codeJson.value} onUpdate:modelValue={val => (codeJson.value = val)} />,
      onBeforeOk: async () => {
        resolve(JSON.parse(JSON.stringify(codeJson.value)));
      }
    });
  });
};
