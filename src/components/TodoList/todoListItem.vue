<template>
  <div>
    <input
      type="checkbox"
      :checked="!isNotDone"
      @click="setDoneClick(item.id)"
    />
    <span :class="isNotDone ? '' : 'line-through'">{{ item.todoValue }}</span>
    <todo-button
      class="delete-button"
      text="删除"
      @click="deleteTodoClick(item.id)"
    ></todo-button>
    <todo-button
      :class="isWillDo ? 'will-do' : 'doing'"
      :text="isWillDo ? '正在做。。。' : '已完成！！！'"
      v-show="isNotDone"
      @click="setDoingClick(item.id)"
    ></todo-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import { ITodo, TODO_STATUS } from "@/typings/store";
import TodoButton from "../common/TodoButton.vue";
import { deleteTodo, setTodoList, setDone, setDoing } from "@/hooks";

export default defineComponent({
  props: {
    item: Object as PropType<ITodo>,
  },
  components: { TodoButton },
  data() {
    return {};
  },
  setup(props) {
    function deleteTodoClick(id: number): void {
      deleteTodo(id);
      setTodoList();
    }
    const setDoneClick = (id: number): void => {
      setDone(id);
    };
    const setDoingClick = (id: number): void => {
      setDoing(id);
    };
    const isNotDone = computed(() => {
      return props.item && props.item.status !== TODO_STATUS.DONE;
    });
    const isWillDo = computed(() => {
      return props.item && props.item.status === TODO_STATUS.WILLDO;
    });
    return {
      deleteTodoClick,
      setDoneClick,
      setDoingClick,
      isNotDone,
      isWillDo,
      TODO_STATUS, //即便在setup中没有逻辑参与，仍然需要return，否则无法在模板中运用
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/style/common.base.scss";
.delete-button {
  background-color: $deleteColor;
}
.will-do {
  background-color: $willdoColor;
}
.doing {
  background-color: $doingColor;
}
.line-through {
  text-decoration: line-through;
}
</style>
