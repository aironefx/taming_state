import todoReducer from "../reducers/todoReducer";
import filterReducer from "../reducers/filterReducer";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    todoState: todoReducer,
    filterState: filterReducer,
});

export default rootReducer;