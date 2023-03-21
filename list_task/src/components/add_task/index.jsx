import React from "react";
import Input from "../input";
import TaskList from "../task_list";

export default function AddTask({ task, setTask, setInputText, inputText, getUserTime }) {
    return (
        <div>
            <Input task={task} setTask={setTask} setInputText={setInputText} inputText={inputText} getUserTime={getUserTime} />
            <TaskList setTask={setTask} task={task} />
        </div>
    );
}