import type { IEventListener } from "@/views/editor/interface/Listener.ts";
import { Register } from "@/views/editor/core/register/Register.ts";

export const useListenerHook = <K extends string & keyof IEventListener>(
  eventName: K,
  callback: IEventListener[K]
): [IEventListener[K]] => {
  const register = new Register();
  let func: IEventListener[K] | null = callback;

  onMounted(() => {
    register.on(eventName, func as IEventListener[K]);
  });

  onUnmounted(() => {
    register.off(eventName, func as IEventListener[K]);
    func = null;
  });

  return [func];
};
