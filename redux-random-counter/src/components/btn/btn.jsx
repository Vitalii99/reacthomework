import React from "react";

const Btn = ({ onHandlerUpdate, sign }) => {
    return (
        <button type='button' className="button" onClick={() => { onHandlerUpdate(sign) }}>{sign}</button>
    )
}

export default Btn;