<template>
  <div class="flex-wrap">
    <a-button size="mini" type="text" @click="saveData">
      <template #icon>
        <pk-svg-icon name="editor-save" :size="12" />
      </template>
      <span class="info-color">保存</span>
    </a-button>
    <a-button size="mini" type="text" @click="exportImage">
      <template #icon>
        <pk-svg-icon name="editor-export-image" :size="15" />
      </template>
      <span class="info-color">导出图片</span>
    </a-button>
    <a-button size="mini" type="text" @click="exportPDF">
      <template #icon>
        <pk-svg-icon name="editor-export-pdf" :size="15" />
      </template>
      <span class="info-color">导出PDF</span>
    </a-button>
    <a-button size="mini" type="text" @click="executePrint">
      <template #icon>
        <pk-svg-icon name="editor-print" :size="15" />
      </template>
      <span class="info-color">打印</span>
    </a-button>
    <a-button size="mini" type="text" @click="getAllControlValue">
      <template #icon>
        <pk-svg-icon name="editor-print" :size="15" />
      </template>
      <span class="info-color">提取控件值</span>
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { Register } from "@/views/editor/core/register/Register.ts";

defineOptions({ name: "file-menu" });

const register = new Register(); // 注册事件总线

// 导出图片
const exportImage = () => register.emit("exportImage");
// 导出PDF
const exportPDF = () => register.emit("exportPDF");
// 打印
const executePrint = () => register.emit("executePrint");
// 保存数据
const saveData = () => register.emit("saveData");
// 获取控件值
const getAllControlValue = () => register.emit("getAllControlValue");
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
