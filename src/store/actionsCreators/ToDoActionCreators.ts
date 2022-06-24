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
    } else if (eventKey && inputRef && inputRef.value) {
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

export const checkItem = (todos: listItem[], id: number) => {
  return (dispatch: Dispatch<TodoActions>) => {
    let _todos = todos;
    let itemIndex = _todos.findIndex((item) => {
      return item.id === id;
    });

    if (itemIndex > -1) {
      _todos[itemIndex].checked = !_todos[itemIndex].checked;
    }
    dispatch({ type: TodoActionsEnum.CHECK_TODO, payload: _todos });
  };
};

export const removeItem = (id: number) => {
  return (dispatch: Dispatch<TodoActions>) => {
    dispatch({ type: TodoActionsEnum.REMOVE_TODO, payload: id });
  };
};

export const editItem = (
  todos: listItem[],
  id: number,
  inputRef?: HTMLInputElement
) => {
  return (dispatch: Dispatch<TodoActions>) => {
    let _todos = todos;
    if (!!inputRef) {
      inputRef.removeAttribute("readonly");
      inputRef.classList.add("focused");
      inputRef.focus();
    }

    let itemIndex = _todos.findIndex((item) => {
      return item.id === id;
    });

    if (itemIndex > -1) {
      _todos[itemIndex].title = inputRef?.value || "";
    }

    inputRef?.addEventListener("keypress", function keypressHandler(event) {
      if (event.key === "Enter") {
        dispatch({ type: TodoActionsEnum.EDIT_TODO, payload: _todos })
        inputRef.setAttribute("readonly", "readonly");
        inputRef.classList.remove("focused");
        inputRef.blur();
        inputRef?.removeEventListener("keypress", keypressHandler);
      }
    });
  };
};
