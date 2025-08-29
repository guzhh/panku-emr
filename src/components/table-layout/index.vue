<template>
  <a-popover
    :trigger="trigger"
    v-model:popup-visible="popupVisible"
    @popup-visible-change="changePopover"
    :content-style="{ padding: '4px' }"
  >
    <slot></slot>
    <template #content>
      <table>
        <tbody>
          <tr>
            <td style="border: none"></td>
            <td v-for="(j, jj) in colNum" :key="jj" style="border: none; vertical-align: top">
              <div class="td_box" style="font-size: 12px">{{ j }}</div>
            </td>
          </tr>
          <tr v-for="(i, ii) in rowNum" :key="ii">
            <td style="border: none; vertical-align: top">
              <div class="td_box" style="font-size: 12px">{{ i }}</div>
            </td>
            <td v-for="(_, jj) in colNum" :key="jj">
              <div
                class="td_box"
                @mouseenter="boxMouseenter(ii, jj)"
                :style="{ backgroundColor: ii < rows && jj < cols ? 'rgb(var(--primary-1))' : '' }"
                @click="setUpColumns(ii + 1, jj + 1)"
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </a-popover>
</template>

<script setup lang="ts">
defineOptions({ name: "table-layout" });

const emits = defineEmits<{
  (e: "change", payload: { row: number; col: number }): void;
}>();

interface Props {
  colNum?: number;
  rowNum?: number;
  trigger?: "click" | "hover";
}

withDefaults(defineProps<Props>(), { colNum: 10, rowNum: 10, trigger: "hover" });

const popupVisible = ref(false);
const cols = ref(0); // 查看器每行数量
const rows = ref(0); // 每列展示数量

const changePopover = () => {
  cols.value = 0;
  rows.value = 0;
};
watch(
  () => popupVisible.value,
  () => {
    changePopover();
  }
);

// 悬浮选择栏位
const boxMouseenter = (ii: number, jj: number) => {
  rows.value = ii + 1;
  cols.value = jj + 1;
};

const setUpColumns = (row: number, col: number) => {
  emits("change", { row, col });
  popupVisible.value = false;
};
</script>

<style scoped lang="less">
.td_box {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  /* 合并边框，使得边框更整齐 */
  //border-spacing: 10px 5px;
}

td,
th {
  border: 1px solid #d0d2d5;
  /* 设置单元格的边框为1像素实线，颜色为灰色 */
}
</style>
