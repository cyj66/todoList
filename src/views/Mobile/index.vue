<template>
  <div class="page" :style="htmlCSS">
    <page-header :style="headCSS">mobile</page-header>
    <page-add>
      <!-- vue3废弃.sync修饰符，使用v-model配合子组件绑定modelValue和@update:modelValue实现双向绑定 -->
      <todo-input v-model="todoValue"></todo-input>
      <!-- vue3允许给原生组件直接透传点击事件，已废弃.native -->
      <todo-button
        class="comfirm-button"
        text="添加"
        @click="addTodoClick()"
      ></todo-button>
    </page-add>
    <page-list>
      <todo-list :todoList="store.state.todoList"></todo-list>
    </page-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import TodoInput from "@/components/common/TodoInput.vue";
import TodoButton from "@/components/common/TodoButton.vue";
import TodoList from "@/components/TodoList/index.vue";
import { addTodo, setTodoList, setElementStyle } from "@/hooks";
//在setup里面使用store,可以从项目中的store文件引入，也可以从useStore()引入
import store from "@/store";
// import { useStore } from "vuex";

export default defineComponent({
  props: {},
  components: {
    TodoList,
    TodoInput,
    TodoButton,
  },
  data() {
    return {};
  },
  setup() {
    // const store=useStore()
    const todoValue = ref("");
    function addTodoClick(): void {
      addTodo(todoValue.value);
      todoValue.value = "";
    }
    onMounted(() => {
      setElementStyle();
      setTodoList();
    });
    return {
      store,
      todoValue,
      addTodoClick,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/style/common.base.scss";

.comfirm-button {
  background-color: $confirmColor;
}
</style>
