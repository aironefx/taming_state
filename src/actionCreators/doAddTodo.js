import TODO_ADD from '../constants'

export function doAddTodo(id, name) {
    return {
        type: TODO_ADD,
        todo: { id, name },
    };
}

export default doAddTodo;