import React, { useState } from 'react';
import Btn from '../btn/btn';

import './app.css';

function App() {

    let [store, setStore] = useState(0)
    // console.log(store)

    const onHandlerUpdate = (sign) => {
        switch (sign) {
            case "-":
                store = reducer({ type: "DECREMENT" }, store);
                // console.log("DECREMENT :" + store);
                setStore(store);
                break;
            case "+":
                store = reducer({ type: "INCREMENT" }, store);
                // console.log("INCREMENT :" + store);
                setStore(store);
                break;
            case "Random":
                let randomDigit = Math.floor(Math.random() * 30)
                store = reducer({ type: "RANDOM", randomX: randomDigit }, store);
                // console.log("RANDOM :" + store);
                setStore(store);
                break;
            default:
        }
    }

    function reducer(action, state = 0) {
        if (action.type === "INCREMENT") {
            return state + 1;
        } else if (action.type === "DECREMENT") {
            return state - 1;
        } else if (action.type === "RANDOM") {
            return state = action.randomX;
        } else {
            return state;
        }
    }

    return (
        <div className='wrap'>
            <h2 id='counter'>{store}</h2>
            <Btn onHandlerUpdate={onHandlerUpdate} sign={"-"} />
            <Btn onHandlerUpdate={onHandlerUpdate} sign={"+"} />
            <Btn onHandlerUpdate={onHandlerUpdate} sign={"Random"} />
        </div>
    );
}

export default App;
