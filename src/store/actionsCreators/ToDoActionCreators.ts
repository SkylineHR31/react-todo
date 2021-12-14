import { TodoActionsEnum, TodoActions } from "../../types/todo";
import { listItem } from "../../App";
import { Dispatch } from "redux";
import React from "react";

export const addItemHandler = (
  title?: string,
  eventKey?: React.KeyboardEvent,
  eventMouse?: React.MouseEvent,
  inputRef?: HTMLInputElement,
  currentState?: listItem[],
) => {
  return (dispatch: Dispatch<TodoActions>) => {
    if (title && eventMouse) {
      const newItem: listItem = {
        title: title,
        id: Date.now(),
        checked: false,
      };
      let newState = currentState;
      newState?.push(newItem);
      dispatch({ type: TodoActionsEnum.ADD_TODO, payload: newState! });
    } else if (eventKey && eventKey.key === "Enter" && inputRef && inputRef.value) {
      const newItem: listItem = {
        title: inputRef.value,
        id: Date.now(),
        checked: false,
      };
      let newState = currentState;
      newState?.push(newItem);
      dispatch({ type: TodoActionsEnum.ADD_TODO, payload: newState! });
    //   setInputText("");
    } else {
      return;
    }
  };
};
