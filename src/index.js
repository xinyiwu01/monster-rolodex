import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//root: where it should be: public->index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
//render the entire app, strict mode: warnings about old versions
root.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
