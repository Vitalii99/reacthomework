import React, { useReducer } from "react";
import DigitButton from "../buttons/digit-button";
import OperationButton from "../buttons/operation-button";


import './app.css';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  EVALUATE: 'evaluate',
  MEMORY_FUNC: 'memory-func',
}

// function reducer(state, action)
function reducer(state, { type, payload }) {

  console.dir(state)
  console.dir(payload)

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false,
        }
      }
      if (payload.digit === '0' && state.currentOperand === '0') {
        return state
      }
      if (payload.digit === '.' && state.currentOperand === '.') {
        return state
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }
      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }
    case ACTIONS.CLEAR:
      return {}
    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),

      }


    /**------------mrc----m----m+------------- */
    case ACTIONS.MEMORY_FUNC:
      if (state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null) {
        return state;
      }
      return {
        ...state,
      }


    /**-------------------------------------- */

    default:
      return state;
  }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    return ""
  }
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "x":
      computation = prev * current;
      break;
    case "/":
      computation = prev / current;
      break;
    default:
  }
  return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})
function formatOperant(operant) {
  if (operant == null) return
  const [integer, decimal] = operant.split('.');
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

const App = () => {

  // const [state, dispatch] = useReducer(reducer, {})
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

  return (
    <section className="calculator">
      {/* display */}
      <div className="calc_display">
        <output className="previous-operand">
          {formatOperant(previousOperand)} {operation}
        </output>
        <output className="current-operand">
          {formatOperant(currentOperand)}
        </output>
      </div>
      <div className="calc_keyboard">
        {/* top row buttons not working*/}
        <button onClick={() => dispatch({ type: ACTIONS.MEMORY_FUNC })}>mrc</button>
        <button operation="m-" onClick={() => dispatch({ type: ACTIONS.MEMORY_FUNC, payload: { operation } })}>m-</button>
        <button onClick={() => dispatch({ type: ACTIONS.MEMORY_FUNC })}>m+</button>
        <OperationButton operation="/" dispatch={dispatch} />
        {/* 2 row buttons */}
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="x" dispatch={dispatch} />
        {/* 3 row buttons */}
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        {/* 4 row buttons */}
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        {/* 5 row buttons */}
        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <button type="button" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>C</button>
        <button type="button" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
      </div>
    </section>
  );
}

export default App;