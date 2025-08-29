import { reactive } from "vue";
import { RowFlex } from "@panku/canvas-editor";
import { Form, type FormInstance, Modal } from "@arco-design/web-vue";
import { pxToMm, mmToPx } from "@/utils/pixelConversion.ts";
import { type IPageNumber } from "@panku/canvas-editor/dist/src/editor/interface/PageNumber";
import { FONT_OPTIONS, PAGE_NUMBER_FORMAT_OPTION } from "@/views/editor/core/const";

export const openPagenoSettings = (value: IPageNumber) => {
  return new Promise<IPageNumber>(resolve => {
    const form = reactive<IPageNumber>({ ...value, bottom: pxToMm(value.bottom as number) });

    const formRef = ref<FormInstance | null>(null);

    Modal.open({
      title: "页码设置",
      mask: false,
      modalStyle: {
        borderColor: "#c0c6cf",
        boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.2)"
      },
      content: () => (
        <Form ref={formRef} model={form} label-align="right" auto-label-width={true} size={"small"}>
          <a-row gutter={8}>
            <a-col span={12}>
              <a-form-item label="是否显示" name="disabled">
                <a-switch
                  type={"round"}
                  v-model={form.disabled}
                  v-slots={{ checked: () => "不显示", unchecked: () => "显示" }}
                ></a-switch>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="距离底部" name="bottom">
                <a-input-number
                  v-model={form.bottom}
                  min={0}
                  step={1}
                  precision={2}
                  hide-button
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="字体颜色" name="color">
                <a-color-picker size="small" v-model={form.color} showText disabledAlpha />
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="字体大小" name="size">
                <a-input-number
                  v-model={form.size}
                  step={1}
                  precision={0}
                  min={8}
                  v-slots={{ suffix: () => "px" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="页码字体" name="font">
                <a-select v-model={form.font} size="small" options={FONT_OPTIONS}></a-select>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="页码格式" name="font">
                <a-select v-model={form.format} size="small" options={PAGE_NUMBER_FORMAT_OPTION}></a-select>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="起始页码" name="startPageNo">
                <a-input-number v-model={form.startPageNo} step={1} precision={0}></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="出现页" name="fromPageNo">
                <a-input-number v-model={form.fromPageNo} step={1} precision={0} min={0} mode="button"></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="对齐方式" name="font">
                <a-select
                  v-model={form.rowFlex}
                  size="small"
                  options={[
                    { label: "左对齐", value: RowFlex.LEFT },
                    { label: "居中对齐", value: RowFlex.CENTER },
                    { label: "右对齐", value: RowFlex.RIGHT }
                  ]}
                ></a-select>
              </a-form-item>
            </a-col>
          </a-row>
        </Form>
      ),
      okText: "确定",
      draggable: true,
      titleAlign: "start",
      bodyStyle: {
        padding: "12px 24px"
      },
      onBeforeOk: async () => {
        const valid = await formRef.value?.validate();
        if (valid) return false;
        resolve({ ...form, bottom: mmToPx(form.bottom || 0), fromPageNo: form.fromPageNo || 0, size: form.size || 12 });
      }
    });
  });
};
