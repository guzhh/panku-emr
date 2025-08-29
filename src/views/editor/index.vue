<template>
  <div class="pk_emr_page">
    <div class="page_header w-full" v-bind:[EDITOR_COMPONENT]="EditorComponent.MENU">
      <a-tabs size="mini" default-active-key="2">
        <a-tab-pane key="1" title="文件">
          <file-menu></file-menu>
        </a-tab-pane>
        <a-tab-pane key="2" title="编辑">
          <edit-menu></edit-menu>
        </a-tab-pane>
        <a-tab-pane key="3" title="插入">
          <insert-menu></insert-menu>
        </a-tab-pane>
        <a-tab-pane key="4" title="页面">
          <page-menu></page-menu>
        </a-tab-pane>
        <a-tab-pane key="5" title="审阅">
          <review-menu></review-menu>
        </a-tab-pane>
        <a-tab-pane key="6" title="帮助">
          <help-menu></help-menu>
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="page_content flex-1">
      <!--      <div class="content_left pk_padding" v-bind:[EDITOR_COMPONENT]="EditorComponent.CATALOG">目录显示区域</div>-->
      <div class="content_body flex-1" v-bind:[EDITOR_COMPONENT]="EditorComponent.MAIN">
        <editor-main ref="editor-main"></editor-main>
      </div>
      <!--      批注显示区域-->
      <div class="content_right" v-bind:[EDITOR_COMPONENT]="EditorComponent.COMMENT">
        <annotation-viewer></annotation-viewer>
      </div>
      <!--   控件设置   -->
      <div class="content_right" v-bind:[EDITOR_COMPONENT]="EditorComponent.COMPONENT" v-if="editorMode === EditorMode.DESIGN">
        <control-setting></control-setting>
      </div>
      <!--  填充控件值的模板    -->
      <div
        class="content_right"
        v-bind:[EDITOR_COMPONENT]="EditorComponent.COMPONENT"
        v-if="editorMode === EditorMode.FORM || editorMode === EditorMode.EDIT"
      >
        <element-data></element-data>
      </div>
    </div>
    <div class="page_footer w-full pk_px" v-bind:[EDITOR_COMPONENT]="EditorComponent.FOOTER">
      <footer-menu></footer-menu>
    </div>
    <div class="editor_modal"></div>
  </div>
</template>

<script setup lang="ts">
import EditMenu from "@/views/editor/components/menu/edit-menu.vue";
import FileMenu from "@/views/editor/components/menu/file-menu.vue";
import PageMenu from "@/views/editor/components/menu/page-menu.vue";
import HelpMenu from "@/views/editor/components/menu/help-menu.vue";
import { SAVE_EDITOR_DATA_KEY } from "@/views/editor/core/const";
import InsertMenu from "@/views/editor/components/menu/insert-menu.vue";
import ReviewMenu from "@/views/editor/components/menu/review-menu.vue";
import FooterMenu from "@/views/editor/components/menu/footer-menu.vue";
import EditorMain from "@/views/editor/components/editor-main.vue";
import { EDITOR_COMPONENT, EditorComponent, EditorMode } from "@panku/canvas-editor";
import type { IEditorResult } from "@panku/canvas-editor/dist/src/editor/interface/Editor";
import ControlSetting from "./components/control-setting/index.vue";
import AnnotationViewer from "./components/annotation/index.vue";
import ElementData from "./components/control-setting/element-data.vue";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";
import { mockData } from "@/views/editor/mock.ts";

defineOptions({
  name: "EditorViewer"
});

const editorMainRef = useTemplateRef("editor-main");

onMounted(() => {
  nextTick(() => {
    let dataStr = localStorage.getItem(SAVE_EDITOR_DATA_KEY);
    if (!dataStr) dataStr = JSON.stringify(mockData);
    const editorData = JSON.parse(dataStr) as IEditorResult;
    editorMainRef.value?.updateContentAndOptions({ data: editorData.data, options: editorData.options });
  });
});

const editorMode = ref(""); // 编辑器模式
useListenerHook("editorModeChange", payload => {
  editorMode.value = payload;
});
</script>

<style scoped lang="less">
.pk_emr_page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;

  .page_header {
    height: auto;
    border-bottom: 1px solid @color-border;

    .arco-tabs {
      background: #f3f5f7;

      ::v-deep(.arco-tabs-tab) {
        //padding-top: 3px;
        //padding-bottom: 3px;
        //margin: 0 8px;

        .arco-tabs-tab-title {
          font-weight: bold;
        }
      }

      ::v-deep(.arco-tabs-content) {
        padding: 4px;
        background-color: #fff;
      }
    }
  }

  .page_content {
    min-height: 0;
    overflow: auto;
    display: flex;
    box-sizing: border-box;

    .content_left {
      width: 200px;
      height: 100%;
      flex-shrink: 0;
      border-right: 1px solid @color-border;
      overflow: auto;
      box-sizing: border-box;
    }

    .content_body {
      min-height: 0;
      overflow: auto;
      box-sizing: border-box;
      display: flex;
      min-width: 300px;
    }

    .content_right {
      width: 250px;
      height: 100%;
      flex-shrink: 0;
      border-left: 1px solid @color-border;
      overflow: auto;
    }
  }

  .page_footer {
    height: auto;
    border-top: 1px solid @color-border;
    box-sizing: border-box;
  }
}
</style>
