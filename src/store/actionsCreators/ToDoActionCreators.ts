import { IAction, TodoActionsEnum, TodoActions } from "../../types/todo";
import { listItem } from "../../App";
import { Dispatch } from "redux";

export const addItemHandler = (
  title?: string,
  event?: React.KeyboardEvent,
  inputRef?: HTMLInputElement
) => {
  return (dispatch: Dispatch<TodoActions>) => {
    if (title) {
      const newItem: listItem = {
        title: title,
        id: Date.now(),
        checked: false,
      };
      dispatch({ type: TodoActionsEnum.ADD_TODO, payload: newItem });
      // setList([newItem, ...list]);
    } else if (event && event.key === "Enter" && inputRef && inputRef.value) {
      const newItem: listItem = {
        title: inputRef.value,
        id: Date.now(),
        checked: false,
      };
      dispatch({ type: TodoActionsEnum.ADD_TODO, payload: newItem });
    //   setList((prev) => [newItem, ...prev]);
    //   setInputText("");
    } else {
      return;
    }
    //   setInputText("");
  };
};
