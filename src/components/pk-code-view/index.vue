<template>
  <CodeMirror
    style="height: 100%"
    v-model="codeValue"
    :tab-size="config.tabSize"
    :basic="config.basic"
    :dark="config.dark"
    :readonly="readonly"
    :extensions="extensions"
  />
</template>

<script lang="ts" setup>
import CodeMirror from "vue-codemirror6";
import { javascript } from "@codemirror/lang-javascript";
import { vue } from "@codemirror/lang-vue";
import { oneDark } from "@codemirror/theme-one-dark";

defineOptions({ name: "pk-code-view" });

interface Props {
  type?: "javascript" | "vue";
  readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "javascript",
  readonly: false
});

const defaultConfig = {
  tabSize: 2,
  basic: true,
  dark: true
};
const config = defaultConfig;

const extensions = computed(() => {
  const arr = [oneDark];
  if (props.type === "javascript") {
    arr.push(javascript({ jsx: true, typescript: true }));
  }
  if (props.type === "vue") {
    arr.push(vue());
  }
  return arr;
});

const codeValue = defineModel<string>({ required: true });
</script>

<style lang="less" scoped>
::v-deep(.cm-editor) {
  height: 100%;
  font-family:
    source-code-pro,
    Menlo,
    Monaco,
    Consolas,
    Courier New,
    monospace;
}
</style>
