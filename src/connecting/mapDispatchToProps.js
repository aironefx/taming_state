import doToggleTodo from "../actionCreators/doToogleTodo";


export function mapDispatchToProps(dispatch) {
    return {
        onToggleTodo: id => dispatch(doToggleTodo(id)),
    };
}

export default mapDispatchToProps;