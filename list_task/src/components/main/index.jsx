import React from "react";
import Title from "../title";
import AddTask from "../add_task";

import './main.css';

const Main = ({taskArray}) => {
    return (
        <div className="main">
            <Title text='Список завдань на сьогодні:' />
            <AddTask taskArray={taskArray} />
            <Title text='Залишилося 0 завдання!' />
        </div>
    );
}

export default Main;