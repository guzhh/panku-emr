/**
 * 用于压缩生产环境输出的图像资源文件
 * 图片压缩
 * https://github.com/anncwb/vite-plugin-imagemin
 */
import viteImagemin from "vite-plugin-imagemin";

/**
 * 用于压缩生产环境输出的图像资源文件
 * @returns vite插件
 */
export default function configImageminPlugin() {
  const imageminPlugin = viteImagemin({
    gifsicle: {
      optimizationLevel: 7, // 设置GIF图片的优化等级为7
      interlaced: false // 不启用交错扫描
    },
    optipng: {
      optimizationLevel: 7 // 设置PNG图片的优化等级为7
    },
    mozjpeg: {
      quality: 20 // 设置JPEG图片的质量为20
    },
    pngquant: {
      quality: [0.8, 0.9], // 设置PNG图片的质量范围为0.8到0.9之间
      speed: 4 // 设置PNG图片的优化速度为4
    },
    svgo: {
      plugins: [
        {
          name: "removeViewBox" // 启用移除SVG视图框的插件
        },
        {
          name: "removeEmptyAttrs",
          active: false // 不启用移除空属性的插件
        }
      ]
    }
  });
  return imageminPlugin;
}
