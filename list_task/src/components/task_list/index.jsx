import React from "react";

import './task_list.css';

const TaskList = ({ taskArray }) => {
    return (
        <div>
            <ul>
                {taskArray.map((elem, index) => {
                    return (
                        <li key={index * 5 + 'b'}>{elem}
                            <div><i className="fa-solid fa-pencil"></i></div>
                            <div><i className="fa-regular fa-trash-can"></i></div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TaskList;