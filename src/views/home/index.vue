<template>
  <a-space direction="vertical">
    <a-space>
      <a-button type="primary">Primary</a-button>
      <a-button>Default</a-button>
      <a-button type="dashed">Dashed</a-button>
      <a-button type="outline">Outline</a-button>
      <a-button type="text">Text</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" status="success">Primary</a-button>
      <a-button status="success">Default</a-button>
      <a-button type="dashed" status="success">Dashed</a-button>
      <a-button type="outline" status="success">Outline</a-button>
      <a-button type="text" status="success">Text</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" status="warning">Primary</a-button>
      <a-button status="warning">Default</a-button>
      <a-button type="dashed" status="warning">Dashed</a-button>
      <a-button type="outline" status="warning">Outline</a-button>
      <a-button type="text" status="warning">Text</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" status="danger">Primary</a-button>
      <a-button status="danger">Default</a-button>
      <a-button type="dashed" status="danger">Dashed</a-button>
      <a-button type="outline" status="danger">Outline</a-button>
      <a-button type="text" status="danger">Text</a-button>
    </a-space>
    <a-space>
      <a-button @click="switchModes">切换明暗</a-button>
      <a-button type="primary" @click="randomColor('primary')">随机主题色</a-button>
      <a-button type="primary" @click="randomColor('success')" status="success">随机成功色</a-button>
      <a-button type="primary" @click="randomColor('warning')" status="warning">随机警告色</a-button>
      <a-button type="primary" @click="randomColor('error')" status="danger">随机错误色</a-button>
    </a-space>
    <a-space>
      <a-button type="primary" @click="goToEmr">前往电子病历编辑器</a-button>
    </a-space>
  </a-space>
</template>

<script setup lang="ts">
import { type ThemeConfig, useThemeStore } from "@/store/modules/theme.ts";

defineOptions({
  name: "HomeViewer"
});
const themeState = useThemeStore();
const switchModes = () => {
  themeState.darkMode = !themeState.darkMode;
};

function randomRgbColor() {
  // 随机生成RGB颜色
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

const randomColor = (type: keyof ThemeConfig) => {
  themeState.themeConfig[type] = randomRgbColor();
};

const router = useRouter();
const goToEmr = () => {
  router.push("/editor");
};
</script>

<style scoped lang="less"></style>
