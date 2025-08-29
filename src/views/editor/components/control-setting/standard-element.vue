<template>
  <!-- 标准数据源 -->
  <div style="height: 100%; background: #ffffff; overflow: auto; position: relative">
    <a-tree show-line :data="treeData" size="mini">
      <template #title="item">
        <span @dblclick="dbClickTree(item)">{{ item.title }}</span>
      </template>
    </a-tree>
  </div>
</template>

<script setup lang="tsx">
import { ControlType } from "@panku/canvas-editor";
import { Register } from "@/views/editor/core/register/Register.ts";
import PkSvgIcon from "@/components/pk-svg-icon/index.vue";
import { getControlElement } from "@/views/editor/core/const/concept.ts";

defineOptions({ name: "element-data" });

const renderIcon = (node: any) => {
  if (node.expanded && !node.isLeaf) return <PkSvgIcon name="editor-file-open" size={16}></PkSvgIcon>;
  if (!node.expanded && !node.isLeaf) return <PkSvgIcon name="editor-file-close" size={16}></PkSvgIcon>;
  return <PkSvgIcon name="editor-file" size={16}></PkSvgIcon>;
};

type ITreeData = {
  title: string;
  key: string;
  icon?: any;
  children?: ITreeData[];
  type?: ControlType;
  options?: { code: string; value: string }[];
};

const treeData: ITreeData[] = [
  {
    title: "平台标准数据",
    key: "平台标准数据",
    icon: renderIcon,
    children: [
      {
        title: "一般情况",
        key: "一般情况",
        icon: renderIcon,
        children: [
          {
            title: "步态",
            key: "2",
            type: ControlType.SELECT,
            icon: renderIcon,
            options: [
              { code: "1", value: "步态稳健" },
              { code: "2", value: "步态不稳" },
              { code: "3", value: "痉挛性偏瘫" }
            ]
          },
          {
            icon: renderIcon,
            title: "面容",
            key: "4",
            type: ControlType.SELECT,
            options: [
              { code: "1", value: "正常" },
              { code: "2", value: "晦暗" },
              { code: "3", value: "憔悴" },
              { code: "4", value: "枯槁" }
            ]
          }
        ]
      },
      { icon: renderIcon, title: "皮肤粘膜", key: "皮肤粘膜" },
      { icon: renderIcon, title: "头颅", key: "头颅" },
      { icon: renderIcon, title: "眼部", key: "眼部" },
      { icon: renderIcon, title: "耳鼻喉", key: "耳鼻喉" },
      { icon: renderIcon, title: "口腔颌面", key: "口腔颌面" },
      { icon: renderIcon, title: "颈部", key: "颈部" },
      { icon: renderIcon, title: "胸部", key: "胸部" },
      { icon: renderIcon, title: "心脏", key: "心脏" },
      { icon: renderIcon, title: "腹部", key: "腹部" },
      { icon: renderIcon, title: "四肢", key: "四肢" }
    ]
  }
];

const register = new Register(); // 注册事件总线

const dbClickTree = (evt: ITreeData) => {
  if (!evt.children && evt.type) {
    const element = getControlElement(evt.type)!;
    element.control.extension.dataElementCode = evt.key;
    element.control.placeholder = evt.title;
    if (evt.type === ControlType.SELECT) {
      element.control.valueSets = evt.options;
    }
    console.info(element, "🚀 ~ file:standard-element.vue line:78 element");
    register.emit("executeInsertElementList", JSON.parse(JSON.stringify([element])));
  }
};
</script>

<style scoped lang="less"></style>
