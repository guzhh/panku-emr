import { EventBus } from "@/utils/event-bus.ts";
import type { IEventListener } from "@/views/editor/interface/Listener.ts";

export class Register {
  static instance: Register;

  public eventBus: EventBus<IEventListener>;

  constructor() {
    if (!Register.instance) {
      Register.instance = this;
    }

    this.eventBus = new EventBus<IEventListener>();
    return Register.instance as this;
  }

  public on<K extends string & keyof IEventListener>(eventName: K, callback: IEventListener[K]) {
    this.eventBus.on(eventName, callback);
  }

  public off<K extends string & keyof IEventListener>(eventName: K, callback: IEventListener[K]) {
    this.eventBus.off(eventName, callback);
  }

  public emit<K extends string & keyof IEventListener>(
    eventName: K,
    payload?: IEventListener[K] extends (payload: infer P) => void ? P : never
  ) {
    this.eventBus.emit(eventName, payload);
  }
}
