<template>
  <div style="width: 100%; height: 100%; display: flex; flex-direction: column">
    <div class="comment-header">批注信息</div>
    <div class="comment-container">
      <div style="padding-top: 100px" v-if="commentList.length === 0">
        <a-empty> 暂无批注信息 </a-empty>
      </div>
      <div
        class="comment-item"
        :class="{ active: selectedGroupId.includes(i.groupId) }"
        v-for="i in commentList"
        :key="i.groupId"
        @click="editorLocationComment(i)"
      >
        <div class="comment-item__title">
          <span></span>
          <span :title="i.rangeText">{{ i.rangeText }}</span>
          <pk-svg-icon name="editor-close" :size="16" @click.stop="delComment(i)" />
        </div>
        <div class="comment-item__info">
          <span>{{ i.createUser }}</span>
          <span>{{ i.createTime }}</span>
        </div>
        <div class="comment-item__content">{{ i.content }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IAnnotation } from "@/views/editor/interface/Annotation.ts";
import { useListenerHook } from "@/views/editor/core/register/use-listener-hook.ts";
import { nanoid } from "nanoid";
import { Register } from "@/views/editor/core/register/Register.ts";
import { mockCommentData } from "@/views/editor/mock.ts";

defineOptions({
  name: "annotation-viewer"
});

// 选中的批注组ID集合
const selectedGroupId = ref<string[]>([]);

const commentList = ref<IAnnotation[]>([...mockCommentData]);

const register = new Register(); // 注册事件总线

// 在编辑器中定位批注
const editorLocationComment = (evt: IAnnotation) => {
  register.emit("editorLocationComment", { groupId: evt.groupId });
};

// 删除批注
const delComment = (evt: IAnnotation) => {
  commentList.value = commentList.value.filter(i => i.id !== evt.id);
  register.emit("delComment", { groupId: evt.groupId });
};

// 更新配置列表
useListenerHook("updateComment", ({ groupIds }) => {
  commentList.value = commentList.value.filter(i => groupIds.includes(i.groupId));
});

// 添加批注
useListenerHook("addComment", payload => {
  commentList.value.push({ ...payload, id: nanoid() });
});

// 批注列表定位
useListenerHook("locationComment", ({ groupIds }) => {
  selectedGroupId.value = groupIds;
  nextTick(() => {
    if (selectedGroupId.value.length > 0) {
      const dom = document.querySelector(".comment-container");
      const activeDom = dom?.querySelector(".active");
      if (activeDom) {
        // 将高亮的元素滚动到可见区域
        activeDom.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  });
});
</script>

<style scoped lang="less">
.comment-header {
  width: 100%;
  height: 35px;
  background-color: #ffffff;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-2);
}
.comment-container {
  //height: 100%;
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 8px;
  box-sizing: border-box;
}
.comment-item {
  background: #ffffff;
  border: 1px solid #e2e6ed;
  position: relative;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  margin-bottom: 14px;
  cursor: pointer;
  transition: all 0.5s;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;

  &:hover {
    border-color: #c0c6cf;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  &.active {
    //border-color: #f6b020;
    border-color: rgb(var(--primary-6));
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .comment-item__title {
    height: 22px;
    position: relative;
    display: flex;
    align-items: center;
    color: #c1c6ce;

    & > span:first-child {
      background-color: #dbdbdb;
      width: 4px;
      height: 16px;
      margin-right: 5px;
      display: inline-block;
      border-radius: 999px;
    }

    & > span:nth-child(2) {
      width: 170px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    & > .svg-icon {
      width: 16px;
      height: 16px;
      cursor: pointer;
      position: absolute;
      right: -4px;
      top: 0px;
    }
  }

  .comment-item__info {
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span:first-child {
      font-weight: 600;
    }

    & > span:last-child {
      color: #c1c6ce;
    }
  }

  .comment-item__content {
    line-height: 22px;
    word-wrap: break-word;
  }
}
</style>
