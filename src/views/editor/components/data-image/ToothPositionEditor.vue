<template>
  <div class="tooth-editor">
    <div class="actions">
      <div class="row">
        <a-button-group>
          <a-button @click="selectPreset('全口恒牙')">全口恒牙</a-button>
          <a-button @click="selectPreset('上半口-恒')">上半口-恒</a-button>
          <a-button @click="selectPreset('下半口-恒')">下半口-恒</a-button>
          <a-button @click="selectPreset('左上-恒')">左上-恒</a-button>
          <a-button @click="selectPreset('左下-恒')">左下-恒</a-button>
          <a-button @click="selectPreset('右上-恒')">右上-恒</a-button>
          <a-button @click="selectPreset('右下-恒')">右下-恒</a-button>
        </a-button-group>
        <a-button @click="clearAll" status="danger">清除所有</a-button>
      </div>
      <div class="row">
        <a-button-group>
          <a-button @click="selectPreset('全口乳牙')">全口乳牙</a-button>
          <a-button @click="selectPreset('上半口-乳')">上半口-乳</a-button>
          <a-button @click="selectPreset('下半口-乳')">下半口-乳</a-button>
          <a-button @click="selectPreset('左上-乳')">左上-乳</a-button>
          <a-button @click="selectPreset('左下-乳')">左下-乳</a-button>
          <a-button @click="selectPreset('右上-乳')">右上-乳</a-button>
          <a-button @click="selectPreset('右下-乳')">右下-乳</a-button>
        </a-button-group>
      </div>
    </div>
    <div class="tooth-chart">
      <div class="center-line"></div>
      <div class="horizontal-line"></div>

      <!-- Upper Row -->
      <div class="dental-row upper-row">
        <!-- Upper Left -->
        <div class="quadrant">
          <div class="teeth-row deciduous upper-deciduous">
            <div
              v-for="tooth in teeth.upperLeft.deciduous"
              :key="tooth.name"
              class="tooth"
              :class="['baby-tooth', { selected: isSelected('1', tooth.name) }]"
              @click="toggleTooth('1', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
          <div class="teeth-row permanent upper-permanent">
            <div
              v-for="tooth in teeth.upperLeft.permanent"
              :key="tooth.name"
              class="tooth"
              :class="['adult-tooth', { selected: isSelected('1', tooth.name) }]"
              @click="toggleTooth('1', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
        </div>

        <!-- Upper Right -->
        <div class="quadrant">
          <div class="teeth-row deciduous upper-deciduous">
            <div
              v-for="tooth in teeth.upperRight.deciduous"
              :key="tooth.name"
              class="tooth"
              :class="['baby-tooth', { selected: isSelected('2', tooth.name) }]"
              @click="toggleTooth('2', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
          <div class="teeth-row permanent upper-permanent">
            <div
              v-for="tooth in teeth.upperRight.permanent"
              :key="tooth.name"
              class="tooth"
              :class="['adult-tooth', { selected: isSelected('2', tooth.name) }]"
              @click="toggleTooth('2', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
        </div>
      </div>

      <!-- Lower Row -->
      <div class="dental-row lower-row">
        <!-- Lower Left -->
        <div class="quadrant">
          <div class="teeth-row permanent lower-permanent">
            <div
              v-for="tooth in teeth.lowerLeft.permanent"
              :key="tooth.name"
              class="tooth"
              :class="['adult-tooth', { selected: isSelected('3', tooth.name) }]"
              @click="toggleTooth('3', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
          <div class="teeth-row deciduous lower-deciduous">
            <div
              v-for="tooth in teeth.lowerLeft.deciduous"
              :key="tooth.name"
              class="tooth"
              :class="['baby-tooth', { selected: isSelected('3', tooth.name) }]"
              @click="toggleTooth('3', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
        </div>

        <!-- Lower Right -->
        <div class="quadrant">
          <div class="teeth-row permanent lower-permanent">
            <div
              v-for="tooth in teeth.lowerRight.permanent"
              :key="tooth.name"
              class="tooth"
              :class="['adult-tooth', { selected: isSelected('4', tooth.name) }]"
              @click="toggleTooth('4', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
          <div class="teeth-row deciduous lower-deciduous">
            <div
              v-for="tooth in teeth.lowerRight.deciduous"
              :key="tooth.name"
              class="tooth"
              :class="['baby-tooth', { selected: isSelected('4', tooth.name) }]"
              @click="toggleTooth('4', tooth.name)"
            >
              {{ tooth.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DataImageType } from "@panku/canvas-editor";
import type { IDataImageMap } from "@panku/canvas-editor/dist/src/editor/interface/DataImage";
import { reactive, watch } from "vue";

type PermanentToothNum = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
type DeciduousToothLetter = "A" | "B" | "C" | "D" | "E";
type ToothName = PermanentToothNum | DeciduousToothLetter;
type Quadrant = "1" | "2" | "3" | "4";

const props = defineProps<{
  modelValue: IDataImageMap[DataImageType.FDI];
}>();

const emit = defineEmits(["update:modelValue"]);

const selectedTeeth = reactive<IDataImageMap[DataImageType.FDI]>(
  JSON.parse(JSON.stringify(props.modelValue || { "1": [], "2": [], "3": [], "4": [] }))
);

watch(
  selectedTeeth,
  newValue => {
    emit("update:modelValue", newValue);
  },
  { deep: true }
);

const allTeeth: Record<Quadrant, { permanent: { name: ToothName }[]; deciduous: { name: ToothName }[] }> = {
  "1": {
    // Upper Left
    permanent: Array.from({ length: 8 }, (_, i) => ({ name: `${8 - i}` as PermanentToothNum })),
    deciduous: Array.from({ length: 5 }, (_, i) => ({ name: String.fromCharCode(69 - i) as DeciduousToothLetter }))
  },
  "2": {
    // Upper Right
    permanent: Array.from({ length: 8 }, (_, i) => ({ name: `${i + 1}` as PermanentToothNum })),
    deciduous: Array.from({ length: 5 }, (_, i) => ({ name: String.fromCharCode(65 + i) as DeciduousToothLetter }))
  },
  "3": {
    // Lower Left
    permanent: Array.from({ length: 8 }, (_, i) => ({ name: `${8 - i}` as PermanentToothNum })),
    deciduous: Array.from({ length: 5 }, (_, i) => ({ name: String.fromCharCode(69 - i) as DeciduousToothLetter }))
  },
  "4": {
    // Lower Right
    permanent: Array.from({ length: 8 }, (_, i) => ({ name: `${i + 1}` as PermanentToothNum })),
    deciduous: Array.from({ length: 5 }, (_, i) => ({ name: String.fromCharCode(65 + i) as DeciduousToothLetter }))
  }
};

const teeth = {
  upperLeft: {
    // 象限 1
    permanent: allTeeth["1"].permanent,
    deciduous: allTeeth["1"].deciduous
  },
  upperRight: {
    // 象限 2
    permanent: allTeeth["2"].permanent,
    deciduous: allTeeth["2"].deciduous
  },
  lowerLeft: {
    // 象限 3
    permanent: allTeeth["3"].permanent,
    deciduous: allTeeth["3"].deciduous
  },
  lowerRight: {
    // 象限 4
    permanent: allTeeth["4"].permanent,
    deciduous: allTeeth["4"].deciduous
  }
};

// 检查 toothName 是否是 象限 对应的牙
const isSelected = (quadrant: Quadrant, toothName: ToothName) => {
  return selectedTeeth[quadrant]?.some(t => t.name === toothName);
};

// 切换 象限 对应的牙
const toggleTooth = (quadrant: Quadrant, toothName: ToothName) => {
  const quadrantTeeth = selectedTeeth[quadrant];
  if (!quadrantTeeth) {
    selectedTeeth[quadrant] = [];
  }
  const index = selectedTeeth[quadrant].findIndex(t => t.name === toothName);
  if (index > -1) {
    selectedTeeth[quadrant].splice(index, 1);
  } else {
    selectedTeeth[quadrant].push({ name: toothName, value: "" });
  }
};

const clearAll = () => {
  selectedTeeth["1"] = [];
  selectedTeeth["2"] = [];
  selectedTeeth["3"] = [];
  selectedTeeth["4"] = [];
};

const selectPreset = (preset: string) => {
  clearAll();

  const type = preset.includes("恒") ? "permanent" : "deciduous";

  const getTeeth = (quadrantKey: Quadrant) => allTeeth[quadrantKey][type].map(t => ({ name: t.name, value: "" }));

  switch (preset) {
    case "全口恒牙":
    case "全口乳牙":
      selectedTeeth["1"] = getTeeth("1");
      selectedTeeth["2"] = getTeeth("2");
      selectedTeeth["3"] = getTeeth("3");
      selectedTeeth["4"] = getTeeth("4");
      break;
    case "上半口-恒":
    case "上半口-乳":
      selectedTeeth["1"] = getTeeth("1");
      selectedTeeth["2"] = getTeeth("2");
      break;
    case "下半口-恒":
    case "下半口-乳":
      selectedTeeth["3"] = getTeeth("3");
      selectedTeeth["4"] = getTeeth("4");
      break;
    case "左上-恒":
    case "左上-乳":
      selectedTeeth["1"] = getTeeth("1");
      break;
    case "左下-恒":
    case "左下-乳":
      selectedTeeth["3"] = getTeeth("3");
      break;
    case "右上-恒":
    case "右上-乳":
      selectedTeeth["2"] = getTeeth("2");
      break;
    case "右下-恒":
    case "右下-乳":
      selectedTeeth["4"] = getTeeth("4");
      break;
  }
};
</script>

<style scoped lang="less">
.tooth-editor {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  min-width: 640px;
}
.actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.actions .row {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
.tooth-chart {
  position: relative;
  padding: 20px 0;
}
.center-line {
  position: absolute;
  top: 0;
  left: 50%;
  bottom: 0;
  width: 1px;
  background-color: #dcdfe6;
  transform: translateX(-50%);
}
.horizontal-line {
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  height: 1px;
  background-color: #dcdfe6;
  transform: translateY(-50%);
  z-index: 0;
}

/* 牙齿行布局 */
.dental-row {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  margin-bottom: 10px;
}
.dental-row:last-child {
  margin-bottom: 0;
  padding-top: 10px;
  box-sizing: border-box;
}

.quadrant {
  width: 50%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.teeth-row {
  display: flex;
  gap: 6px;
  justify-content: center;
}

/* 牙齿排列方向 */
.quadrant:nth-child(odd) .teeth-row {
  flex-direction: row-reverse;
}

/* 牙齿样式 */
.tooth {
  width: 32px;
  height: 32px;
  border-radius: 50% 50% 40% 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: linear-gradient(to bottom, #fefefe, #e0e0e0);
  color: #4e5969;
  user-select: none;
  border: 1px solid #ccc;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  font-size: 12px;
}

/* 乳牙特定样式 */
.baby-tooth {
  font-size: 12px;
  width: 28px;
  height: 28px;
}

/* 恒牙特定样式 */
.adult-tooth {
  font-weight: 600;
  font-size: 14px;
}

/* 悬停效果 */
.tooth:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  border-color: #1677ff;
}

/* 选中效果 */
.tooth.selected {
  background: #1677ff;
  color: white;
  border-color: #005ae0;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(1px);
}

/* 上排牙齿 - 乳牙位置调整 */
//.upper-deciduous {
//  margin-bottom: 8px;
//}
//.upper-row .quadrant:nth-child(odd) .upper-deciduous {
//  //padding-right: 45px;
//}
//.upper-row .quadrant:nth-child(even) .upper-deciduous {
//  //padding-left: 45px;
//}

/* 上排牙齿 - 恒牙位置调整 */
.upper-permanent {
  margin-top: 8px;
}

/* 下排牙齿 - 恒牙位置调整 */
.lower-permanent {
  margin-bottom: 8px;
}

/* 下排牙齿 - 乳牙位置调整 */
.lower-deciduous {
  margin-top: 8px;
}
//.lower-row .quadrant:nth-child(odd) .lower-deciduous {
//  padding-right: 45px;
//}
//.lower-row .quadrant:nth-child(even) .lower-deciduous {
//  padding-left: 45px;
//}
</style>
