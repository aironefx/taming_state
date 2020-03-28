import {TODO_ADD, TODO_TOGGLE} from '../constants';
import applyAddTodo from "./applyAddTodo";
import applyToggleTodo from "./applyToggleTodo";
import todos from "./todos";

export function todoReducer(state = todos, action) {
    switch(action.type) {
        case TODO_ADD : {
            return applyAddTodo(state, action);
        }
        case TODO_TOGGLE : {
            return applyToggleTodo(state, action);
        }
        default : return state;
    }
}

export default todoReducer;