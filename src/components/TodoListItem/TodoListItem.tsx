import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

// styles
import "./TodoListItem.scss";
import { useTypedSelector } from "../../hookah/useTypedSelector";
import {
  checkItem,
  editItem,
  removeItem,
} from "../../store/actionsCreators/ToDoActionCreators";
import { useDispatch } from "react-redux";

interface ITodoListItem {
  title: string;
  id: number;
  checked: boolean;
}

const TodoListItem: React.FC<ITodoListItem> = ({ title, id, checked }) => {
  const storeTodosArray = useTypedSelector((state) => state.todoStore);
  const dispatch = useDispatch();
  const todoRef = useRef<HTMLInputElement>(null);
  const [inputText, setInputText] = useState<string>(title);

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputText(event.target.value);
  };

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
            dispatch(checkItem(storeTodosArray, id));
          }}
        />
        <span className="title-wrapper">
          <input
            onChange={inputChangeHandler}
            className="title"
            type="text"
            value={inputText}
            readOnly
            ref={todoRef}
          />
        </span>
      </label>
      <div className="todo-list-item-controls">
        <button
          onClick={() => {
            dispatch(editItem(storeTodosArray, id, todoRef.current!));
          }}
          className="todo-list-item-edit"
        >
          <FontAwesomeIcon size="2x" icon={faEdit}></FontAwesomeIcon>
        </button>
        <button
          onClick={() => {
            dispatch(removeItem(id));
          }}
          className="todo-list-item-remove"
        >
          <FontAwesomeIcon size="2x" icon={faTrash}></FontAwesomeIcon>
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
