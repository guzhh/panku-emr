import { Editor, DataImageType } from "@panku/canvas-editor";
import { Input, Modal } from "@arco-design/web-vue";
import { openFetalHeartSettings } from "@/views/editor/components/data-image/fetal-heart.tsx";
import type { IDataImageMap } from "@panku/canvas-editor/dist/src/editor/interface/DataImage";
import { openToothPositionSettings } from "@/views/editor/components/data-image/tooth-position.tsx";
import { openMenstrualHistorySettings } from "@/views/editor/components/data-image/menstrual-history.tsx";

export function useDataImageHook() {
  let instance: Editor | null = null;

  const dataImagePlugin = (editor: Editor) => {
    instance = editor;
    instance.eventBus.on("dataImageDblclick", payload => {
      const { element } = payload;
      if (element.imageData!.type === DataImageType.QR_CODE || element.imageData!.type === DataImageType.BAR_CODE) {
        const title = element.imageData!.type === DataImageType.QR_CODE ? "二维码值" : "条形码值";
        let codeValue = (element.imageData!.data as { value: string }).value;
        Modal.open({
          width: "300px",
          title: `设置${title}`,
          maskClosable: false,
          escToClose: false,
          draggable: true,
          simple: true,
          modalClass: "editor-component",
          content: () =>
            h({
              setup() {
                const value = ref(codeValue);
                watch(
                  () => value.value,
                  newVal => (codeValue = newVal)
                );
                return () =>
                  h(Input, {
                    style: { width: "100%" },
                    placeholder: `请输入${title}`,
                    modelValue: value.value,
                    onInput: (val: string) => (value.value = val)
                  });
              }
            }),
          onOk: () => {
            instance!.command.executeUpdateElementById({
              conceptId: element.conceptId,
              properties: {
                imageData: { type: element.imageData!.type, data: { value: codeValue || "-" } }
              }
            });
          }
        });
      } else if (element.imageData!.type === DataImageType.MH) {
        // 月经史
        openMenstrualHistorySettings(element.imageData!.data as IDataImageMap[DataImageType.MH]).then(value => {
          instance!.command.executeUpdateElementById({
            conceptId: element.conceptId,
            properties: {
              imageData: { type: element.imageData!.type, data: value }
            }
          });
        });
      } else if (element.imageData!.type === DataImageType.HR) {
        // 胎位图
        openFetalHeartSettings(element.imageData!.data as IDataImageMap[DataImageType.HR]).then(value => {
          instance!.command.executeUpdateElementById({
            conceptId: element.conceptId,
            properties: {
              imageData: { type: element.imageData!.type, data: value }
            }
          });
        });
      } else if (element.imageData!.type === DataImageType.FDI) {
        // 牙位图
        openToothPositionSettings(element.imageData!.data as IDataImageMap[DataImageType.FDI]).then(value => {
          instance!.command.executeUpdateElementById({
            conceptId: element.conceptId,
            properties: {
              imageData: { type: element.imageData!.type, data: value }
            }
          });
        });
      }
    });
  };
  return { dataImagePlugin };
}
