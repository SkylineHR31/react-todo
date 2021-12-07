import { Action } from "redux";
import { listItem } from "../App";

export interface IAction<T> extends Action<string> {
  type: string;
  payload?: T;
}

export enum TodoActionsEnum {
  CHECK_TODO = "CHECK_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  EDIT_TODO = "EDIT_TODO",
}

interface ICheckToDo {
  type: TodoActionsEnum.CHECK_TODO;
  payload: listItem[];
}

interface IRemoveToDo {
  type: TodoActionsEnum.REMOVE_TODO;
  payload: listItem[];
}

// edit here

export type TodoActions = ICheckToDo | IRemoveToDo;
