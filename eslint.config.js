import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { globalIgnores } from "eslint/config";
import { vueTsConfigs, configureVueProject, defineConfigWithVueTs } from "@vue/eslint-config-typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

// 允许更多语言在 `.vue` 文件中
configureVueProject({ scriptLangs: ["ts", "tsx", "js", "jsx"] });

// 定义基础配置
const vueTsConfig = defineConfigWithVueTs(vueTsConfigs.recommended);

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,ts,tsx,vue}"]
  },
  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),
  js.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  ...vueTsConfig,
  skipFormatting,
  // 添加全局变量配置, 添加环境配置
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      ecmaVersion: "latest",
      sourceType: "module"
    }
  },
  // 自定义配置
  {
    name: "app/custom-rules",
    files: ["**/*.{js,mjs,jsx,vue,ts,tsx}"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  },
  // 忽略模式（直接在配置文件中定义）
  {
    ignores: ["dist/", "build/", "libs/", "./src/auto-import.d.ts", "./src/components.d.ts"]
  }
];
