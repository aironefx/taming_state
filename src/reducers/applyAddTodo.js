
export function applyAddTodo(state, action) {
    const todo = Object.assign({}, action.todo, { completed: false });
    return state.concat(todo);
}

export default applyAddTodo;