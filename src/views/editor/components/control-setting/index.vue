<template>
  <div style="height: 100%; background: #ffffff" class="control-setting">
    <a-tabs size="small" justify>
      <a-tab-pane key="1" title="属性面板">
        <control-setting v-if="controlInfo?.type" v-model="controlInfo" />
      </a-tab-pane>
      <a-tab-pane key="2" title="标准元素">
        <div style="height: 100%; overflow: auto; position: relative">
          <standard-element />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import StandardElement from "./standard-element.vue";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";
import type { IControlInfo } from "@/views/editor/interface/Concept.ts";
import ControlSetting from "./control-setting.vue";

defineOptions({ name: "ConceptSettingViewer" });

const controlInfo = ref<IControlInfo | null>(null);

// 监听选中的控件
useListenerHook("selectedControl", payload => {
  controlInfo.value = null;
  nextTick(() => {
    controlInfo.value = payload;
  });
});
</script>

<style scoped lang="less">
.control-setting {
  ::v-deep(.setting-title) {
    border-bottom: 1px solid #e1e1e1;
    padding: 6px 0;
    margin-bottom: 8px;
  }

  ::v-deep(.arco-form-item) {
    margin-bottom: 12px;
  }
  ::v-deep(.arco-form-item-label) {
    display: inline-block;
    width: 100%;
    text-align-last: justify;
    text-align: justify;
    text-justify: distribute-all-lines; // 这行必加，兼容ie浏览器
  }
  ::v-deep(.arco-form-item-label-col) {
    padding-right: 8px;
  }

  ::v-deep(.arco-tabs-nav-tab) {
    justify-content: center;
  }
  ::v-deep(.arco-tabs-content) {
    padding: 8px;
    background-color: #fff;
  }
}
</style>
