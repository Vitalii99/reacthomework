import React from "react";
import Input from "../input";
import TaskList from "../task_list";

export default function AddTask({taskArray}) {
    return (
        <div>
            <Input />
            <TaskList taskArray={taskArray} />
        </div>
    );
}