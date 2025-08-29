<template>
  <div class="container">
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px">
      <div>
        <a-input-number
          :style="{ width: '160px' }"
          v-model="data.firstYear"
          :min="0"
          :max="99"
          hide-button
          size="small"
          :step="1"
          :precision="0"
        >
          <template #prefix> 初潮年龄：</template>
          <template #suffix> 岁 </template>
        </a-input-number>
      </div>
      <div>
        <a-input-group>
          <span style="margin-right: 8px">月经持续</span>
          <a-input-number
            :style="{ width: '60px' }"
            v-model="data.durationDays"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
          />
          <div style="width: 20px; text-align: center">~</div>
          <a-input-number
            :style="{ width: '60px' }"
            v-model="data.durationDays2"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
          />
          <span style="margin-left: 8px">天</span>
        </a-input-group>
        <a-divider />
        <a-input-group>
          <span style="margin-right: 8px">生理周期</span>
          <a-input-number
            :style="{ width: '60px' }"
            v-model="data.cycleDays"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
          />
          <div style="width: 20px; text-align: center">~</div>
          <a-input-number
            :style="{ width: '60px' }"
            v-model="data.cycleDays2"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
          />
          <span style="margin-left: 8px">天</span>
        </a-input-group>
      </div>
      <div>
        <a-input-number
          v-if="isAmenorrhea"
          :style="{ width: '160px' }"
          :min="0"
          :max="99"
          hide-button
          size="small"
          :step="1"
          :precision="0"
          v-model="data.lastYear"
        >
          <template #prefix> 闭经年龄：</template>
          <template #suffix> 岁 </template>
        </a-input-number>
        <a-date-picker style="width: 210px" v-else size="small" format="YYYY-MM-DD" v-model="data.lastDate">
          <template #prefix> 末次日期:</template>
        </a-date-picker>
      </div>
    </div>
    <div style="width: 100%; margin-top: 30px; justify-content: end; display: flex; align-items: center">
      <span>是否闭经：</span>
      <div style="width: 180px">
        <a-radio-group v-model="isAmenorrhea">
          <a-radio :value="false">未闭经</a-radio>
          <a-radio :value="true">已闭经</a-radio>
        </a-radio-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IDataImageMap } from "@panku/canvas-editor/dist/src/editor/interface/DataImage";
import { DataImageType } from "@panku/canvas-editor";
import { ref } from "vue";

interface Props {
  imageData: IDataImageMap[DataImageType.MH];
}

const props = withDefaults(defineProps<Props>(), {});

const data = ref<IDataImageMap[DataImageType.MH]>({ ...props.imageData });
const isAmenorrhea = ref(!props.imageData.lastDate);

const getData = (): IDataImageMap[DataImageType.MH] => {
  if (isAmenorrhea.value) {
    return JSON.parse(JSON.stringify({ ...data.value, lastDate: undefined }));
  } else {
    return JSON.parse(JSON.stringify({ ...data.value, lastYear: undefined }));
  }
};
defineExpose({ getData });
</script>

<style scoped lang="less"></style>
