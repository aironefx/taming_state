import {FILTER_SET} from '../constants'
import applySetFilter from "./applySetFilter";

export function filterReducer(state = 'SHOW_ALL', action) {
    switch(action.type) {
        case FILTER_SET : {
            return applySetFilter(state, action);
        }
        default : return state;
    }
}

export default filterReducer;