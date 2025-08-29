<template>
  <div class="flex-wrap">
    <a-button size="mini" type="text" @click="createComment">
      <template #icon>
        <pk-svg-icon name="editor-add-postil" :size="14" />
      </template>
      <span class="info-color">新建批注</span>
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { Register } from "@/views/editor/core/register/Register.ts";

defineOptions({ name: "review-menu" });

const register = new Register(); // 注册事件总线

const createComment = () => {
  register.emit("createComment");
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
