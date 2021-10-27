<template>
  <div>
    <todo-list-item
      v-for="item of todoList"
      :key="item.id"
      :item="item"
    ></todo-list-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo } from "@/typings/store";
import TodoListItem from "./todoListItem.vue";
export default defineComponent({
  props: {
    todoList: Array as PropType<ITodo[]>,
  },
  components: { TodoListItem },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
