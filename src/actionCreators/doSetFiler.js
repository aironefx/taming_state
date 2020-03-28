import FILTER_SET from '../constants'

export function doSetFilter(filter) {
    return {
        type: FILTER_SET,
        filter,
    };
}

export default doSetFilter;