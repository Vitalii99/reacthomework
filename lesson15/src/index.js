import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// error React 17
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));



