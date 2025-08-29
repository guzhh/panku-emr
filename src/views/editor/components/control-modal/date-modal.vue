<template>
  <div :id="containerId" v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
    <a-date-picker
      readonly
      popup-visible
      style="width: 410px"
      :value-format="valueFormat"
      v-model="pickerValue"
      show-time
      @ok="onOk"
      :popup-container="`#${containerId}`"
    >
      <template #extra>
        <div class="picker-footer">
          <a-button size="mini" status="warning" @click="onClose">关闭</a-button>
          <a-button size="mini" status="danger" @click="onCleare">清空数据</a-button>
        </div>
      </template>
    </a-date-picker>
  </div>
</template>

<script setup lang="ts">
import { EditorComponent, EDITOR_COMPONENT } from "@panku/canvas-editor";
import dayjs from "dayjs";
import { smartParseDateTime } from "@/utils";

const containerId = "date-modal-" + Date.now();

const emits = defineEmits<{
  (e: "change", value: string | null): void;
}>();

interface Props {
  format: string;
  value: string | null;
}
const props = withDefaults(defineProps<Props>(), { format: "yyyy-MM-dd hh:mm:ss" });
const valueFormat = computed(() => {
  const format = props.format
    .replace(/yyyy/g, "YYYY")
    .replace(/yy/g, "YY")
    .replace(/MM/g, "MM")
    .replace(/dd/g, "DD")
    .replace(/hh/g, "HH")
    .replace(/mm/g, "mm")
    .replace(/ss/g, "ss");
  return format;
});

const pickerValue = ref(props.value ? smartParseDateTime(props.value as string).format("YYYY-MM-DD HH:mm:ss") : null);

const onOk = (val: string) => {
  emits("change", val);
};

const onClose = () => {
  emits("change", dayjs(props.value).format(valueFormat.value));
};
const onCleare = () => {
  emits("change", null);
};
</script>

<style scoped lang="less">
::v-deep(.arco-timepicker-cell-selected .arco-timepicker-cell-inner) {
  background-color: rgb(var(--primary-2));
}
::v-deep(.arco-picker-footer-extra-wrapper) {
  padding: 6px 8px;
}
.picker-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
