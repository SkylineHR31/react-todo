import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// styles
import "./TodoListItem.scss";

interface ITodoListItem {
  title: string;
  checked: boolean;
  removeHandler: () => void;
  checkHandler: () => void;
}

const TodoListItem: React.FC<ITodoListItem> = ({
  title,
  checked,
  removeHandler,
  checkHandler,
}) => {
  const onChangeCheckHandler = () => {};

  return (
    <li className="todo-list-item">
      <label className="todo-list-item-text">
        <input
          type="checkbox"
          name="todoInputCheckbox"
          id="todoInputCheckbox"
          className="todo-list-item-check"
          checked={checked}
          onChange={() => {
            checkHandler();
          }}
        />
        <span className="title">{title}</span>
      </label>
      <button
        onClick={() => {
          removeHandler();
        }}
        className="todo-list-item-remove"
      >
        <FontAwesomeIcon size="2x" icon={faTrash}></FontAwesomeIcon>
      </button>
    </li>
  );
};

export default TodoListItem;
