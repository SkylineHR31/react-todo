import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";

// components
import TodoList from "./components/TodoList/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// icons
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

// styles
import "./styles/layout.scss";
import "./styles/todo.scss";
import { addItemHandler } from "./store/actionsCreators/ToDoActionCreators";

// images

export const App: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputText(event.target.value);
  };

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
                  className="todo-app-input"
                  type="text"
                  name="todoInputText"
                  id="todoInputText"
                  placeholder="Please enter your task..."
                  onChange={inputChangeHandler}
                  onKeyDown={(event) => {
                    if (event && event.key === "Enter") {
                      dispatch(
                        addItemHandler(
                          inputText,
                          event,
                          undefined,
                          inputRef.current!
                        )
                      );
                      setInputText("");
                    }
                  }}
                  value={inputText}
                  ref={inputRef}
                />
                <button
                  onClick={(event) => {
                    dispatch(addItemHandler(inputText, undefined, event));
                    setInputText("");
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
                <TodoList></TodoList>
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
  id: number;
  checked: boolean;
};
