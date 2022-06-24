import { listItem } from "../../App";
import { IAction, TodoActionsEnum } from "../../types/todo";

const initialState: listItem[] = [];

export default function todoReducer(
  state = initialState,
  action: IAction<any>
): listItem[] {
  switch (action.type) {
    case TodoActionsEnum.CHECK_TODO:
      return [...action.payload];
    case TodoActionsEnum.REMOVE_TODO:
      return [
        ...state.filter((item) => {
          return item.id !== action.payload;
        }),
      ];
    case TodoActionsEnum.ADD_TODO:
      return [...state, ...action.payload];
    case TodoActionsEnum.EDIT_TODO:
      return [...action.payload];
    default:
      return state;
  }
}
