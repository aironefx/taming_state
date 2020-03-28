import React from "react";

export function TodoItem({ todo, onToggleTodo }) {
    const { name, id, completed } = todo;
    return (
        <div>
            {name}
            <button type="button" onClick={() => onToggleTodo(id)}>
                {completed ? "Incomplete" : "Complete"}
            </button>
        </div>
    );
}

export default TodoItem;