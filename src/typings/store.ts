import { Commit } from "vuex";

export interface ITodo {
  id: number;
  todoValue: string;
  status: TODO_STATUS;
}

export interface IState {
  todoList: ITodo[];
  elementStyle: any;
}
export enum TODO_STATUS {
  WILLDO = "willdo",
  DOING = "doing",
  DONE = "done",
}

export interface IContext {
  commit: Commit;
  state: IState;
}
