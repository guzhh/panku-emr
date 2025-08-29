<template>
  <div class="flex-wrap">
    <a-button size="mini" type="text" @click="toggleFullscreen" status="normal">
      <template #icon>
        <pk-svg-icon name="editor-exit-fullscreen" v-if="isFullscreen" :size="16" />
        <pk-svg-icon name="editor-request-fullscreen" v-else :size="13" />
      </template>
      <span class="info-color">{{ isFullscreen ? "退出全屏" : "全屏" }}</span>
    </a-button>
    <a-popover trigger="click" :content-style="{ padding: '4px' }">
      <a-button size="mini" type="text">
        <template #icon>
          <pk-svg-icon name="editor-paper-margin" :size="16" />
        </template>
        <span class="info-color" style="padding-top: 2px"> 页边距 <icon-down :size="10" /></span>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
          <div
            v-for="item in PAPER_MARGIN_OPTION"
            :key="item.label"
            class="pager-margin-content"
            @click="setEditorMargin(item.value as IMargin)"
          >
            <div :style="{ color: paperMargin?.join() === item.value.join() ? 'rgb(var(--primary-6))' : undefined }">
              {{ item.label }}
            </div>
            <div>{{ item.desc }}</div>
          </div>
          <div class="paper-setting" @click="paperSetting">
            <pk-svg-icon name="editor-option" :size="14" />
            <span style="margin-left: 5px">自定义纸张</span>
          </div>
        </div>
      </template>
    </a-popover>
    <a-dropdown :popup-max-height="false" @select="executePaperDirection">
      <a-button size="mini" type="text">
        <template #icon>
          <pk-svg-icon name="editor-paper-direction" :size="16" />
        </template>
        <span class="info-color" style="padding-top: 2px"> 纸张方向 <icon-down :size="10" /></span>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
          <a-doption v-for="item in PAPER_DIRECTION_OPTION" :key="item.value" :value="item.value">
            <span :style="{ color: paperDirection === item.value ? 'rgb(var(--primary-6))' : undefined }">{{ item.label }}</span>
          </a-doption>
        </div>
      </template>
    </a-dropdown>
    <a-popover trigger="click" :content-style="{ padding: '4px' }">
      <a-button size="mini" type="text">
        <template #icon>
          <pk-svg-icon name="editor-paper-size" :size="16" />
        </template>
        <span class="info-color" style="padding-top: 2px"> 纸张大小 <icon-down :size="10" /></span>
      </a-button>
      <template #content>
        <div v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU" style="max-height: 500px; overflow: auto">
          <div
            v-for="item in PAPER_SIZE_OPTION"
            :key="item.label"
            class="pager-margin-content"
            @click="executePaperSize(item.value)"
          >
            <div :style="{ color: paperSize?.join() === item.value.join() ? 'rgb(var(--primary-6))' : undefined }">
              {{ item.label }}
            </div>
            <div>{{ item.desc }}</div>
          </div>
          <div class="paper-setting" @click="paperSetting">
            <pk-svg-icon name="editor-option" :size="14" />
            <span style="margin-left: 5px">自定义纸张</span>
          </div>
        </div>
      </template>
    </a-popover>
    <a-button size="mini" type="text" @click="setPageHeaderAndFooter">
      <template #icon>
        <pk-svg-icon name="editor-header-footer" :size="14" />
      </template>
      <span class="info-color" style="padding-top: 2px">页眉页脚</span>
    </a-button>
    <a-button size="mini" type="text" @click="setPageNumber">
      <template #icon>
        <pk-svg-icon name="editor-page-no" :size="14" />
      </template>
      <span class="info-color" style="padding-top: 2px"> 页码</span>
    </a-button>
  </div>
</template>

