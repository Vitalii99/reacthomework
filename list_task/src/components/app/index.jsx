import React from "react";
import Main from "../main";

import './app.css';

const App = () => {
    const taskArray = ['First', 'Second', 'Third'];
    return (
        <div className="wrapper">
            <Main taskArray={taskArray} />
        </div>
    );
}

export default App;