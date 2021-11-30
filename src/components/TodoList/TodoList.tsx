import React from "react";

// components
import TodoListItem from "../TodoListItem/TodoListItem";
import { listItem } from "../../App";

// styles
import "./TodoList.scss";

interface ITodoList {
  toDoList: listItem[];
  removeHandler: () => void;
  checkHandler: () => void;
}

const TodoList: React.FC<ITodoList> = ({
  toDoList,
  removeHandler,
  checkHandler,
}) => {
  return (
    <ul className="todo-list">
      {!!toDoList &&
        toDoList.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              title={item.title}
              checked={item.checked}
              removeHandler={removeHandler}
              checkHandler={checkHandler}
            ></TodoListItem>
          );
        })}
    </ul>
  );
};

export default TodoList;
