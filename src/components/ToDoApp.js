import React from "react";
import TodoList from "./ToDoList";
import { connect } from 'react-redux';
import mapStateToProps from "../connecting/mapStateToProps";

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

export function TodoApp() {
    return <ConnectedTodoList />;
}

export default TodoApp;