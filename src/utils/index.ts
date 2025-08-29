// 防抖
import dayjs from "dayjs";

export function debounce<T extends unknown[]>(func: (...arg: T) => unknown, delay: number) {
  let timer: number;
  return function (this: unknown, ...args: T) {
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
// 节流
export function throttle<T extends unknown[]>(func: (...arg: T) => unknown, delay: number) {
  let timer: number;
  return function (this: unknown, ...args: T) {
    if (!timer) {
      timer = window.setTimeout(() => {
        timer = 0;
        func.apply(this, args);
      }, delay);
    }
  };
}

// 非阻塞运行任务
export function executeWhenIdle(fn: Function) {
  const callback = window.requestIdleCallback || window.setTimeout;
  callback(() => {
    fn();
  });
}

// 深拷贝
export function deepClone<T>(obj: T): T {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return (obj as unknown[]).map(item => deepClone(item)) as T;
  }

  const newObj = {} as T;
  (Object.keys(obj) as (keyof T)[]).forEach(key => {
    newObj[key] = deepClone(obj[key]);
  });

  return newObj;
}

/**
 * 智能解析任意时间格式输入，支持中文单位（年、月、日、时、分、秒）
 * 自动提取并补全缺失部分（默认使用当前时间）
 * @param {string|number} input - 用户输入
 * @returns {dayjs.Dayjs} 解析后的 dayjs 对象
 */
export function smartParseDateTime(input: string | number) {
  const str = String(input).trim();
  const now = dayjs();

  // 初始化默认值（使用当前时间）
  let year = now.year();
  let month = now.month(); // 0-based
  let day = now.date();
  let hour = 0;
  let minute = 0;
  let second = 0;

  // 1. 提取 年（四位数字 + 可选“年”）
  const yearMatch = str.match(/(\d{4})年?/);
  if (yearMatch) {
    year = parseInt(yearMatch[1], 10);
  }

  // 2. 提取 月（1-2位数字 + 可选“月”）
  const monthMatch = str.match(/(\d{1,2})月/);
  if (monthMatch) {
    const m = parseInt(monthMatch[1], 10);
    if (m >= 1 && m <= 12) {
      month = m - 1; // 转为 0-based
    }
  }

  // 3. 提取 日（1-2位数字 + 可选“日”或“号”）
  const dayMatch = str.match(/(\d{1,2})[日号]/);
  if (dayMatch) {
    const d = parseInt(dayMatch[1], 10);
    if (d >= 1 && d <= 31) {
      day = d;
    }
  }

  // 4. 提取 时（1-2位数字 + “时”）
  const hourMatch = str.match(/(\d{1,2})时/);
  if (hourMatch) {
    const h = parseInt(hourMatch[1], 10);
    if (h >= 0 && h <= 23) {
      hour = h;
    }
  }

  // 5. 提取 分（1-2位数字 + “分”）
  const minuteMatch = str.match(/(\d{1,2})分/);
  if (minuteMatch) {
    const m = parseInt(minuteMatch[1], 10);
    if (m >= 0 && m <= 59) {
      minute = m;
    }
  }

  // 6. 提取 秒（1-2位数字 + “秒”）
  const secondMatch = str.match(/(\d{1,2})秒/);
  if (secondMatch) {
    const s = parseInt(secondMatch[1], 10);
    if (s >= 0 && s <= 59) {
      second = s;
    }
  }

  // 7. 【兼容】如果没用中文单位，尝试标准分隔符（数字+符号）
  if (!dayMatch && !monthMatch && !yearMatch) {
    // 尝试提取 MM-DD 或 DD
    const fallbackDay = str.match(/\b(\d{1,2})\b(?=[^数字]*$)/); // 匹配最后一个孤立数字作为“日”
    if (fallbackDay) {
      const d = parseInt(fallbackDay[1], 10);
      if (d >= 1 && d <= 31) day = d;
    }
  }

  if (!hourMatch || !minuteMatch || !secondMatch) {
    // 尝试提取 H:m:s 或 H:m
    const timeMatch = str.match(/\b(\d{1,2})[:：](\d{1,2})(?::[:：]?(\d{1,2}))?\b/);
    if (timeMatch) {
      const h = parseInt(timeMatch[1], 10);
      const m = parseInt(timeMatch[2], 10);
      const s = timeMatch[3] ? parseInt(timeMatch[3], 10) : 0;
      if (h >= 0 && h <= 23) hour = h;
      if (m >= 0 && m <= 59) minute = m;
      if (s >= 0 && s <= 59) second = s;
    }
  }

  // 8. 构造结果
  const result = now.year(year).month(month).date(day).hour(hour).minute(minute).second(second).millisecond(0);

  // 9. 验证
  if (!result.isValid()) {
    throw new Error(`解析失败，无效日期: ${input}`);
  }

  return result;
}

/**
 * 数据代理
 * @param obj - 要代理的对象
 * @param path - 当前属性路径
 * @param onChange - 属性变化时的回调函数
 */
export const dataObserve = <T extends Record<string, any>>(
  obj: T,
  path = "",
  onChange: (path: string, value: any, oldValue: any) => void
): T => {
  return new Proxy(obj, {
    // 拦截属性读取, receiver 为代理对象本身
    get(target, property, receiver) {
      // 获取属性值
      const value = Reflect.get(target, property, receiver);
      if (typeof value === "object" && value !== null) {
        return dataObserve(value, `${path}${String(property)}.`, onChange);
      }
      return value;
    },
    set(target, property, value, receiver) {
      // 拿到旧的值
      const oldValue = Reflect.get(target, property, receiver);
      const fullPath = `${path}${String(property)}`; // 完整的属性路径
      const result = Reflect.set(target, property, value, receiver);
      if (value !== oldValue) {
        onChange(fullPath, value, oldValue);
      }
      return result;
    }
  });
};
