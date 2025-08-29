import { reactive } from "vue";
import { Form, type FormInstance, Modal } from "@arco-design/web-vue";
import { pxToMm, mmToPx } from "@/utils/pixelConversion.ts";
import { type IHeader } from "@panku/canvas-editor/dist/src/editor/interface/Header";
import { type IFooter } from "@panku/canvas-editor/dist/src/editor/interface/Footer";

type IHeaderFooter = {
  header: IHeader;
  footer: IFooter;
};

export const openHeaderFooterSettings = (value: IHeaderFooter) => {
  console.info(value, "🚀 ~ file:paper-header-footer-settings.tsx line:13 value");
  return new Promise<IHeaderFooter>(resolve => {
    const form = reactive<IHeaderFooter>({
      header: { ...value.header, top: pxToMm(value.header.top || 0) },
      footer: { ...value.footer, bottom: pxToMm(value.footer.bottom || 0) }
    });

    const formRef = ref<FormInstance | null>(null);

    Modal.open({
      width: 400,
      title: "页眉页脚设置",
      mask: false,
      modalStyle: {
        borderColor: "#c0c6cf",
        boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.2)"
      },
      content: () => (
        <Form ref={formRef} model={form} label-align="right" auto-label-width={true} size="small">
          <span>页眉设置</span>
          <a-divider margin={12}></a-divider>
          <a-row gutter={12}>
            <a-col span={12}>
              <a-form-item label="显示内容">
                <a-switch
                  type={"round"}
                  v-model={form.header.disabled}
                  v-slots={{ checked: () => "不显示", unchecked: () => "显示" }}
                ></a-switch>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="允许编辑">
                <a-switch
                  type={"round"}
                  v-model={form.header.editable}
                  v-slots={{ checked: () => "允许", unchecked: () => "禁止" }}
                ></a-switch>
              </a-form-item>
            </a-col>
            <a-col span={24}>
              <a-form-item label="页眉上边距">
                <a-input-number
                  v-model={form.header.top}
                  min={50}
                  step={1}
                  precision={0}
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
          </a-row>
          <span>页脚设置</span>
          <a-divider margin={12}></a-divider>
          <a-row gutter={12}>
            <a-col span={12}>
              <a-form-item label="显示内容">
                <a-switch
                  type={"round"}
                  v-model={form.footer.disabled}
                  v-slots={{ checked: () => "不显示", unchecked: () => "显示" }}
                ></a-switch>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="允许编辑">
                <a-switch
                  type={"round"}
                  v-model={form.footer.editable}
                  v-slots={{ checked: () => "允许", unchecked: () => "禁止" }}
                ></a-switch>
              </a-form-item>
            </a-col>
            <a-col span={24}>
              <a-form-item label="页脚下边距">
                <a-input-number
                  min={0}
                  step={1}
                  precision={0}
                  v-model={form.footer.bottom}
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
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
        resolve({
          header: { ...form.header, top: mmToPx(form.header.top || 0) },
          footer: { ...form.footer, bottom: mmToPx(form.footer.bottom || 0) }
        });
      }
    });
  });
};
