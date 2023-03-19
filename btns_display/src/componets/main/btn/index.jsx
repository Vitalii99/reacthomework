import React from "react";

const Btn = ({ onUpdateCounter, sing }) => { // {sing} props знак операції
    return (
        <div className="button"
            onClick={() => {
                onUpdateCounter(sing) //відображення знака операції при натисканні
            }}>{sing} {/**назва кнопки*/}
        </div> // функція подія
        // <div className="button" onClick={() => { this.updateCounter('+') }}>+</div>
    )
}

export default Btn;

