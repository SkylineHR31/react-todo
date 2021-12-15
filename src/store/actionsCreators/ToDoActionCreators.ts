import { TodoActionsEnum, TodoActions } from "../../types/todo";
import { listItem } from "../../App";
import { Dispatch } from "redux";
import React from "react";

export const addItemHandler = (
  title?: string,
  eventKey?: React.KeyboardEvent,
  eventMouse?: React.MouseEvent,
  inputRef?: HTMLInputElement
) => {
  return (dispatch: Dispatch<TodoActions>) => {
    let newItemArray: listItem[] = [];
    let newItem: listItem;
    if (title && eventMouse) {
      newItem = {
        title: title,
        id: Date.now(),
        checked: false,
      };
    } else if (
      eventKey &&
      eventKey.key === "Enter" &&
      inputRef &&
      inputRef.value
    ) {
      newItem = {
        title: inputRef.value,
        id: Date.now(),
        checked: false,
      };
    } else {
      return;
    }
    newItemArray.push(newItem);
    dispatch({ type: TodoActionsEnum.ADD_TODO, payload: newItemArray });
  };
};
