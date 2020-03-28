
export function applyToggleTodo(state, action) {
    return state.map(todo =>
        todo.id === action.todo.id
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo
    );
}

export default applyToggleTodo;