import { elementStyle } from "@/api/request";
import { IContext, IState, ITodo } from "@/typings/store";
import { createStore } from "vuex";
import {
  ADD_TODO,
  DELETE_TODO,
  SET_DOING,
  SET_DONE,
  SET_ELEMENT_STYLE,
} from "./types";

export default createStore({
  state: {
    todoList: [],
    elementStyle: {},
  },
  mutations: {
    [ADD_TODO](state: IState, todo: ITodo): void {
      state.todoList = [todo, ...state.todoList];
    },
    [DELETE_TODO](state: IState, todoList: ITodo[]): void {
      state.todoList = todoList;
    },
    [SET_DONE](state: IState, todoList: ITodo[]): void {
      state.todoList = todoList;
    },
    [SET_DOING](state: IState, todoList: ITodo[]): void {
      state.todoList = todoList;
    },
    [SET_ELEMENT_STYLE](state: IState, payload: any): void {
      state.elementStyle = { ...payload };
    },
  },
  actions: {
    async [SET_ELEMENT_STYLE]({ commit }: IContext) {
      const obj = await elementStyle();
      commit(SET_ELEMENT_STYLE, obj.data);
    },
  },
});
