<template>
  <div class="footer-content">
    <div class="footer-descr">
      <span>可见页码：{{ pageNoList.join("、") }}</span>
      <span>页面：{{ pageNo }}/{{ pageSize }}</span>
      <span>字数：{{ wordCount }}</span>
      <span>行：{{ rowNo }}</span>
      <span>列：{{ colNo }}</span>
      <span style="cursor: pointer" title="点击切换模式" @click="executeModeChange">模式：{{ editorModeName }}</span>
    </div>
    <div>
      <a-space>
        <a-button size="small" type="text" @click="setMaxPageScale" title="最佳缩放比例">
          <template #icon>
            <pk-svg-icon name="editor-max-scale" />
          </template>
        </a-button>
        <a-input-number
          :min="50"
          :max="300"
          :step="5"
          size="small"
          mode="button"
          :precision="0"
          v-model="pageScale"
          :parser="pageScaleParser"
          :formatter="pageScaleFormatter"
          @change="pageScaleChange"
          :style="{ width: '130px', textAlign: 'center' }"
        />
        <a-button size="small" type="text" @click="toggleFullscreen" :title="isFullscreen ? '取消全屏' : '全屏'">
          <template #icon>
            <pk-svg-icon name="editor-exit-fullscreen" v-if="isFullscreen" :size="20" />
            <pk-svg-icon name="editor-request-fullscreen" v-else :size="16" />
          </template>
        </a-button>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFullscreenHook } from "@/hooks/use-fullscreen-hook.ts";
import { Register } from "@/views/editor/core/register/Register.ts";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";
import { EDITOR_MODE_LIST } from "@/views/editor/core/const";

defineOptions({ name: "footer-menu" });

// 注册全局发布订阅工具
const register = new Register();

// 全屏
const { toggleFullscreen, isFullscreen } = useFullscreenHook();

// region =============> 编辑器缩放相关  <=================
// 设置最佳缩放比例
const setMaxPageScale = () => register.emit("setMaxPageScale");
// 页面缩放比例
const pageScale = ref(100);
const pageScaleFormatter = (value: number) => `${value}%`;
const pageScaleParser = (value: string) => value.replace("%", "");
const pageScaleChange = (value: number) => register.emit("executePageScale", value / 100);
// 监听页面缩放比例
useListenerHook("pageScaleChange", payload => (pageScale.value = Math.ceil(payload * 100)));
// endregion

// region =============> 页面相关  <=================
const pageNoList = ref([1]); // 可见页码
useListenerHook("visiblePageNoListChange", payload => (pageNoList.value = payload.map(item => Math.ceil(item + 1))));
const pageSize = ref(1); // 页面数
useListenerHook("pageCountChange", payload => (pageSize.value = Math.ceil(payload)));
const pageNo = ref(1); // 当前页面
useListenerHook("intersectionPageNoChange", payload => (pageNo.value = Math.ceil(payload + 1)));
const wordCount = ref(0); // 字数
useListenerHook("wordCountChange", payload => (wordCount.value = payload));
const rowNo = ref(1),
  colNo = ref(1);
useListenerHook("rowAndColNoChange", payload => {
  rowNo.value = payload.row;
  colNo.value = payload.col;
});
const editorModeName = ref(""); // 编辑器模式
const editorMode = ref(""); // 编辑器模式
useListenerHook("editorModeChange", payload => {
  editorModeName.value = EDITOR_MODE_LIST.find(item => item.mode === payload)!.name;
  editorMode.value = payload;
});
// 循环切换模式
const executeModeChange = () => {
  const index = EDITOR_MODE_LIST.findIndex(item => item.mode === editorMode.value);
  if (index === EDITOR_MODE_LIST.length - 1) {
    register.emit("executeMode", EDITOR_MODE_LIST[0].mode);
  } else {
    register.emit("executeMode", EDITOR_MODE_LIST[index + 1].mode);
  }
};
// endregion
</script>

<style scoped lang="less">
.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .footer-descr {
    display: flex;
    gap: 12px;
    font-size: 12px;
    height: 100%;
    align-items: center;
  }

  ::v-deep(.arco-input-wrapper .arco-input.arco-input-size-small) {
    text-align: center;
  }
}
</style>
