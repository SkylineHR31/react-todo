import { listItem } from "../../App";
import { IAction, TodoActionsEnum } from "../../types/todo";

const initialState: listItem[] = JSON.parse(window.localStorage.getItem("todosList") || "");


export default function todoReducer(state = initialState, action: IAction<any>): listItem[] {
  switch (action.type) {
    case TodoActionsEnum.CHECK_TODO: return state;
    case TodoActionsEnum.REMOVE_TODO: return state;
    case TodoActionsEnum.ADD_TODO: return {...state, ...action.payload};
    default:
      return state;
  }
};
