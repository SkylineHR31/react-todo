import React from "react";

// components
import TodoListItem from "../TodoListItem/TodoListItem";

// styles
import "./TodoList.scss";
import { useTypedSelector } from "../../hookah/useTypedSelector";

interface ITodoList {
  removeHandler: (id?: number) => any;
  checkHandler: (id?: number) => any;
}

const TodoList: React.FC<ITodoList> = ({
  removeHandler,
  checkHandler,
}) => {
  const storeTodosArray = useTypedSelector((state) => state.todo);
  
  return (
    <ul className="todo-list">
      {!!storeTodosArray &&
        storeTodosArray.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              title={item.title}
              checked={item.checked}
              id={item.id}
              removeHandler={removeHandler}
              checkHandler={checkHandler}
            ></TodoListItem>
          );
        })}
    </ul>
  );
};

export default TodoList;
