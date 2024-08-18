import React, { useState } from "react";
import TodoList from "./todoList";

TodoFeature.propTypes = {}

function TodoFeature(props) {
    const initTodoList = [
        { id: 1, title: "Eat", status: 'new' },
        { id: 2, title: "Sleep", status: 'completed' },
        { id: 3, title: "Code", status: 'new' },
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, index) => {
        //khi lam viec voi object hoac arrray ta phai clone array de thay doi noi dung
        const updatedTodoList = [...todoList];

        updatedTodoList[index] = {
            ...updatedTodoList[index],
            status: updatedTodoList[index].status === 'new' ? 'completed' : 'new'
        },

        setTodoList(updatedTodoList);
        console.log(`Clicked todo: ${todo.title} at index: ${index}`);
    }
    return (
        <div>
            <h1>Todo List</h1>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    )
}

export default TodoFeature;