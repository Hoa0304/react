import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
    todoList : PropTypes.array
};

TodoList.defaultProp = {
    todoList : []
}

function TodoList({ todoList }) {
    // const {} = todoList;    nếu nhìu props
    return (
        <div>
            <h2>Todo List</h2>
            {todoList.map(todo => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    );
}

export default TodoList;
