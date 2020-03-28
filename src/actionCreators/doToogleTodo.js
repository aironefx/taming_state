import {TODO_TOGGLE} from '../constants';

export function doToggleTodo(id) {
    return {
        type: TODO_TOGGLE,
        todo: { id },
    };
}

export default doToggleTodo;