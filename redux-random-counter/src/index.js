import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


/** CLASSWORK EXAMPLE */
const counter = document.getElementById('counter');
const dec = document.getElementById('dec');
const inc = document.getElementById('inc');
const random = document.getElementById('random');

let store = 0;

dec.addEventListener('click', () => {
  store = reducer({ type: "DECREMENT" }, store);
  // console.log("DECREMENT :" + store);
  counter.innerText = store;
});

inc.addEventListener('click', () => {
  store = reducer({ type: "INCREMENT" }, store);
  // console.log("INCREMENT :" + store);
  counter.textContent = store;
});

random.addEventListener('click', () => {
  let randomDigit = Math.floor(Math.random() * 30)
  store = reducer({ type: "RANDOM", randomX: randomDigit }, store);
  // console.log("RANDOM :" + store);
  counter.textContent = store;
});

function reducer(action, state = 0) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "RANDOM") {
    return state = action.randomX
  } else {
    return state;
  }
}