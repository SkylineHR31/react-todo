import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import { listItem } from "../../App";

const TodoList: React.FC<{
  toDoList: listItem[];
  removeHandler: () => void;
  checkHandler: () => void;
}> = ({ toDoList, removeHandler, checkHandler }) => {
  return <ul className="todo-list">{/* {{list}} */}</ul>;
};

export default TodoList;
