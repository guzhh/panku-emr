import { generate, getRgbStr } from "@arco-design/color";

export type ThemeConfig = {
  primary: string;
  success: string;
  warning: string;
  error: string;
};

export const useThemeStore = defineStore(
  "theme",
  () => {
    /** 暗黑模式 */
    const darkMode = ref(false);
    /** 主题配置 */
    const themeConfig = ref<ThemeConfig>({
      primary: "#1772F6",
      success: "#00B42A",
      warning: "#FF7D00",
      error: "#F53F3F"
    });
    const colorKeys: ThemeConfig = {
      primary: "arcoblue",
      success: "green",
      warning: "orange",
      error: "red"
    };

    watchEffect(() => {
      Object.keys(themeConfig.value).forEach(key => {
        const colorKey = colorKeys[key as keyof ThemeConfig];
        const color = themeConfig.value[key as keyof ThemeConfig];
        const colorList = generate(color, { list: true, dark: darkMode.value }) as string[];
        colorList.forEach((color: string, index: number) => {
          document.body.style.setProperty(`--${colorKey}-${index + 1}`, getRgbStr(color));
        });
      });
      if (darkMode.value) {
        // 设置为暗黑主题
        document.body.setAttribute("arco-theme", "dark");
      } else {
        // 恢复亮色主题
        document.body.removeAttribute("arco-theme");
      }
    });
    return { darkMode, themeConfig };
  },
  {
    persist: {
      key: `${window.location.origin}_${import.meta.env.BASE_URL}_MICRO_HOST_THEME`
    }
  }
);
