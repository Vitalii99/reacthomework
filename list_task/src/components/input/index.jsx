import React from "react";

import './input.css';

const Input = ({ setInputText, task, setTask, inputText, getUserTime }) => {
    // js code and function
    const onInputTextHandler = (e) => {
        // console.log(e.target.value)
        setInputText(e.target.value)
    }
    const onSubmitTaskHandler = (e) => {
        e.preventDefault();
        if (inputText === "") {
            alert('Введіть завдання!')
        } else {
            setTask([...task, { text: inputText, completed: false, id: Math.random() * 1000 + 'b', time: getUserTime() }]);
            setInputText('');
        }
    }
    // console.log(inputText)
    return (
        <form className="input">
            <input onChange={onInputTextHandler} type="text" name="text" value={inputText} />
            <input onClick={onSubmitTaskHandler} type="submit" name="text" value={'+'} />
        </form>
    )
}

export default Input;