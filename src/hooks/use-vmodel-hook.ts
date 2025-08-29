import { computed, type ComputedRef } from "vue";

/**
 * 优化后的 useVModel hook，提供更完善的类型支持和深层对象响应式处理
 * @param props 组件的 props 对象
 * @param key 要绑定的 prop 键名
 * @param emit 组件的 emit 函数
 * @returns 响应式的计算属性
 */
export function useVModel<T, K extends keyof T & string>(
  props: T,
  key: K,
  emit: (event: `update:${K}`, value: T[K]) => void
): ComputedRef<T[K]> {
  return computed({
    get() {
      const value = props[key];

      // 如果值是对象，则使用 Proxy 来拦截属性修改
      if (typeof value === "object" && value !== null) {
        // 创建深层代理函数
        const createDeepProxy = (obj: any): any => {
          // 如果不是对象，直接返回
          if (typeof obj !== "object" || obj === null) {
            return obj;
          }

          // 为每个嵌套对象创建代理
          return new Proxy(obj, {
            get(target, prop) {
              const value = target[prop as keyof typeof target];
              // 递归代理嵌套对象
              if (typeof value === "object" && value !== null) {
                return createDeepProxy(value);
              }
              return value;
            },
            set(target, prop, newValue) {
              target[prop as keyof typeof target] = newValue;
              // 触发更新事件
              emit(`update:${key}`, target);
              return true;
            }
          });
        };

        return createDeepProxy(value) as T[K];
      }

      return value;
    },
    set(newValue) {
      emit(`update:${key}`, newValue);
    }
  });
}
