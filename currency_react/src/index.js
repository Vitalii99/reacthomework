import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/main';

import "./index.css"

const main = ReactDOM.createRoot(document.querySelector('main'));
main.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);