import compressPlugin from "vite-plugin-compression";

/**
 * 打包压缩插件
 * @param {"gzip" | "brotli"} compress 压缩类型
 * @param {boolean} deleteOriginFile 压缩后是否删除源文件
 * @returns  vite插件
 */
export default function configCompressPlugin(compress, deleteOriginFile = false) {
  const plugins = [];

  if (compress === "gzip") {
    plugins.push(
      compressPlugin({
        ext: ".gz",
        deleteOriginFile // 压缩后是否删除源文件
      })
    );
  }

  if (compress === "brotli") {
    plugins.push(
      compressPlugin({
        ext: ".br",
        algorithm: "brotliCompress", // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
        deleteOriginFile
      })
    );
  }
  return plugins;
}
