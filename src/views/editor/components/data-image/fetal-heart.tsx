import { Modal } from "@arco-design/web-vue";
import { DataImageType } from "@panku/canvas-editor";
import { type IDataImageMap } from "@panku/canvas-editor/dist/src/editor/interface/DataImage";

export const openFetalHeartSettings = (value: IDataImageMap[DataImageType.HR]) => {
  return new Promise<IDataImageMap[DataImageType.HR]>(resolve => {
    const codeJson = ref<IDataImageMap[DataImageType.HR]>(value);
    Modal.open({
      width: "300px",
      title: `胎心位置`,
      titleAlign: "start",
      maskClosable: false,
      escToClose: false,
      draggable: true,
      modalClass: "editor-component",
      content: () => (
        <a-row gutter={[24, 12]}>
          <a-col span={12}>
            <a-checkbox value={true} v-model={codeJson.value[1]}>
              肚脐左上方
            </a-checkbox>
          </a-col>
          <a-col span={12}>
            <a-checkbox value={true} v-model={codeJson.value[2]}>
              肚脐右上方
            </a-checkbox>
          </a-col>
          <a-col span={12}>
            <a-checkbox value={true} v-model={codeJson.value[3]}>
              腹壁左方
            </a-checkbox>
          </a-col>
          <a-col span={12}>
            <a-checkbox value={true} v-model={codeJson.value[4]}>
              腹壁右方
            </a-checkbox>
          </a-col>
          <a-col span={12}>
            <a-checkbox value={true} v-model={codeJson.value[5]}>
              肚脐左下方
            </a-checkbox>
          </a-col>
          <a-col span={12}>
            <a-checkbox value={true} v-model={codeJson.value[6]}>
              肚脐右下方
            </a-checkbox>
          </a-col>
        </a-row>
      ),
      onBeforeOk: async () => {
        resolve(JSON.parse(JSON.stringify(codeJson.value)));
      }
    });
  });
};
