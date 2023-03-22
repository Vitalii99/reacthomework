import React from "react";
import Todo from "./todo";

import './task_list.css';

const TaskList = ({ task, setTask }) => {
    return (
        <div className="task_container">
            <ul className="task_list">
                {task.map((todo) => (
                    <Todo setTask={setTask} task={task} key={todo.id} todo={todo} text={todo.text} />
                ))}
            </ul>
        </div>
    );
}

export default TaskList;