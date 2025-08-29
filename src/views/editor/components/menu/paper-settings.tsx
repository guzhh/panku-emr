import { reactive } from "vue";
import { Form, type FormInstance, Modal } from "@arco-design/web-vue";
import { pxToMm, mmToPx } from "@/utils/pixelConversion.ts";
type IPaperSettings = {
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  paper: {
    width: number;
    height: number;
  };
};

export const openPaperSettings = (value: IPaperSettings) => {
  return new Promise<IPaperSettings>(resolve => {
    const form = reactive({
      margin: {
        top: pxToMm(value.margin.top),
        right: pxToMm(value.margin.right),
        bottom: pxToMm(value.margin.bottom),
        left: pxToMm(value.margin.left)
      },
      paper: {
        width: pxToMm(value.paper.width),
        height: pxToMm(value.paper.height)
      }
    });

    const formRef = ref<FormInstance | null>(null);

    Modal.open({
      title: "纸张设置",
      mask: false,
      modalStyle: {
        borderColor: "#c0c6cf",
        boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.2)"
      },
      content: () => (
        <Form ref={formRef} model={form} label-align="right" auto-label-width={true}>
          <span>大小设置</span>
          <a-divider margin={12}></a-divider>
          <a-row gutter={12}>
            <a-col span={12}>
              <a-form-item label="宽度" name="paper.width" rules={[{ required: true, message: "请输入宽度", type: "number" }]}>
                <a-input-number
                  v-model={form.paper.width}
                  min={50}
                  step={1}
                  precision={0}
                  hide-button
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item label="高度" name="paper.height" rules={[{ required: true, message: "请输入高度", type: "number" }]}>
                <a-input-number
                  v-model={form.paper.height}
                  min={50}
                  step={1}
                  precision={0}
                  hide-button
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
          </a-row>
          <span>边距设置</span>
          <a-divider margin={12}></a-divider>
          <a-row gutter={12}>
            <a-col span={12}>
              <a-form-item label="上边距" name="margin.top" rules={[{ required: true, message: "请输入上边距", type: "number" }]}>
                <a-input-number
                  v-model={form.margin.top}
                  min={0}
                  max={form.paper.height / 2}
                  step={1}
                  precision={0}
                  hide-button
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item
                label="下边距"
                name="margin.bottom"
                rules={[{ required: true, message: "请输入下边距", type: "number" }]}
              >
                <a-input-number
                  v-model={form.margin.bottom}
                  min={0}
                  max={form.paper.height / 2}
                  step={1}
                  precision={0}
                  hide-button
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item
                label="左边距"
                name="margin.left"
                rules={[{ required: true, message: "请输入左边距", type: "number" }]}
              >
                <a-input-number
                  v-model={form.margin.left}
                  min={0}
                  max={form.paper.width / 2}
                  step={1}
                  precision={0}
                  hide-button
                  v-slots={{ suffix: () => "mm" }}
                ></a-input-number>
              </a-form-item>
            </a-col>
            <a-col span={12}>
              <a-form-item
                label="右边距"
                name="margin.right"
                rules={[{ required: true, message: "请输入右边距", type: "number" }]}
              >
                <a-input-number
                  v-model={form.margin.right}
                  min={0}
                  max={form.paper.width / 2}
                  step={1}
                  precision={0}
                  hide-button
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
          margin: {
            top: Math.round(mmToPx(form.margin.top)),
            right: Math.round(mmToPx(form.margin.right)),
            bottom: Math.round(mmToPx(form.margin.bottom)),
            left: Math.round(mmToPx(form.margin.left))
          },
          paper: {
            width: Math.round(mmToPx(form.paper.width)),
            height: Math.round(mmToPx(form.paper.height))
          }
        });
      }
    });
  });
};
