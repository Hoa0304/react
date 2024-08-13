import React from "react";
import PropTypes from "prop-types";
import TodoList from "./component";

TodoFeature.propTypes = {

}

function TodoFeature(props) {
    const todoList = [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
    ]

    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((todo) => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.completed} readOnly />
                    <span>{todo.title}</span>
                    <TodoList todoList={todoList}/>
                </div>
            ))}
        </div>
    )
}

export default TodoFeature;