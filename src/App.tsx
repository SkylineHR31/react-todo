import React, { useState } from "react";

// components
import TodoList from "./components/TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles/layout.scss";
import "./styles/todo.scss";

// images

export const App: React.FC = () => {
  const [list, setList] = useState<listItem[]>();
  const [inputText, setInputText] = useState<string>();

  const addButtonHandler = (): void => {};

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(event.target.value);
  };

  const removeItem = (): void => {};

  const checkItem = (): void => {};

  return (
    <main className="app">
      <div className="app-layout">
        <div className="app-container">
          <div className="todo-app">
            <header className="todo-app-header">
              <h1 className="title">To do app</h1>
            </header>
            <div className="todo-app-body">
              <div className="todo-app-input-wrapper">
                <input
                  type="checkbox"
                  name="todoInputCheckbox"
                  id="todoInputCheckbox"
                  className="todo-app-input-check"
                />
                <input
                  className="todo-app-input"
                  type="text"
                  name="todoInputText"
                  id="todoInputText"
                  placeholder="Please enter your task..."
                  onChange={() => {inputChangeHandler}}
                  value={inputText}
                />
                <button
                  onClick={() => {
                    addButtonHandler();
                  }}
                  className="todo-app-input-control"
                >
                  <FontAwesomeIcon
                    size="2x"
                    icon={faPlusSquare}
                  ></FontAwesomeIcon>
                </button>
              </div>
              <div className="todo-list-wrapper">
                <TodoList
                  toDoList={list!}
                  removeHandler={removeItem}
                  checkHandler={checkItem}
                ></TodoList>
              </div>
            </div>
            <footer className="todo-app-footer"></footer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;

export type listItem = {
  title: string;
  checked: boolean;
};
