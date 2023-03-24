import React from "react";

import './button.css'

const Button = () => {
    const onClick = () => {
        console.log('good')
    }
    return (
        <header className="wrap_btn">
            <div onClick={onClick} type="button">
                Офіційний курс гривні до іноземних валют та облікова ціна банківських металів
            </div>
            <div onClick={onClick} type="button">Національний банк України</div>
            <div onClick={onClick} type="button">
                Основні показники діяльності банків України</div>
        </header>

    )
}

export default Button;