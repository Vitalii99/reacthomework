import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

// react 17
/**import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
*/


console.log('hello')
