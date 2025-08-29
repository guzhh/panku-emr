/// <reference types="vite/client" />

declare module "virtual:svg-icons-register" {
  const component: any;
  export default component;
}

declare module "virtual:svg-icons-names" {
  const iconsNames: string[];
  export default iconsNames;
}

declare module "@arco-design/color" {
  export function generate(
    /**
     * 颜色值类型 #00D7E5
     */
    color: string,
    /**
     * 不设置options，generate返回color传入的色值
     */
    options?: {
      /**
       * 1 - 10 (default: 6),generate返回指定层级的色值
       */
      index?: number;
      /**
       * 开启暗黑模式
       */
      dark?: boolean;
      /**
       * 开启，generate返回颜色值列表（1-10）
       */
      list?: boolean;
      format?: "hex" | "rgb" | "hsl";
    }
  ): string | string[];

  /**
   *
   * @param color 颜色值类型 #00D7E5
   * @return 0,215,229  用于设置颜色
   */
  export function getRgbStr(color: string): string;
}
