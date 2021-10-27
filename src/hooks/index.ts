import store from "@/store";
import {
  ADD_TODO,
  DELETE_TODO,
  SET_DONE,
  SET_ELEMENT_STYLE,
} from "@/store/types";
import { ITodo, TODO_STATUS } from "@/typings/store";

function addTodo(todoValue: string): void {
  const todo: ITodo = {
    id: new Date().getTime(),
    todoValue: todoValue,
    status: TODO_STATUS.WILLDO,
  };
  store.commit(ADD_TODO, todo);
  setLocalList(store.state.todoList);
}

function deleteTodo(id: number): void {
  const todoList = store.state.todoList.filter((item) => item.id !== id);
  store.commit(DELETE_TODO, todoList);
  setLocalList(store.state.todoList);
  console.log(66)
}

function setTodoList(): void {
  store.state.todoList = getLocalList();
}

function setDone(id: number): void {
  const todoList = store.state.todoList.map((item) => {
    if (item.id === id) {
      item.status =
        item.status === TODO_STATUS.DONE
          ? TODO_STATUS.WILLDO
          : TODO_STATUS.DONE;
    }
    return item;
  });
  store.commit(SET_DONE, todoList);
  setLocalList(store.state.todoList);
}

function setDoing(id: number): void {
  const todoList = store.state.todoList.map((item) => {
    if (item.id === id) {
      item.status =
        item.status === TODO_STATUS.DOING
          ? TODO_STATUS.WILLDO
          : TODO_STATUS.DOING;
    }
    return item;
  });
  store.commit(SET_DONE, todoList);
  setLocalList(store.state.todoList);
}

function getLocalList(): ITodo[] {
  return JSON.parse(localStorage.getItem("todoList") || "[]");
}

function setLocalList(todoList: ITodo[]): void {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function setElementStyle(): void {
  store.dispatch(SET_ELEMENT_STYLE);
}

export {
  addTodo,
  deleteTodo,
  setTodoList,
  setDone,
  setDoing,
  getLocalList,
  setLocalList,
  setElementStyle,
};