<script setup lang="ts">
import { EditorComponent, EDITOR_COMPONENT, PaperDirection } from "@panku/canvas-editor";
import { useFullscreenHook } from "@/hooks/use-fullscreen-hook.ts";
import { IconDown } from "@arco-design/web-vue/es/icon";
import { PAPER_DIRECTION_OPTION, PAPER_MARGIN_OPTION, PAPER_SIZE_OPTION } from "@/views/editor/core/const";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";
import type { IMargin } from "@panku/canvas-editor/dist/src/editor/interface/Margin";
import { Register } from "@/views/editor/core/register/Register.ts";
import { openPaperSettings } from "@/views/editor/components/menu/paper-settings.tsx";
import { openPagenoSettings } from "@/views/editor/components/menu/pageno-settings.tsx";
import { type IPageNumber } from "@panku/canvas-editor/dist/src/editor/interface/PageNumber";
import { type IHeader } from "@panku/canvas-editor/dist/src/editor/interface/Header";
import { type IFooter } from "@panku/canvas-editor/dist/src/editor/interface/Footer";
import { openHeaderFooterSettings } from "@/views/editor/components/menu/paper-header-footer-settings.tsx";

defineOptions({ name: "page-menu" });

const register = new Register(); // 注册事件总线

const { toggleFullscreen, isFullscreen } = useFullscreenHook();

// region 👉👉👉👉👉 页边距、页面大小 👈👈👈👈👈
// 页边距
const paperMargin = ref<IMargin>();
useListenerHook("editorMarginChange", margins => (paperMargin.value = margins));
const setEditorMargin = (margins: IMargin) => register.emit("setEditorMargin", margins);
const paperDirection = ref<PaperDirection>(PaperDirection.VERTICAL); // 纸张方向
useListenerHook("editorPaperDirectionChange", direction => (paperDirection.value = direction));
const executePaperDirection = (value: PaperDirection) => register.emit("executePaperDirection", value);
// 页面大小
const paperSize = ref<number[]>(PAPER_SIZE_OPTION[0].value);
useListenerHook("editorPaperChange", size => (paperSize.value = [size.width, size.height]));
const executePaperSize = (size: number[]) => {
  register.emit("executePaperSize", { width: size[0], height: size[1] });
};
// const headerTop = ref(0); // 页眉上边距
// 自定义纸张
const paperSetting = () => {
  openPaperSettings({
    margin: {
      top: paperMargin.value![0],
      right: paperMargin.value![1],
      bottom: paperMargin.value![2],
      left: paperMargin.value![3]
    },
    paper: { width: paperSize.value[0], height: paperSize.value[1] }
  }).then(paperInfo => {
    const { margin, paper } = paperInfo;
    register.emit("setEditorMargin", [margin.top, margin.right, margin.bottom, margin.left]);
    register.emit("executePaperSize", paper);
  });
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 页码相关配置 👈👈👈👈👈
const pageNoInfo = ref<IPageNumber>({});
useListenerHook("editorPageNumberChange", payload => {
  pageNoInfo.value = payload;
});
const setPageNumber = () => {
  openPagenoSettings({ ...pageNoInfo.value }).then(pageNumber => {
    register.emit("setEditorPageNumber", pageNumber);
  });
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

// region 👉👉👉👉👉 页眉页脚 👈👈👈👈👈
const pageHeaderInfo = ref<IHeader>({});
const pageFooterInfo = ref<IFooter>({});
useListenerHook("editorHeaderAndFooterChange", ({ header, footer }) => {
  pageFooterInfo.value = { ...footer };
  pageHeaderInfo.value = { ...header };
});
const setPageHeaderAndFooter = () => {
  openHeaderFooterSettings({ footer: pageFooterInfo.value, header: pageHeaderInfo.value }).then(value => {
    register.emit("setEditorHeaderAndFooter", JSON.parse(JSON.stringify(value)));
  });
};
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
</script>

<style scoped lang="less">
.info-color {
  color: @color-text-2;
  padding-top: 3px;
}
::v-deep(.arco-btn-size-mini) {
  padding: 0 8px;
}

.pager-margin-content {
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background-color: rgba(51, 77, 102, 0.06);
  }

  & > div:first-child {
    font-weight: bold;
  }
  & > div:last-child {
    font-size: 12px;
  }
}

.paper-setting {
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(51, 77, 102, 0.06);
  }
  display: flex;
  align-items: center;
}
</style>
