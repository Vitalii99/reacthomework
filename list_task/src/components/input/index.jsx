import React from "react";

import './input.css';

const Input = () =>{
    return(
        <div className="input">
            <input type="text" name="text" />
            <input type="button" name="button" value={'Зберегти'} />
        </div>
    )
}

export default Input;