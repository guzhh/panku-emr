import { Modal } from "@arco-design/web-vue";
import PkCodeView from "@/components/pk-code-view/index.vue";

export const editControlValueChange = (value: string) => {
  return new Promise<string>(resolve => {
    const codeJson = ref<string>(decodeURIComponent(value));

    Modal.open({
      title: "编辑值改变回调事件",
      width: "80%",
      maskClosable: false,
      modalStyle: {
        borderColor: "#c0c6cf",
        boxShadow: "0 2px 12px 0 rgba(0, 0, 0, 0.2)"
      },
      content: () => (
        <div style={{ height: "calc(100vh - 200px)", fontSize: "16px" }}>
          <div
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "#282C34",
              padding: "0 20px",
              borderBottom: "1px solid #d0d2d5",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span style={{ color: "#C678DD" }}>{"async function"}</span>
            <span style={{ color: "#61AFEF", marginLeft: "10px" }}>{"change"}</span>
            <span style={{ color: "#ABB2BF" }}>{"(controlMap) {"}</span>
          </div>
          <div style={{ height: "calc(100% - 60px)" }}>
            <PkCodeView
              modelValue={codeJson.value}
              onUpdate:modelValue={val => (codeJson.value = val)}
              type="javascript"
              readonly={false}
            />
          </div>
          <div
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "#282C34",
              padding: "0 20px",
              borderTop: "1px solid #d0d2d5",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span style={{ color: "#ABB2BF" }}>{"}"}</span>
          </div>
        </div>
      ),
      okText: "确定",
      draggable: true,
      titleAlign: "start",
      bodyStyle: {
        padding: "12px 24px"
      },
      onBeforeOk: async () => {
        resolve(encodeURIComponent(codeJson.value));
        // const valid = await formRef.value?.validate();
        // if (valid) return false;
        // resolve({ ...form, bottom: mmToPx(form.bottom || 0), fromPageNo: form.fromPageNo || 0, size: form.size || 12 });
      }
    });
  });
};
