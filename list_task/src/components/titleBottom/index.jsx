import React from "react";

import './titleBottom.css';

const TitleBottom = ({ counter, task }) => {

    counter = task.length

    task.forEach((element) => {
        // console.log(element.completed)
        if (element.completed !== false) {
            return counter--;
        }
    });

    return (
        <h3>Залишилося<span className="counter">{counter}</span>завдання!</h3>
    );
}

export default TitleBottom;