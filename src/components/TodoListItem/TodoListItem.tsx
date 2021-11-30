import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// styles
import "./TodoListItem.scss";

interface ITodoListItem {
  title: string;
  id: number;
  checked: boolean;
  removeHandler: (id?: number) => any;
  checkHandler: (id?: number) => any;
}

const TodoListItem: React.FC<ITodoListItem> = ({
  title,
  id,
  checked,
  removeHandler,
  checkHandler,
}) => {
  return (
    <li className="todo-list-item">
      <label className="todo-list-item-text">
        <input
          type="checkbox"
          name="todoInputCheckbox"
          id="todoInputCheckbox"
          className="todo-list-item-check"
          checked={checked}
          onChange={checkHandler.bind(null, id)}
        />
        <span className="title">{title}</span>
      </label>
      <button
        onClick={() => {
          removeHandler(id);
        }}
        className="todo-list-item-remove"
      >
        <FontAwesomeIcon size="2x" icon={faTrash}></FontAwesomeIcon>
      </button>
    </li>
  );
};

export default TodoListItem;
