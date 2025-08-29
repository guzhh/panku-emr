import { Editor, EditorZone } from "@panku/canvas-editor";
import { Modal, Message } from "@arco-design/web-vue";
import { Register } from "@/views/editor/core/register/Register.ts";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";

// 右键菜单
export function useContextMenuHook() {
  const register = new Register(); // 注册事件总线

  let instance: Editor | null = null;

  const writeAnnotations = (groupId?: string) => {
    const annotationContent = ref<string>("");
    Modal.open({
      title: "编写批注",
      width: "400px",
      maskClosable: false,
      escToClose: false,
      draggable: true,
      simple: true,
      modalClass: "editor-component",
      content: () => (
        <a-textarea
          placeholder="请输入批注内容"
          v-model={annotationContent.value}
          auto-size={{ minRows: 6, maxRows: 8 }}
        ></a-textarea>
      ),
      onBeforeOk: async () => {
        const value = annotationContent.value.trim();
        // 创建批注
        if (!value) {
          Message.error("请输入批注内容");
          return false;
        }
        if (!groupId) {
          const groupId = instance!.command.executeSetGroup();
          register.emit("addComment", {
            groupId: groupId as string,
            content: value,
            rangeText: instance!.command.getRangeText(),
            createTime: new Date().toLocaleString(),
            createUser: "风清扬"
          });
        }
      }
    });
  };

  // 右键菜单
  const contextMenuPlugin = (editor: Editor) => {
    instance = editor;
    instance.register.contextMenuList([
      {
        key: `edit_comment`,
        name: "编写批注",
        when: payload => {
          // 当非只读且选中区域 && 当前区域是非页头页尾
          return payload.editorHasSelection && payload.zone === EditorZone.MAIN;
        },
        callback: () => writeAnnotations()
      },
      {
        isDivider: true
      }
    ]);
  };

  // 新建批注
  useListenerHook("createComment", () => {
    const { startIndex, endIndex, zone } = instance!.command.getRange();
    // 是否存在焦点
    const editorTextFocus = !!(~startIndex || ~endIndex);
    // 是否存在选区
    const editorHasSelection = editorTextFocus && startIndex !== endIndex;
    if (editorHasSelection && zone === EditorZone.MAIN) {
      writeAnnotations();
    }
  });

  return { contextMenuPlugin };
}
