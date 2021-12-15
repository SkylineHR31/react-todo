import React, { useState, useRef, useEffect } from "react";
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
  const [list, setList] = useState<listItem[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const inputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputText(event.target.value);
  };

  const removeItem = (id?: number) => {
    setList((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const checkItem = (id?: number) => {
    let itemIndex = list.findIndex((_item) => {
      return _item.id === id;
    });

    if (itemIndex > -1) {
      list[itemIndex].checked = !list[itemIndex].checked;
    }

    setList([...list]);
  };

  useEffect(() => {
    setList(JSON.parse(window.localStorage.getItem("todosList") || ""));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todosList", JSON.stringify(list));
  }, [list]);

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
                    dispatch(addItemHandler(inputText, event, undefined, inputRef.current!))
                  }}
                  value={inputText}
                  ref={inputRef}
                />
                <button
                  onClick={(event) => {
                    dispatch(addItemHandler(inputText, undefined, event))
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
  id: number;
  checked: boolean;
};
