export function mapStateToProps(state) {
    return {
        todos: state.todoState,
    };
}

export default mapStateToProps;