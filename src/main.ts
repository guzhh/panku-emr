// 支持SVG
import "virtual:svg-icons-register";
import { createApp } from "vue";
import App from "./App.vue";

// 导入全局scss主文件
import "@/styles/index.less";
import { EditorComponent, EDITOR_COMPONENT } from "@panku/canvas-editor";
import { setupRouter } from "@/router";
import { setupStore } from "@/store";
import { setupVxeTable } from "@/plugins";
import { createAutoAttributeObserver } from "@/utils/autoAttribute.ts";

async function bootstrap() {
  const app = createApp(App);
  setupVxeTable(app);
  // 挂载路由
  setupRouter(app);
  setupStore(app);
  app.mount("#app");

  // 为处理部分第三方组件无法添加自定义属性的问题，创建一个监听器，当某个class出现后自动添加属性
  createAutoAttributeObserver([
    {
      targetClass: "arco-modal-container",
      attributeName: EDITOR_COMPONENT,
      attributeValue: EditorComponent.COMPONENT
    }
  ]);
}

void bootstrap();
