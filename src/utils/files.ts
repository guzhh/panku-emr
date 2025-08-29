// 保存文件
export const saveFile = (url: string, name: string) => {
  const blobUrl = url;
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = name;
  link.click();
  URL.revokeObjectURL(blobUrl);
  link.remove();
};

// 导出JSON文件
export const exportJson = (data: object, fileName = "dataJSON.json") => {
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  saveFile(url, fileName);
};
