import { ControlType, Editor, EditorMode, type IElement } from "@panku/canvas-editor";
import { debounce } from "@/utils";

interface IValueSet {
  value: string;
  code: string;
}

export function useEditorModalHook() {
  let instance: Editor | null = null;

  const showModal = ref(false); // 弹窗显示
  // 弹窗类型
  const modalType = ref<ControlType.SELECT | ControlType.DATE | null>(null);
  // 弹窗位置
  const position = ref({ x: 0, y: 0 });

  // region 👉👉👉👉👉 下拉选择组件 👈👈👈👈👈
  const selectControlInfo = reactive({
    isMultiSelect: false, // 是否多选
    conceptId: "",
    value: [] as string[],
    options: [] as IValueSet[]
  });
  // 点击了下拉框控件
  const handleSelectClick = (element: IElement) => {
    const selectValue = instance!.command.getControlValue({ conceptId: element.control!.conceptId });
    selectControlInfo.conceptId = element.control!.conceptId!;
    selectControlInfo.isMultiSelect = element.control!.isMultiSelect || false; // 是否多选
    if (selectValue) {
      selectControlInfo.value = selectValue[0].value?.split(",") || []; // 获取选中的值
    }
    selectControlInfo.options = element.control!.valueSets!; // 获取下拉框的选项
    modalType.value = ControlType.SELECT;
    showModal.value = true;
  };
  const selectChange = (payload: { value: string[]; options: IValueSet[] } | null) => {
    showModal.value = false;
    if (payload) {
      instance!.command.executeSetControlProperties({
        isSubmitHistory: false,
        conceptId: selectControlInfo.conceptId,
        properties: { valueSets: payload.options } // 设置选项
      });
      instance!.command.executeSetControlValueList([
        { conceptId: selectControlInfo.conceptId, value: payload.value.toString() || null }
      ]);
    }
  };
  // endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

  // region 👉👉👉👉👉 日期控件 👈👈👈👈👈
  const dateControlInfo = reactive({
    dateFormat: "",
    conceptId: "",
    value: null as string | null
  });
  const handleDateClick = (element: IElement) => {
    const dateValue = instance!.command.getControlValue({ conceptId: element.control!.conceptId });
    dateControlInfo.conceptId = element.control!.conceptId!;
    dateControlInfo.dateFormat = element.control!.dateFormat!;
    dateControlInfo.value = dateValue![0].value;
    modalType.value = ControlType.DATE;
    showModal.value = true;
  };
  // 日期选择器回调
  const dateChange = (value: string | null) => {
    showModal.value = false;
    instance!.command.executeSetControlValueList([{ conceptId: dateControlInfo.conceptId, value: value }]);
  };
  // endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

  const modalPlugin = (editor: Editor) => {
    instance = editor;
    // 编辑器控件发生变化
    instance!.eventBus.on(
      "click",
      debounce(async evt => {
        // 点击空白处关闭弹窗
        if ((evt.target as HTMLElement)?.tagName === "CANVAS") {
          showModal.value = false;
        }
        const { mode } = instance!.command.getOptions();
        if (mode !== EditorMode.READONLY && mode !== EditorMode.PRINT) {
          // 获取位置上下文信息通过鼠标事件
          const positionContext = instance!.command.getPositionContextByEvent(evt);
          if (positionContext) {
            const { element, rangeRect } = positionContext;
            // 判断是否是控件
            if (element?.controlId && element?.control) {
              if (element.control.disabled) return; // 如果是禁用的控件则直接返回
              position.value.x = rangeRect!.x; // x坐标
              position.value.y = rangeRect!.y + rangeRect!.height; // ( + rangeRect!.height) * scale; // y坐标
              // 判断是否是下拉框
              nextTick(() => {
                if (element.control?.type === ControlType.SELECT) {
                  handleSelectClick(element); // 点击下拉框控件
                } else if (element.control?.type === ControlType.DATE) {
                  handleDateClick(element); // 点击日期控件
                }
              });
            }
          }
        }
      }, 100)
    );
  };

  return {
    position,
    showModal,
    modalType,
    modalPlugin,
    selectControlInfo,
    selectChange,
    dateControlInfo,
    dateChange
  };
}
