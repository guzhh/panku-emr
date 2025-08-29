/**
 * 获取每毫米的像素值
 */
function getOneMmsPx() {
  // 创建一个1mm宽的元素插入到页面，然后坐等出结果
  const div = document.createElement("div");
  div.id = "mm";
  div.style.width = "1mm";
  document.querySelector("body")!.appendChild(div);
  // 原生方法获取浏览器对元素的计算值
  const mm1 = document.getElementById("mm")!.getBoundingClientRect();
  return mm1.width;
}

/**
 * 将毫米值转换为像素值
 * @param mmValue 毫米值
 */
export function mmToPx(mmValue: number) {
  return Number((getOneMmsPx() * mmValue).toFixed(2));
}

export function pxToMm(pxValue: number) {
  // 将毫米值转换为像素值, 保留两位小数
  return Number((pxValue / getOneMmsPx()).toFixed(2));
}
