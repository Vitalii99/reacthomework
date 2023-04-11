import React from "react";
import { ACTIONS } from "../app";

const OperationButton = ({ dispatch, operation }) => {
    return (
        <button type="button"
            onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
        >
            {operation}
        </button>
    )
}

export default OperationButton;