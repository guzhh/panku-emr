## 项目介绍

panku-emr 是一款基于 canvas-editor 现代Web技术开发的电子病历编辑器，专为医疗行业设计，提供丰富的文本编辑、表单控制、病历管理等功能。

### 主要功能

- **富文本编辑**：支持撤销/重做、字体设置、文本样式（粗体、斜体、下划线等）、对齐方式等常见文本编辑操作
- **元素插入**：支持插入表格、图片、链接、代码块、分页符、数学公式、日期选择器等元素
- **表单控件**：集成单选框、复选框、文本输入、日期选择等常用表单控件
- **页面布局**：支持页眉、页脚、页码、页边距、水印、分页等页面布局设置
- **导出功能**：支持导出图片、PDF等多种格式
- **病历专用功能**：包含一些医疗专用的编辑功能（如牙齿位置图、胎位图等）

### 技术栈

- **前端框架**：Vue 3 <mcfile name="package.json" path="./package.json"></mcfile>
- **编程语言**：TypeScript <mcfile name="package.json" path="./package.json"></mcfile>
- **构建工具**：Vite <mcfile name="package.json" path="./package.json"></mcfile>
- **编辑器核心**：canvas-editor <mcfile name="libs/canvas-editor/package.json" path="./libs/canvas-editor/package.json"></mcfile>
- **UI组件库**：Arco Design <mcfile name="package.json" path="./package.json"></mcfile>
- **状态管理**：Pinia <mcfile name="package.json" path="./package.json"></mcfile>
- **路由管理**：Vue Router <mcfile name="package.json" path="./package.json"></mcfile>
- **表格组件**：vxe-table <mcfile name="package.json" path="./package.json"></mcfile>

### 项目结构

```
├── src/
│   ├── components/       # 公共组件
│   ├── icons/            # 图标资源
│   ├── views/            # 页面视图
│   │   ├── editor/       # 编辑器页面
│   │   └── home/         # 首页
│   ├── hooks/            # 自定义钩子
│   ├── store/            # Pinia状态管理
│   ├── router/           # 路由配置
│   ├── styles/           # 样式文件
│   ├── utils/            # 工具函数
│   └── main.ts           # 入口文件
├── libs/
│   └── canvas-editor/    # 编辑器核心库
├── dev/                  # 开发相关配置
└── public/               # 静态资源
```

### 开发指南

#### 环境准备

- Node.js >= 16.9.1
- pnpm 包管理器

#### 安装依赖

```bash
pnpm install
```

#### 启动开发服务器

```bash
pnpm run dev
```

#### 构建生产版本

```bash
pnpm run build
```

#### 代码检查

```bash
pnpm run lint
```

#### 代码格式化

```bash
pnpm run format
```

### 核心特性详解

#### 编辑器功能

基于 canvas-editor 实现的富文本编辑器提供了丰富的医疗文档编辑功能：

- **丰富的文本操作**：支持撤销、重做、字体、大小、粗体、斜体、下划线、删除线、上标、对齐方式、标题、列表等
- **插入元素**：支持表格、图片、链接、代码块、分页符、数学公式、日期选择器、区块等
- **打印功能**：基于canvas转图片、pdf绘制实现打印功能
- **控件支持**：内置选择、文本、日期、单选、复选框等控件

#### 医疗专用功能

项目包含了一些专为医疗场景设计的功能，如图标资源中所示的牙齿位置图、胎位图等。

### 浏览器兼容性

- Chrome (推荐最新版本)
- Firefox (推荐最新版本)
- Safari (推荐最新版本)
- Edge (推荐最新版本)
