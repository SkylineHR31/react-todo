import React from "react";

// components
import TodoListItem from "../TodoListItem/TodoListItem";

// styles
import "./TodoList.scss";
import { useTypedSelector } from "../../hookah/useTypedSelector";
import { listItem } from "../../App";

const TodoList: React.FC = () => {
  const storeTodosArray: listItem[] = useTypedSelector((state) => state.todoStore);

  return (
    <ul className="todo-list">
      {!!storeTodosArray && storeTodosArray.length > 0 &&
        storeTodosArray.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              title={item.title}
              checked={item.checked}
              id={item.id}
            ></TodoListItem>
          );
        })}
    </ul>
  );
};

export default TodoList;
