<template>
  <div style="height: 100%; overflow: auto; position: relative" id="editor-control-setting">
    <div style="width: 100%; padding: 0 6px; box-sizing: border-box; overflow: auto">
      <a-form :model="modelValue" size="mini" :show-colon="true" auto-label-width>
        <a-form-item label="类型" :feedback="false">
          <a-select
            disabled
            v-model="modelValue.type"
            :options="CONTROL_OPTION"
            :field-names="{ value: 'type', label: 'label' }"
            popup-container="#editor-control-setting"
          >
          </a-select>
        </a-form-item>
        <a-form-item field="label" label="名称" :feedback="false">
          <a-input v-model="modelValue.label" @change="attrChange('label')" />
        </a-form-item>
        <a-form-item field="conceptId" label="唯一标识" :feedback="false">
          <a-input v-model="modelValue.conceptId" @change="attrChange('conceptId')" />
        </a-form-item>
        <a-form-item field="placeholder" label="背景文字">
          <a-input v-model="modelValue.placeholder" placeholder="请输入背景文字" @change="attrChange('placeholder')" />
        </a-form-item>
        <a-form-item field="extension.dataElementCode" label="数据元" :feedback="false">
          <a-select
            allow-search
            v-model="modelValue.extension.dataElementCode"
            @change="attrChange('extension')"
            :options="ElementData"
            :field-names="{ value: 'code', label: 'name' }"
            :trigger-props="{ autoFitPopupMinWidth: true }"
            popup-container="#editor-control-setting"
          >
          </a-select>
        </a-form-item>
        <a-form-item field="extension.dataElementCode" label="编码" :feedback="false">
          <a-input v-model="modelValue.extension.dataElementCode" readonly />
        </a-form-item>
        <a-form-item field="minWidth" label="最小宽度">
          <a-input-number
            v-model="modelValue.minWidth"
            placeholder="请输入最小宽度"
            :min="0"
            :precision="0"
            :step="1"
            @change="attrChange('minWidth')"
          >
            <template #suffix>px</template>
          </a-input-number>
        </a-form-item>
        <!-- 选择类控件配置 -->
        <template
          v-if="
            modelValue.type === ControlType.SELECT ||
            modelValue.type === ControlType.RADIO ||
            modelValue.type === ControlType.CHECKBOX
          "
        >
          <a-form-item field="valueSets" label="选项">
            <a-textarea
              :auto-size="{ minRows: 2, maxRows: 10 }"
              placeholder="编码1:值1&#10;编码2:值二"
              v-model="modelValue.valueSets as string"
              @change="valueSetsChange"
            ></a-textarea>
          </a-form-item>
        </template>

        <!-- 下拉选择配置 -->
        <template v-if="modelValue.type === ControlType.SELECT">
          <a-form-item field="isMultiSelect" label="单选多选" @change="attrChange('isMultiSelect')">
            <a-radio-group v-model="modelValue.isMultiSelect">
              <a-radio :value="false">单选</a-radio>
              <a-radio :value="true">多选</a-radio>
            </a-radio-group>
          </a-form-item>
        </template>

        <!-- 单选框、复选框配置 -->
        <template v-if="modelValue.type === ControlType.RADIO || modelValue.type === ControlType.CHECKBOX">
          <a-form-item field="flexDirection" label="排列方向" @change="attrChange('flexDirection')">
            <a-radio-group v-model="modelValue.flexDirection">
              <a-radio value="row">横向</a-radio>
              <a-radio value="column">竖向</a-radio>
            </a-radio-group>
          </a-form-item>
        </template>
        <!-- 日期控件独特配置 -->
        <template v-if="modelValue.type === ControlType.DATE">
          <a-form-item field="dateFormat" label="日期格式" :feedback="false">
            <a-select
              allow-search
              :trigger-props="{ autoFitPopupMinWidth: true }"
              v-model="modelValue.dateFormat"
              @change="attrChange('dateFormat')"
              :options="dateFormatOptions"
              popup-container="#editor-control-setting"
            />
          </a-form-item>
        </template>
        <a-form-item field="preText" label="前缀文字" :feedback="false">
          <a-input v-model="modelValue.preText" @change="attrChange('preText')" placeholder="请输入前缀文字" />
        </a-form-item>
        <a-form-item field="postText" label="后缀文字" :feedback="false">
          <a-input v-model="modelValue.postText" @change="attrChange('postText')" placeholder="请输入后缀文字" />
        </a-form-item>
        <a-row>
          <a-col :span="12">
            <a-form-item label="是否只读">
              <a-switch type="round" @change="attrChange('disabled')" v-model="modelValue.disabled" size="small" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="不可删除">
              <a-switch
                type="round"
                @change="attrChange('deletable')"
                v-model="modelValue.deletable"
                size="small"
                :unchecked-value="true"
                :checked-value="false"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="下划线">
              <a-switch type="round" @change="attrChange('underline')" v-model="modelValue.underline" size="small" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="是否隐藏">
              <a-switch type="round" @change="attrChange('hide')" v-model="modelValue.hide" size="small" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item field="extension.changeMethods" label="值改变" :feedback="false">
          <a-button type="outline" style="width: 100%" @click="editValueChange">编辑值改变回调事件</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElementData } from "@/views/editor/core/const/element-data.ts";
import { useSettingConceptAttrHook } from "@/views/editor/core/hooks/use-setting-concept-attr-hook.ts";
import type { IControlInfo } from "@/views/editor/interface/Concept.ts";
import { CONTROL_OPTION } from "@/views/editor/core/const/concept";
import { ControlType } from "@panku/canvas-editor";

const modelValue = defineModel<IControlInfo>({ required: true });
const { attrChange, editValueChange, valueSetsChange } = useSettingConceptAttrHook(modelValue);

const dateFormatOptions = [
  { label: "yyyy年MM月dd日", value: "yyyy年MM月dd日" },
  { label: "yyyy年MM月dd日 hh:mm:ss", value: "yyyy年MM月dd日 hh:mm:ss" },
  { label: "yyyy-MM-dd", value: "yyyy-MM-dd" },
  { label: "MM-dd", value: "MM-dd" },
  { label: "yyyy-MM-dd hh:mm", value: "yyyy-MM-dd hh:mm" },
  { label: "yyyy-MM-dd hh:mm:ss", value: "yyyy-MM-dd hh:mm:ss" },
  { label: "yyyy/MM/dd", value: "yyyy/MM/dd" },
  { label: "yyyy/MM/dd hh:mm:ss", value: "yyyy/MM/dd hh:mm:ss" },
  { label: "hh:mm", value: "hh:mm" }
];
</script>

<style scoped lang="less"></style>
