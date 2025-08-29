import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { vitePluginForArco } from "@arco-plugins/vite-vue";

export default function configAutoResolverPlugin() {
  return [
    AutoImport({
      resolvers: [ArcoResolver()],
      imports: [
        "vue",
        "vue-router",
        "pinia",
        {
          // vue 3.5.x
          vue: ["useTemplateRef", "onWatcherCleanup", "useId"]
        }
      ],
      dts: "src/auto-import.d.ts"
    }),
    Components({
      // 指定组件位置，默认是 src/components 自动导入自定义组件
      dirs: ["src/components"],
      extensions: ["vue", "tsx"],
      deep: true, // 避免解析到src/components下的子目录
      dts: "src/components.d.ts",
      resolvers: [ArcoResolver({ sideEffect: true })]
    }),
    vitePluginForArco({
      style: "css"
    })
  ];
}
