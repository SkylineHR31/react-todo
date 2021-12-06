import {Action} from "redux";
import { listItem } from "../App";

const initialState: listItem[] = JSON.parse(window.localStorage.getItem("todosList") || "");

export interface IAction<T> extends Action<string> {
    type: string;
    payload?: T;
}

export default function reducer(state = initialState, action: IAction<any>): listItem[] {
  switch (action.type) {
    case "checkToDo": return [...state, action.payload.todoId]
    case "removeToDo":
    default:
      return state;
  }
};
