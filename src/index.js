import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ThemeContext} from "./context/ThemeContext";
import {themes} from "./context/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';;

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themes}>
        <App/>
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
