import React from 'react';

// components
import TodoList from "./components/TodoList/TodoList";

// styles
import "./styles/layout.scss";
import "./styles/todo.scss";

// images

export const App: React.FC = () => {
  return (
    <main className="app">
      <div className="app-layout">
        <div className="app-container">
          <div className="todo-app">
            <header className="todo-app-header">
              <h1 className="title">To do app</h1>
            </header>
            <div className="todo-app-body">
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
}

export default App;
