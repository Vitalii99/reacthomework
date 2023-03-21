import React from "react";

import './todo.css';

const Todo = ({ text, todo, setTask, task }) => {
    // console.log(todo.time)
    const todoTime = todo.time
    // events
    const onDeleteHandler = () => {
        setTask(task.filter(elem => elem.id !== todo.id))
    }
    const onCompletedHandler = () => {
        setTask(task.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }
    return (
        <div className="container_todo">
            <div className="todo">
                <li className={`todo_item ${todo.completed ? "completed" : ""}`}>{text}</li>
                <button onClick={onCompletedHandler}><i className="fa-solid fa-check"></i></button>
                <button onClick={onDeleteHandler}><i className="fa-regular fa-trash-can"></i></button>
            </div>
            <span>Створено : {todoTime} </span>
        </div>
    )
}

export default Todo;