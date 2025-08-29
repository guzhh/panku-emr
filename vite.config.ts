import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import mkcert from "vite-plugin-mkcert";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { fileURLToPath, URL } from "node:url";
import eslintPlugin from "@nabla/vite-plugin-eslint";
import { createHtmlPlugin } from "vite-plugin-html";
import pkj from "./package.json";
import { autoResolverPlugin, compressPlugin, imageminPlugin, svgIconPlugin } from "./dev/plugins/index.js";

// https://vite.dev/config/
// eslint-disable-next-line no-empty-pattern
export default defineConfig(({}) => {
  // 页面基础路由
  const baseUrl = `/${pkj.name}/`;
  return {
    base: baseUrl,
    plugins: [
      vue(),
      vueJsx(),
      mkcert(), // 本地HTTPS自签名证书
      eslintPlugin({
        eslintOptions: {
          cache: false // 禁用eslint缓存
        }
      }),
      autoResolverPlugin(), // 自动导入组件
      svgIconPlugin(), // 自动导入svg
      compressPlugin("gzip"), // 打包压缩
      imageminPlugin(), // 图片资源压缩
      createHtmlPlugin({
        minify: true, // 是否压缩html
        inject: {
          data: {
            title: pkj.description
          }
        }
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "@/styles/var.less";`
        }
      }
    },
    server: {
      host: "0.0.0.0", // 设置服务器地址
      port: 32000, // 设置端口号
      cors: true, // 允许跨域
      devtool: "source-map", //是否为开发构建启用生产源映射
      proxy: {}
    },
    build: {
      chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
      outDir: "dist", // 指定打包路径，默认为项目根目录下的dist目录
      minify: "esbuild", // Vite 2.6.x 以上需要配置 minify："terser"，terserOptions才能生效
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]"
        }
      }
    }
  };
});
