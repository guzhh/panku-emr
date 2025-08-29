<template>
  <div class="flex-wrap">
    <a-button size="mini" type="text" @click="openAbout">
      <template #icon>
        <pk-svg-icon name="editor-about" />
      </template>
      <span class="info-color">关于</span>
    </a-button>
  </div>
</template>

<script setup lang="tsx">
import pkg from "../../../../../package.json";
import { Modal, Descriptions } from "@arco-design/web-vue";
import { EDITOR_VERSION } from "@panku/canvas-editor";

defineOptions({ name: "help-menu" });

const openAbout = () => {
  const aboutData = [
    { label: "系统名称", value: pkg.name },
    { label: "系统版本", value: pkg.version },
    { label: "核心包版本", value: EDITOR_VERSION }
  ];
  Modal.open({
    title: "关于",
    titleAlign: "start",
    width: 300,
    footer: false,
    content: () => <Descriptions data={aboutData} bordered={true} column={1} />
  });
};
</script>

<style scoped lang="less">
.info-color {
  color: @color-text-2;
  padding-top: 3px;
}

::v-deep(.arco-btn-size-mini) {
  padding: 0 8px;
}
</style>
