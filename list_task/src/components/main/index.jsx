import React, { useState } from "react";
import TitleBottom from "../titleBottom";
import TitleTop from "../titleTop";
import AddTask from "../add_task";

import './main.css';

const Main = () => {
    // our state :
    const [inputText, setInputText] = useState("");
    const [task, setTask] = useState([]);
    // counter todo for component titleBottom
    let counter = 0;
    // todo list time create
    // function adding zero before number
    function addZero(d) {
        return (d < 10) ? '0' + d : d;
    }
    // function read time when creating todo
    function getUserTime(time = new Date()) {
        let date = addZero(time.getDate());
        let month = addZero(time.getMonth());
        let y = time.getFullYear();
        let h = addZero(time.getHours());
        let m = addZero(time.getMinutes());
        let s = addZero(time.getSeconds());

        return `${date}.${month}.${y}  ${h}:${m}:${s}`;
    }
    return (
        <div className="main">
            <TitleTop />
            <AddTask task={task} setTask={setTask} setInputText={setInputText} inputText={inputText} getUserTime={getUserTime} />
            <TitleBottom counter={counter} task={task} />
        </div>
    );
}

export default Main;