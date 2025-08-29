<template>
  <div style="width: 350px">
    <a-input-search :style="{ width: '100%' }" placeholder="请输入查询内容" @input="confirmFilterEvent" />
    <vxe-table
      border
      size="mini"
      :data="data"
      ref="tableRef"
      align="center"
      :min-height="100"
      :max-height="300"
      v-if="!isMultiSelect"
      :row-config="{ isHover: true, keyField: 'code' }"
      :radio-config="{
        labelField: 'code',
        reserve: true,
        highlight: true,
        trigger: 'row',
        checkRowKey: checkRowKeys.toString(),
        strict: false
      }"
      :column-config="{ resizable: true }"
    >
      <vxe-column type="radio" width="50"></vxe-column>
      <vxe-column field="code" title="编码" :min-width="60"></vxe-column>
      <vxe-column field="value" title="说明" :min-width="180"></vxe-column>
    </vxe-table>
    <vxe-table
      border
      v-else
      size="mini"
      :data="data"
      ref="tableRef"
      align="center"
      :min-height="100"
      :max-height="300"
      :column-config="{ resizable: true }"
      :row-config="{ isHover: true, keyField: 'code' }"
      :checkbox-config="{ labelField: 'code', reserve: true, highlight: true, trigger: 'row', checkRowKeys: checkRowKeys }"
    >
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column field="code" title="编码" :min-width="60"></vxe-column>
      <vxe-column field="value" title="说明" :min-width="180"></vxe-column>
    </vxe-table>
    <div class="footer-btn-content">
      <a-space>
        <a-button size="small" @click="cancel">取消</a-button>
        <a-button size="small" type="primary" @click="submit">确定</a-button>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type VxeTableInstance } from "vxe-table";
import { debounce, deepClone } from "@/utils";

defineOptions({ name: "select-modal" });

interface RowVO {
  value: string;
  code: string;
}

const emits = defineEmits<{
  (e: "change", payload: { value: string[]; options: RowVO[] } | null): void;
}>();

interface Props {
  isMultiSelect: boolean;
  options: RowVO[];
  value: string[];
}
const props = withDefaults(defineProps<Props>(), { isMultiSelect: false });

const tableRef = ref<VxeTableInstance<RowVO>>();
const checkRowKeys = ref<string[]>(props.value);

const originData = deepClone(toRaw(props.options));
const data = ref(props.options);

const cancel = () => {
  emits("change", null);
};

const submit = () => {
  const $table = tableRef.value;
  if ($table) {
    const options = props.options.map(item => ({ ...item }));
    if (props.isMultiSelect) {
      const selectReserveRecords = $table.getCheckboxReserveRecords();
      const selectRecords = $table.getCheckboxRecords();
      const list = selectRecords.reduce(
        (acc, cur) => {
          console.info(acc, "🚀 ~ file:select-modal.vue line:97 acc");
          if (acc.findIndex((item: RowVO) => item.code === cur.code) === -1) {
            acc.push(cur);
          }
          return acc;
        },
        [...selectReserveRecords]
      );
      console.info(list, "🚀 ~ file:select-modal.vue line:103 list");
      if (selectRecords.length > 0) {
        emits("change", { value: list.map((item: RowVO) => item.code), options });
      } else {
        emits("change", { value: [], options });
      }
    } else {
      const selectRecord = $table.getRadioReserveRecord() || $table.getRadioRecord();
      if (selectRecord) {
        emits("change", { value: [selectRecord.code], options });
      } else {
        emits("change", { value: [], options });
      }
    }
  }
};

// region 👉👉👉👉👉 数据过滤 👈👈👈👈👈
const confirmFilterEvent = debounce((value: string) => {
  if (value) {
    data.value = originData.filter(item => item.value.includes(value) || item.code.includes(value));
  } else {
    data.value = originData.map(item => ({ ...item }));
  }
}, 200);
// endregion 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
</script>

<style scoped lang="less">
.footer-btn-content {
  width: 100%;
  text-align: right;
  padding: 4px;
  box-sizing: border-box;
}
</style>
