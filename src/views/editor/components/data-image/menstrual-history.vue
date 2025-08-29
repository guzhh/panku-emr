<template>
  <div class="container">
    <div class="editor-container">
      <div style="width: 150px; flex-shrink: 0">
        <span>初潮年龄：</span>
        <a-input-number
          :min="0"
          :max="99"
          :step="1"
          hide-button
          size="small"
          :precision="0"
          :style="{ width: '80px' }"
          v-model="data.firstYear"
        >
          <template #suffix> 岁 </template>
        </a-input-number>
      </div>
      <div style="width: 230px; flex-shrink: 0">
        <a-input-group>
          <span style="margin-right: 8px">月经持续</span>
          <a-input-number
            v-model="data.durationDays"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
            :style="{ width: '60px' }"
            placeholder="最短"
          />
          <div style="width: 20px; text-align: center">~</div>
          <a-input-number
            v-model="data.durationDays2"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
            :style="{ width: '60px' }"
            placeholder="最长"
          />
          <span style="margin-left: 8px">天</span>
        </a-input-group>
        <a-divider />
        <a-input-group>
          <span style="margin-right: 8px">生理周期</span>
          <a-input-number
            v-model="data.cycleDays"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
            :style="{ width: '60px' }"
            placeholder="最短"
          />
          <div style="width: 20px; text-align: center">~</div>
          <a-input-number
            v-model="data.cycleDays2"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
            :style="{ width: '60px' }"
            placeholder="最长"
          />
          <span style="margin-left: 8px">天</span>
        </a-input-group>
      </div>
      <div>
        <div v-if="isAmenorrhea">
          <span>闭经年龄：</span>
          <a-input-number
            :style="{ width: '80px' }"
            :min="0"
            :max="99"
            hide-button
            size="small"
            :step="1"
            :precision="0"
            v-model="data.lastYear"
          >
            <template #suffix> 岁 </template>
          </a-input-number>
        </div>
        <div v-else>
          <span>末次日期：</span>
          <a-date-picker style="width: 120px" size="small" format="YYYY-MM-DD" v-model="data.lastDate"> </a-date-picker>
        </div>
      </div>
    </div>
    <div class="radio-container">
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

const props = defineProps<{
  modelValue: IDataImageMap[DataImageType.MH];
}>();

const emit = defineEmits(["update:modelValue"]);

const data = ref<IDataImageMap[DataImageType.MH]>({ ...props.modelValue });
const isAmenorrhea = ref(!props.modelValue.lastDate);

watch(
  () => data.value,
  newValue => {
    emit("update:modelValue", newValue);
  },
  { deep: true }
);
</script>

<style scoped lang="less">
.editor-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}
.radio-container {
  width: 100%;
  margin-top: 30px;
  justify-content: end;
  display: flex;
  align-items: center;
}
</style>
