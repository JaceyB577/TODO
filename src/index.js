import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoList from "./TodoList";

const destination = document.querySelector("#container"),
    root = ReactDOM.createRoot(destination);

root.render(
    <div>
        <TodoList/>
    </div>
);