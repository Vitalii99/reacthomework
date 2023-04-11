import React from "react";
import { ACTIONS } from "../app";

const DigitButton = ({ dispatch, digit }) => {
    return (
        <button type="button"
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
        >
            {digit}
        </button>
    )
}

export default DigitButton;