import {
  type IElement,
  Editor,
  ElementType,
  getClipboardData,
  setClipboardData,
  getIsClipboardContainFile
} from "@panku/canvas-editor";
import { nanoid } from "nanoid";

export function useCopyPasteHook() {
  let instance: Editor | null = null;

  const pastePlugin = (editor: Editor) => {
    instance = editor;

    // 重写粘贴事件
    instance.override.paste = (evt?: ClipboardEvent) => {
      if (evt) {
        const clipboardData = evt.clipboardData;
        if (!clipboardData) return;
        // 优先读取编辑器内部粘贴板数据（粘贴板不包含文件时）
        if (!getIsClipboardContainFile(clipboardData)) {
          const editorClipboardData = getClipboardData();
          const formatElementList = (eleList: IElement[]) => {
            eleList.forEach(ele => {
              if (ele.type === ElementType.TABLE) {
                const trList = ele.trList!;
                for (let r = 0; r < trList.length; r++) {
                  const tr = trList[r];
                  for (let d = 0; d < tr.tdList.length; d++) {
                    const td = tr.tdList[d];
                    formatElementList(td.value);
                  }
                }
              } else if (ele.type === ElementType.CONTROL) {
                ele.control!.conceptId = `concept_${nanoid().toLowerCase().replace(/-/g, "_")}`; // 控件概念id;
              } else if (ele.type === ElementType.DATA_IMAGE) {
                ele.conceptId = `data_image_${nanoid().toLowerCase().replace(/-/g, "_")}`;
              }
            });
          };
          if (editorClipboardData) {
            formatElementList(editorClipboardData.elementList);
            setClipboardData(editorClipboardData);
          }
        }
      }
      return { preventDefault: false };
    };
  };

  return { pastePlugin };
}
