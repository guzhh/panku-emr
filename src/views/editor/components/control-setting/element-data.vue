<template>
  <div style="width: 100%; height: 100%; display: flex; flex-direction: column">
    <div class="header">数据值模板</div>
    <div class="element-data-container">
      <a-tree show-line :data="treeData" size="mini">
        <template #title="item">
          <span @dblclick="dbClickTree(item)">{{ item.title }}</span>
        </template>
      </a-tree>
    </div>
  </div>
</template>

<script setup lang="tsx">
import { Register } from "@/views/editor/core/register/Register.ts";
import PkSvgIcon from "@/components/pk-svg-icon/index.vue";

defineOptions({ name: "element-data" });

type ITreeData = {
  title: string;
  key: string;
  value?: string;
  icon?: any;
  children?: ITreeData[];
};

const renderIcon = (node: any) => {
  if (node.expanded && !node.isLeaf) return <PkSvgIcon name="editor-file-open" size={16}></PkSvgIcon>;
  if (!node.expanded && !node.isLeaf) return <PkSvgIcon name="editor-file-close" size={16}></PkSvgIcon>;
  return <PkSvgIcon name="editor-file" size={16}></PkSvgIcon>;
};

const treeData: ITreeData[] = [
  {
    title: "基本信息",
    key: "基本信息",
    icon: renderIcon,
    children: [
      { title: "住院号", key: "DE01.00.014.00", value: "202508130000001", icon: renderIcon },
      { title: "患者姓名", key: "DE02.01.039.00", value: "张三", icon: renderIcon },
      { title: "患者性别", key: "DE02.01.040.00", value: "1", icon: renderIcon },
      { title: "入院科别", key: "DE08.10.026.00.022", value: "内科", icon: renderIcon },
      { title: "床号", key: "DE99.10.004.033", value: "2305", icon: renderIcon },
      { title: "入院时间", key: "DE06.00.092.00", value: "2025-08-13 16:00:59", icon: renderIcon }
    ]
  }
];

const register = new Register(); // 注册事件总线
const dbClickTree = (evt: ITreeData) => {
  if (!evt.children) {
    register.emit("executeSetControlValue", {
      dataElementCode: evt.key,
      value: evt.value!
    });
  }
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 35px;
  background-color: #ffffff;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-2);
}

.element-data-container {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
  background-color: #ffffff;
}
</style>
