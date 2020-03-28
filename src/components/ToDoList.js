import React from "react";
import TodoItem from "./ToDoItem";
import mapDispatchToProps from "../connecting/mapDispatchToProps";
import { connect } from 'react-redux';

const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItem);

export function TodoList({ todos }) {
    return (
        <div>
            {todos.map(todo => <ConnectedTodoItem todo={todo}/>)}
        </div>
    );
}

export default TodoList;